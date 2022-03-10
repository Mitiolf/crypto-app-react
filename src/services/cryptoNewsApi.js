
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'f50ae46fa0msh0c1b011b6bfcb77p148a1bjsna7ba2db515a7'
  }

  const params = {safeSearch: 'Off', textFormat: 'Raw'}


const baseUrl = 'https://bing-news-search1.p.rapidapi.com/news'

const createRequest = (url) => ({url, params, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: "createApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,)
        })})
});

export const {useGetCryptoNewsQuery,} = cryptoNewsApi;