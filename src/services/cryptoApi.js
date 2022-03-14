
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'f50ae46fa0msh0c1b011b6bfcb77p148a1bjsna7ba2db515a7'
  }

  const params = {
    referenceCurrencyUuid: 'yhjMzLPhuIDl',
    timePeriod: '24h',
    tiers: '1',
    orderBy: 'marketCap',
    orderDirection: 'desc',
    limit: '50',
    offset: '0'
  }


const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url, params) => ({url, params, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: "createApi",
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: (count) => createRequest(`/coins?limit=${count}`),
      }),
  
      getCryptoDetails: builder.query({
        query: (coinId) => createRequest(`/coin/${coinId}`),
      }),
      getCryptoHistory: builder.query({
        query: ({coinId, timeperiod}) => createRequest(`/coin/${coinId}/history`,
        {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: timeperiod}),
      }),
    }),})

export const {useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery,} = cryptoApi;