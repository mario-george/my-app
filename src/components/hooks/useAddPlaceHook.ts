"use client";
import { FormEvent, useState } from "react";
import useHttp from "./useHttp";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import {useToast} from '@chakra-ui/react'
interface Errors {
  title?: string;
  address?: string;
  location?: string;
  description?: string;
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


export default function useAddPlaceHook({ userID }:{userID:string}) {
  const toast=useToast()
  
  const { isLoading, error, sendRequestFormData } = useHttp();
  const token = useSelector((state:RootState)=>state.user.user.token)
const router= useRouter()
  const [formState, setFormState] = useState({
    title: "",
    address: "",
    description: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const toastHandler:(type:"success"| "warning"|"error",message?:string)=>void=  (type,message)=>{
    if (type == "success"){
      toast({
        title: 'Place added.',
        description: "Place has been added successfully.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
    }else if(type=="warning") {
      toast({
        title: 'Address invalid.',
        description: "Please change the address and try again.",
        status: 'warning',
        duration: 9000,
        isClosable: true,
      })
    }else{
      toast({
        title: 'Error.',
        description: message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
    
    }
  const validateForm = () => {
    let errors: Errors = {};
    if (!formState.title) {
      errors.title = "Title is required.";
    }
    if (!formState.address) {
      errors.title = "address is required.";
    }
 
    if (!formState.description) {
      errors.title = "description is required.";
    }
    setErrors(errors);
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Form validation is successful!");

      // Create a new FormData object
      const formData = new FormData();

      // Append the file to the FormData object
      const fileInput = document.getElementById(
        "place-image"
      ) as HTMLInputElement;
      if (fileInput && fileInput.files && fileInput.files.length > 0) {
        formData.append("image", fileInput.files[0]);
      }

      // Append the form state to the FormData object
      formData.append("title", formState.title);
      formData.append("address", formState.address);
      formData.append("description", formState.description);
      formData.append("creator", userID);
      console.log(formState)
let errorCallBack = (message:string)=>{
  console.log("message",message)
  if(message=="Invalid Address, Enter a valid address."){
toastHandler("warning")
  }else if(message=="success"){
    toastHandler("success")

  }else{
    toastHandler("error",message)
  }
}
      // Send the FormData object in the body of the add place request

      try{
        const data = await sendRequestFormData("places/", "POST", formData,
        {
          'Authorization':'Bearer '+token
        },errorCallBack);
        console.log("data",data)
    
  
        router.push('/')
      }catch(err:any){
        console.log("error happened :",err)
      }
    
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return { formState, errors, handleChange, handleSubmit, isLoading };
}
