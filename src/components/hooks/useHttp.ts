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

  };

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
