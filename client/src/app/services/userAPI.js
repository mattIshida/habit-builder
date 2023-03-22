import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: ''
    }),
    tagTypes: ['User', 'Attempt', 'Intention', 'Tips', 'Readers', 'Profile', 'Follows', 'Feed'],
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
            }),
            reportAttempt: builder.mutation({
                query: ({id, ...patch}) => ({
                    url: `/attempts/${id}`,
                    method: 'PATCH',
                    body: patch
                }),
                invalidatesTags: ['Attempt', 'User']
            }),
            getAttempts: builder.query({
                query: () => ({
                    url: `/attempts`,
                    method: 'GET',
                }),
                providesTags: ['Attempt']
            }),
            postIntention: builder.mutation({
                query: (formData) => ({
                    url: '/intentions',
                    method: 'POST',
                    body: formData
                }),
                providesTags: ['Intention', 'User']
            }),
            getTips: builder.query({
                query: (challenge_id) => ({
                    url: `/tips/${challenge_id}`,
                    method: 'GET',
                }),
                providesTags: ['Tips']
            }),
            getReaders: builder.query({
                query: () => ({
                    url: '/readers',
                    methdo: 'GET'
                }),
                providesTags: ['Readers']
            }), 
            getReaderProfile: builder.query({
                query: (id) => ({
                    url: `/readers/${id}`,
                    method: "GET"
                }),
                providesTags: ['Profile']
            }),
            postFollow: builder.mutation({
                query: (followObj) => ({
                    url: `/follows`,
                    method: 'POST',
                    body: followObj
                }),
                providesTags: ['Follows']
            }),
            getFeed: builder.query({
                query: () => ({
                    url: '/feed',
                    method: 'GET'
                }), 
                providesTags: ['Feed']
            })
        }

    },

})

export const { 
    useSignInMutation, 
    useSignUpMutation, 
    useAutoLogInQuery, 
    useLogOutMutation, 
    useReportAttemptMutation,
    useGetAttemptsQuery,
    usePostIntentionMutation,
    useGetTipsQuery,
    useGetReadersQuery,
    useGetReaderProfileQuery,
    usePostFollowMutation,
    useGetFeedQuery
} = userApi