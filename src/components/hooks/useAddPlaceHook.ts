"use client";
import { FormEvent, useState } from "react";
import useHttp from "./useHttp";

interface Errors {
  title?: string;
  address?: string;
  location?: string;
  description?: string;
}

export default function useAddPlaceHook({ userID }:{userID:string}) {
  const { isLoading, error, sendRequestFormData } = useHttp();

  const [formState, setFormState] = useState({
    title: "",
    address: "",
    location: "",
    description: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const validateForm = () => {
   
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

  };

  const handleSubmit = async (event: FormEvent) => {
    
  };

  return { formState, errors, handleChange, handleSubmit, isLoading };
}
