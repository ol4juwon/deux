/* eslint-disable react-hooks/rules-of-hooks */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Config } from '../../util/config';

// initialize an empty api service that we'll inject endpoints into later as needed
export const baseApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.BASE_URL,

    prepareHeaders: headers => {
        const clientJwtToken = Config.AUTH_TOKEN       
        if (clientJwtToken) {
          headers.set('authorization', `Bearer ${clientJwtToken}`);
          // headers.set("client-id", clientJwtToken );
          //set domain as header
        }
      // By default, if we have a token in the store, let's use that for authenticated requests
      return headers;
    },
  }),
  endpoints: () => ({}),
});
