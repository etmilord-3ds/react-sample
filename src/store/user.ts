import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// Export the models
export type Role = {
    id: string;
    name: string;
};

export type User = {
    firstName: string;
    lastName: string;
    address: any; // <=== NOTE: Typically not a good practice to have ANY as a type
    roles: Array<Role>;
};

// Export the api
export const userApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://58iiwrc1gf.execute-api.us-west-1.amazonaws.com/prod/',
        prepareHeaders: (headers, { getState }) => {
            headers.set('x-api-key', 'TJbulKjIHU7VxpjDVGARI6mc3TgpWuMs3GId6r6i');
            return headers;
        }
    }),
    endpoints: (build) => ({
        getUser: build.query<User, void>({
            query: () => ({
                url: 'user',
                method: 'GET'
            })
        })
    })
})

// Export the hook
export const { useGetUserQuery } = userApi;