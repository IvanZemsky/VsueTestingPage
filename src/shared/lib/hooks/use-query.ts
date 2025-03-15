import { useState, useEffect } from "react";

type UseQueryOptions<T> = {
   queryFn: () => Promise<T>;
};

export function useQuery<T>({ queryFn }: UseQueryOptions<T>) {
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   const [data, setData] = useState<T | null>(null);

   useEffect(() => {
      setIsLoading(true);
      queryFn()
         .then((response) => setData(response))
         .catch((error: Error) => {
            if (error.name !== "AbortError") {
               setIsError(true);
            }
         })
         .finally(() => setIsLoading(false));
   }, []);

   return { isLoading, isError, data };
}
