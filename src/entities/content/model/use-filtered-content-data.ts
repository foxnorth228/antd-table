import { useContentFilter } from '@entities/content/model/content-filter-slice';
import { useContentData } from '@entities/content/model/content-table-slice';
import { getTableDateFormat } from '@shared/utils/getTableDateFormat';

export const useFilteredContentData = () => {
  const { content: data } = useContentData();
  const { searchParam: searchText } = useContentFilter();

  return data.filter(
    (row) =>
      row.name.toLowerCase().includes(searchText.toLowerCase()) ||
      getTableDateFormat(row.date).toLowerCase().includes(searchText.toLowerCase()) ||
      row.value.toString().toLowerCase().includes(searchText.toLowerCase())
  );
};
