import { RootState } from '@app/store/store';
import { IContentTable, IRowData } from '@entities/content/model/types';
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

const initialState: IContentTable = {
  content: [],
};

export const contentTableSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    addRow: (state, action: PayloadAction<IRowData>) => {
      state.content = [...state.content, action.payload];
    },
    editRow: (state, action: PayloadAction<IRowData>) => {
      const index = state.content.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.content[index] = action.payload;
      }
    },
    deleteRow: (state, action: PayloadAction<string>) => {
      const index = state.content.findIndex((item) => item.id === action.payload);
      const newContent = [...state.content];
      newContent.splice(index, 1);
      state.content = newContent;
    },
  },
});

const { addRow, editRow, deleteRow } = contentTableSlice.actions;

export const contentTableReducerName = 'content';
export default contentTableSlice.reducer;

export const useContentData = () => {
  return useSelector((state: RootState) => state.content);
};

export const useAddContentData = () => {
  const dispatch = useDispatch();
  return (data: IRowData) => dispatch(addRow(data));
};

export const useEditContentData = () => {
  const dispatch = useDispatch();
  return (data: IRowData) => dispatch(editRow(data));
};

export const useDeleteContentData = () => {
  const dispatch = useDispatch();
  return (id: string) => dispatch(deleteRow(id));
};
