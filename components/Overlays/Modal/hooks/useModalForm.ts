import { Context } from "@contexts/Global/Context";
import useForm from "@hooks/useForm";
import { useContext } from "react";

const useModalForm = () => {
  const { modalHandler, postPhoto } = useContext(Context);

  const { handleChange, handleSubmit, values } = useForm({
    initialValues: {
      label: "",
      url: "",
    },
    callback: async () => {
      postPhoto(values);
      modalHandler(false);
    },
  });

  return { handleChange, handleSubmit, values };
};

export default useModalForm;
