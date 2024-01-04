"use client";

import { FormEvent, useState } from "react";

interface Errors {
  name?: string;
  email?: string;
  password?: string;
}

export default function useSignUpForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const validateForm = () => {
    let errors: Errors = {};
    if (!formState.name) {
      errors.name = "Name is required.";
    }
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

  // if you used event.target.name it is treated as a string “event.target.name”, not the value it holds (like ‘name’, ‘email’, or ‘password’). So, instead of updating the corresponding field in the formState, it would attempt to update a field literally named “event.target.name”, which is not what you want.
  // The square brackets [event.target.name] tell JavaScript to interpret the expression inside as a variable, allowing you to use dynamic keys in your object.

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  
  };

  const handleSubmit = (event: FormEvent) => {

  };

  return { formState, errors, handleChange, handleSubmit };
}
