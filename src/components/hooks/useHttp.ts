import { useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async (
    url: string,
    method: string = "GET",
    body: any = null,
    headers: any = {},
    toastCallBack: (message: string) => void = () => {}
  ) => {
    setIsLoading(true);
    setError(null);

    url = process.env.NEXT_PUBLIC_API_URL + url;

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
        toastCallBack(data?.message || "Something went wrong");
        throw new Error(data.message || "Something went wrong!");
      } else {
        toastCallBack("success");
      }

      return data;
    } catch (err: any) {
      setError(err.message || "Something went wrong!");

      throw err;
    }finally{
      setIsLoading(false);
    }
  };

  const sendRequestFormData = async (
    url: string,
    method: string = "POST",
    body: FormData | null = null,
    headers: any = {},
    toastCallBack: (messsage: string) => void = () => {}
  ) => {
    setIsLoading(true);
    setError(null);

    url = process.env.NEXT_PUBLIC_API_URL + url;

    try {
      const response = await fetch(url, {
        method,
        body: body,
        headers: {
          ...headers,
        },
      });

      const data = await response.json();
      if (!response.ok) {
      toastCallBack(data.message);

        throw new Error(data.message || "Something went wrong!");
      }else{
        toastCallBack("success");
      }


      return data;
    } catch (err: any) {
      setError(err.message || "Something went wrong!");
      throw err;
    }finally{
      setIsLoading(false);

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
