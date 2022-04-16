import useForm from "@hooks/useForm";
import { addPhoto } from "@services/photoServices";

const useModalForm = () => {
  const { handleChange, handleSubmit, values } = useForm({
    initialValues: {
      label: "",
      url: "",
    },
    callback: async () => {
      await addPhoto(values);
    },
  });

  return { handleChange, handleSubmit, values };
};

export default useModalForm;
