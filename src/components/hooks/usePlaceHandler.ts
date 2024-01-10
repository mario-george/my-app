import { FormEvent, useState } from "react";
import useHttp from "./useHttp";
import { useSelector } from "react-redux";

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
    };
    loggedIn?: boolean | null;
  };
}
export default function usePlaceHandler(placeID:string) {
  const { isLoading, error, sendRequest } = useHttp();
  const token = useSelector((state:RootState)=>state.user.user.token)

  const [formState, setFormState] = useState({
    title: "",
    address: "",
    description: "",
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
const handleDeletePlace=async()=>{
  let respData = await sendRequest(placeID, "DELETE",null,{
    'Authorization':'Bearer '+token
  });
}
  const handleUpdate = async (event: FormEvent) => {
    event.preventDefault();

   
    validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Place data has no errors!");

      let respData;
      try {
        respData = await sendRequest(placeID, "PATCH", formState,
        {
          'Authorization':'Bearer '+token
        }
        );
        console.log(respData);
      } catch (err) {
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

  return { formState, errors, handleChange, handleUpdate, isLoading ,handleDeletePlace};
}
