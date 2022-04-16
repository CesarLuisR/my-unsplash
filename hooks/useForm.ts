import { useState } from "react";

const useForm = ({ initialValues, callback }: Props) => {
  const [values, setValues] = useState<any>(initialValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    callback(values);
  };

  return { handleChange, handleSubmit, values };
};

type Props = {
  initialValues: {};
  callback: (values: {}) => void;
};

export default useForm;
