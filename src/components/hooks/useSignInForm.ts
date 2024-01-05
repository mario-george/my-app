import { FormEvent, useState } from "react";
import useHttp from "./useHttp";

interface Errors {
  email?: string;
  password?: string;
  back?: string;
}

export default function useSignInForm() {
  const { isLoading, error, sendRequest } = useHttp();

  const [formState, setFormState] = useState({
    email: "",
    password: "",
    back: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = () => {
    let errors: Errors = {};
    if (!formState.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = "Email is invalid.";
    }
    if (!formState.password) {
      errors.password = "Password is required.";
    } else if (formState.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
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

    console.log(errors);
    console.log(formState);
    validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully!");

      let respData;
      try {
        respData = await sendRequest("users/login", "POST", formState);
        console.log(respData);
      } catch (err) {
        console.log(errors);

      }

      if (error) {
        console.log(error);
        errors.back = error;
        setErrors(errors);
      }
      if (respData.token) {
      }
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  return { formState, errors, handleChange, handleSubmit };
}
