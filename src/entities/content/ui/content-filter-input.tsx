import { SearchOutlined } from '@ant-design/icons';
import {
  useChangeContentFilter,
  useContentFilter,
} from '@entities/content/model/content-filter-slice';
import { Input } from 'antd';

export const ContentFilterInput = () => {
  const { searchParam } = useContentFilter();
  const setSearchText = useChangeContentFilter();

  return (
    <Input
      placeholder="Поиск..."
      prefix={<SearchOutlined />}
      value={searchParam}
      onChange={(e) => setSearchText(e.target.value)}
      allowClear
    />
  );
};
