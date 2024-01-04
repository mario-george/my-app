
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
 
    };

    return { formState, errors, handleChange, handleSubmit };
}
import { FormEvent, useState } from "react";
