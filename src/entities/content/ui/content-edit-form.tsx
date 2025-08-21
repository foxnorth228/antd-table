import { formData } from '@entities/content/model/form-data';
import { IContentModalForm } from '@entities/content/model/types';
import { Form, FormInstance } from 'antd';

interface IContentEditFormProps {
  form?: FormInstance<IContentModalForm>;
}

export const ContentEditForm = ({ form: formProp }: IContentEditFormProps) => {
  const [form] = Form.useForm(formProp);

  return (
    <Form form={form} {...formData.props}>
      {formData.inputs.map((item) => (
        <Form.Item key={item.name} label={item.label} name={item.name} rules={item.rules}>
          {item.component}
        </Form.Item>
      ))}
    </Form>
  );
};
