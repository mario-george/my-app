import { FormEvent, useState } from "react";
import useHttp from "./useHttp";
import { useSelector,useDispatch } from "react-redux";
import { render } from "../GlobalRedux/userSlice";

interface Errors {
  title?: string;
  description?: string;
  address?: string;
  back?: string;
}
interface RootState {
  user: {
    user: {
      token?: string | null;
      userID?: string | null;
      expirationDate?: Date | null;
      render:boolean

    };
    loggedIn?: boolean | null;
  };
}
export default function usePlaceHandler({
  placeID,
  setEditMode,
  title,
  address,
  description,
}: {
  placeID: string;
  setEditMode?: (value: boolean) => void;
  title?: string;
  address?: string;
  description?: string;
}) {
  const { isLoading, error, sendRequest } = useHttp();
  const token = useSelector((state: RootState) => state.user.user.token);
const dispatch=useDispatch()
  const [formState, setFormState] = useState({
    title: title ? title : "",
    address: address ? address : "",
    description: description ? description : "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = () => {
    let errors: Errors = {};
    if (!formState.title) {
      errors.title = "Title is required.";
    }
    if (!formState.address) {
      errors.address = "Address is invalid.";
    }
    if (!formState.description) {
      errors.description = "Description is required.";
    } else if (formState.description.length < 6) {
      errors.description = "Description must be at least 6 characters.";
    }
    setErrors(errors);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
  const handleDeletePlace = async () => {
    let respData = await sendRequest('places/'+placeID, "DELETE", null, {
      Authorization: "Bearer " + token,
    });
    dispatch(render())
  };
  const handleUpdate = async (event: React.MouseEvent<HTMLButtonElement>,handleEditSubmit:()=>void) => {
    event.preventDefault();

    validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Place data has no errors!");

      let respData;
      try {
        respData = await sendRequest("places/" + placeID, "PATCH", formState, {
          Authorization: "Bearer " + token,
        });
        console.log(respData);

        handleEditSubmit()

      } catch (err) {
        console.log(err);
        console.log(errors);

      }

      if (error) {
        console.log(error);
        errors.back = error;
        setErrors(errors);
      }
    } else {
      console.log("There are errors. Please correct them.");
    }
  };

  return {
    formState,
    errors,
    handleChange,
    handleUpdate,
    isLoading,
    handleDeletePlace,
  };
}
