import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../services/cryptoApi';
import { cryptoActualitesApi } from '../services/cryptoActualitesApi';

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoActualitesApi.reducerPath]: cryptoActualitesApi.reducer,
  },
});
