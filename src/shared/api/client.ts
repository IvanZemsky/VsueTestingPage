import { setPath } from "../lib";
import { getSearchParamsString } from "../lib/utils/getSearchParamsString";
import { ApiClientOptions, ApiQueryOptions, QueryParams } from "./types";

export class ApiClient {
   baseUrl: string;

   constructor({ baseUrl }: ApiClientOptions) {
      this.baseUrl = baseUrl;
   }

   private getRequestString(url: string, query?: QueryParams) {
      let requestString = url;

      if (query) {
         requestString += "?";
         requestString += getSearchParamsString(query);
      }

      return requestString;
   }

   async get<T>(path: string, options: ApiQueryOptions = {}) {
      const { query, ...nativeOptions } = options;

      const requestInit: RequestInit = {
         ...nativeOptions,
         method: "GET",
      };

      const requestString = this.getRequestString(
         setPath(this.baseUrl, path),
         query
      );

      const response = await fetch(requestString, requestInit);

      const data: T = await response.json();

      return data;
   }

   async patch<T>(path: string, options: ApiQueryOptions = {}) {
      const { query, ...nativeOptions } = options;

      const requestInit: RequestInit = {
         ...nativeOptions,
         method: "PATCH",
      };

      const requestString = this.getRequestString(
         setPath(this.baseUrl, path),
         query
      );

      const response = await fetch(requestString, requestInit);

      const data: T = await response.json();

      return data;
   }
}
