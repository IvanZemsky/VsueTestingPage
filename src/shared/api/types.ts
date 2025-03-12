export type ApiClientOptions = {
   baseUrl: string;
};

export type QueryParams = Record<
   string,
   string | number | null | undefined | boolean
>;

export type ApiHTTPMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

/**
 * Настройки для конкретного экземпляра запроса
 */
export type ApiQueryOptions = RequestInit & {
   query?: QueryParams;
};
