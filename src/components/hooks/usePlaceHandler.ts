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
   
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {


  };
const handleDeletePlace=()=>{
}
  const handleUpdate = async (event: FormEvent) => {
    
  };

  return { formState, errors, handleChange, handleUpdate, isLoading ,handleDeletePlace};
}
