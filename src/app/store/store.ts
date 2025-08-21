import contentFilterSlice, {
  contentFilterReducerName,
} from '@entities/content/model/content-filter-slice';
import contentSlice, { contentTableReducerName } from '@entities/content/model/content-table-slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [contentTableReducerName]: contentSlice,
    [contentFilterReducerName]: contentFilterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
