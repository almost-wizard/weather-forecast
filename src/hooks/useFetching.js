import { useState } from "react";

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
      setError("");
    } catch (e) {
      setError(e?.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
