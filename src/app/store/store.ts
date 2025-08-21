import contentFilterSlice from '@entities/content/model/content-filter-slice';
import contentSlice from '@entities/content/model/content-table-slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    content: contentSlice,
    contentFilter: contentFilterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
