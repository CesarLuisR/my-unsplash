import useForm from "@hooks/useForm";
import { addImage } from "@services/imageServices";

const useModalForm = () => {
  const { handleChange, handleSubmit, values } = useForm({
    initialValues: {},
    callback: async (values: any) => {
      await addImage(values);
    }
  });

  return { handleChange, handleSubmit, values };
}

export default useModalForm;