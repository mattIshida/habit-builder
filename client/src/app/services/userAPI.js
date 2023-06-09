import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: ''
    }),
    tagTypes: ['User', 'Attempt', 'Intention', 'Tips', 'Readers', 'Profile', 'Follows', 'Feed', 'Bookmark'],
    endpoints(builder){
        return {
            signIn: builder.mutation({
                query: (formData) => ({ 
                    url: `/signin`,
                    method: 'POST',
                    body: formData
                }),
                invalidatesTags: ['User']
            }),
            signUp: builder.mutation({
                query: ({id, ...patch}) => ({ 
                    url: `/signup`,
                    method: 'POST',
                    body: patch
                }),
                invalidatesTags: ['User']
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
                //invalidatesTags: ['User']
                async onQueryStarted(_, {dispatch, queryFulfilled}) {
                    try {
                        await queryFulfilled
                        dispatch(userApi.util.resetApiState())
                        window.location.reload();
                    } catch {
                        dispatch(userApi.util.invalidateTags(['User']))
                        // dispatch(userApi.util.resetApiState())
                    }
                }
                // transformResponse: (response, meta, arg) => { return {user:""}},
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
            getAttemptDetail: builder.query({
                query: ()=> ({
                    url: `/attemptDetail`,
                    method: "GET"
                }),
                providesTags: ['AttemptDetail']
            }),
            postIntention: builder.mutation({
                query: (formData) => ({
                    url: '/intentions',
                    method: 'POST',
                    body: formData
                }),
                invalidatesTags: ['Intention', 'User', 'Attempt', 'Profile', 'Feed']
            }),
            getTips: builder.query({
                query: (challenge_id) => ({
                    url: `/tips/${challenge_id}`,
                    method: 'GET',
                }),
                providesTags: ['Tips']
            }),
            postTip: builder.mutation({
                query: (formData) => ({
                    url: `/tips`,
                    method: 'POST',
                    body: formData
                }),
                invalidatesTags: ['Tips', 'User', 'Feed']
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
                invalidatesTags: ['Follows', 'User']
            }),
            deleteFollow: builder.mutation({
                query: (id) => ({
                    url: `/follows/${id}`,
                    method: 'DELETE'
                }),
                async onQueryStarted(_, {dispatch, queryFulfilled}) {
                    try {
                        await queryFulfilled
                        dispatch(userApi.util.invalidateTags(['User']))
                    } catch {
                        dispatch(userApi.util.invalidateTags(['User']))
                        // dispatch(userApi.util.resetApiState())
                    }
                }
                // invalidateTags: ['Follows', 'User']
            }),
            getFeed: builder.query({
                query: () => ({
                    url: '/feed',
                    method: 'GET'
                }), 
                providesTags: ['Feed']
            }), 
            postBookmark: builder.mutation({
                query: () => ({
                    url: '/bookmarks',
                    method: 'POST'
                }),
                invalidatesTags: ['Bookmark']
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
    useGetAttemptDetailQuery, 
    usePostIntentionMutation,
    useGetTipsQuery,
    usePostTipMutation, 
    useGetReadersQuery,
    useGetReaderProfileQuery,
    usePostFollowMutation,
    useDeleteFollowMutation,
    useGetFeedQuery,
    usePostBookmarkMutation
} = userApi