import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

interface IContentAddRowButtonProps {
  onClick: () => void;
}

export const ContentAddRowButton = ({ onClick }: IContentAddRowButtonProps) => {
  return (
    <Button type="primary" icon={<PlusOutlined />} onClick={onClick}>
      Добавить
    </Button>
  );
};
