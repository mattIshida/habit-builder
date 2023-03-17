import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: ''
    }),
    tagTypes: ['User'],
    endpoints(builder){
        return {
            signIn: builder.mutation({
                query: (formData) => ({ 
                    url: `/signin`,
                    method: 'POST',
                    body: formData
                }),
                providesTags: ['User']
            }),
            signUp: builder.mutation({
                query: ({id, ...patch}) => ({ 
                    url: `/signup`,
                    method: 'POST',
                    body: patch
                }),
                providesTags: ['User']
            }),
            autoLogIn: builder.query({
                query: () => ({ 
                    url: `/me`,
                    method: 'GET',
                }),
                providesTags: ['User']
            }),
            logOut: builder.mutation({
                query: () => ({ 
                    url: `/logout`,
                    method: 'DELETE',
                }),
                invalidatesTags: ['User']
            })
        }

    },

})

export const { useSignInMutation, useSignUpMutation, useAutoLogInQuery, useLogOutMutation} = userApi