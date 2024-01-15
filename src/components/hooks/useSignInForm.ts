import { FormEvent, useState } from "react";
import useHttp from "./useHttp";
import { useDispatch } from "react-redux";
import { login } from "@/components/GlobalRedux/userSlice";
import { useRouter } from "next/navigation";
import { SignInErrors } from "../types/formTypes";

export default function useSignInForm() {
  const { isLoading, error, sendRequest, setIsLoading } = useHttp();
  const dispatch = useDispatch();
  const router = useRouter();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    back: "",
  });
  const [errors, setErrors] = useState<SignInErrors>({});

  const validateForm = () => {
    let errors: SignInErrors = {};
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
    return errors;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nameOfField = event.target.name as "email" | "password";
    if (errors[nameOfField] !== "") {
      setErrors(prevErrors=>{
        return{     ...prevErrors,[event.target.name]:''}
      })
    }
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: FormEvent) => {
    setIsLoading(true);
    event.preventDefault();

    console.log(formState);
    let errors = validateForm();
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
      console.log(respData);
      console.log(respData);
      console.log(respData);
      if (respData.token) {
        const { token, userId } = respData;
        console.log(respData);
        console.log(respData);
        console.log(respData);
        dispatch(login({ token, userID: userId }));
        router.push("/");
      }
    } else {
      console.log("Form has errors. Please correct them.");
    }
    setIsLoading(false);
  };

  return { formState, errors, handleChange, handleSubmit, isLoading };
}
