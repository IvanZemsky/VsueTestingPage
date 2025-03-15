import { useState, useEffect } from "react";

type UseQueryOptions<T> = {
   queryFn: () => Promise<T>;
   enabled?: boolean;
};

export function useQuery<T>({ queryFn, enabled = true }: UseQueryOptions<T>) {
   const [isLoading, setIsLoading] = useState(false);
   const [isError, setIsError] = useState(false);
   const [data, setData] = useState<T | null>(null);

   useEffect(() => {
      if (!enabled) return;

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
