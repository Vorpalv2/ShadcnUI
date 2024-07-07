import { useState } from "react";

const useAPIRequest = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | null>(false);
  const [data, setData] = useState<any | null>();

  const makeRequest = async (url: string, options: RequestInit) => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "An Error Occured");
      } else {
        const responseData = await response.json();
        setData(responseData);
      }
    } catch (error) {
      setError("something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return { isLoading, error, data, makeRequest };
};

export default useAPIRequest;
