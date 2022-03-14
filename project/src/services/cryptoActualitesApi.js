import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoActualitesHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
  'x-rapidapi-key': 'ede6503752msh49b6c66f3f79be9p13395ejsn1dbce4cf1010'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoActualitesHeaders })

export const cryptoActualitesApi = createApi({
  reducerPath: 'cryptoActualitesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoActualites: builder.query({
      query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
    })
  })
});

export const { useGetCryptoActualitesQuery } = cryptoActualitesApi;
