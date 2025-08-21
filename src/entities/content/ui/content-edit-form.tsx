import { IContentModalForm } from '@entities/content/model/types';
import { DatePicker, Form, FormInstance, Input, InputNumber } from 'antd';

interface IContentEditFormProps {
  form?: FormInstance<IContentModalForm>;
}

export const ContentEditForm = ({ form: formProp }: IContentEditFormProps) => {
  const [form] = Form.useForm(formProp);

  return (
    <Form form={form} layout="vertical">
      <Form.Item label="Имя" name="name" rules={[{ required: true, message: 'Введите имя' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Дата" name="date" rules={[{ required: true, message: 'Выберите дату' }]}>
        <DatePicker style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label="Числовое значение"
        name="value"
        rules={[{ required: true, message: 'Введите число' }]}
      >
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
    </Form>
  );
};
