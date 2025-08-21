import { RootState } from '@app/store/store';
import { IContentFilter } from '@entities/content/model/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const initialState: IContentFilter = {
  searchParam: '',
};

export const contentFilterSlice = createSlice({
  name: 'contentFilter',
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction<string>) => {
      state.searchParam = action.payload;
    },
  },
});

export const { changeValue } = contentFilterSlice.actions;

export default contentFilterSlice.reducer;

export const useContentFilter = () => {
  return useSelector((state: RootState) => state.contentFilter);
};

export const useChangeContentFilter = () => {
  const dispatch = useDispatch();
  return (value: string) => dispatch(changeValue(value));
};
