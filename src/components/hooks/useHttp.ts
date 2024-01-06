import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (
    url: string,
    method: string = "GET",
    body: any = null,
    headers: any = {}
  ) => {
    setIsLoading(true);
    setError(null);

    url = process.env.NEXT_PUBLIC_API_URL + url;

    console.log(url);
    console.log(process.env);
    try {
      const response = await fetch(url, {
        method,
        body: body ? JSON.stringify(body) : null,
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });

      const data = await response.json();
      if (!response.ok) {
        console.log(data);
        throw new Error(data.message || "Something went wrong!");
      }

      console.log(data);

      setIsLoading(false);
      return data;
    } catch (err: any) {
      setIsLoading(false);
      setError(err.message || "Something went wrong!");
      throw err;
    }
  };

  const sendRequestFormData = async (
    url: string,
    method: string = "POST",
    body: FormData
  ) => {
    setIsLoading(true);
    setError(null);

    url = process.env.NEXT_PUBLIC_API_URL + url;

  
    try {
      const response = await fetch(url, {
        method,
        body: body,


      });

      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        console.log(data);
        throw new Error(data.message || "Something went wrong!");
      }

      console.log(data);

      setIsLoading(false);
      return data;
    } catch (err: any) {
      setIsLoading(false);
      setError(err.message || "Something went wrong!");
      throw err;
    }
  };
  return {
    isLoading,
    error,
    sendRequest,
    sendRequestFormData,
  };
};

export default useHttp;
