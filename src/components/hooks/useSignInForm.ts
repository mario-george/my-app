
interface Errors {
    email?: string;
    password?: string;
}

export default function useSignInForm() {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<Errors>({});

    const validateForm = () => {

    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(errors);
        console.log(formState);
        validateForm();
        if (Object.keys(errors).length === 0) {
            console.log("Form submitted successfully!");
        } else {
            console.log("Form has errors. Please correct them.");
        }
    };

    return { formState, errors, handleChange, handleSubmit };
}
import { FormEvent, useState } from "react";
