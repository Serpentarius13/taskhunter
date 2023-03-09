import { useToast } from "vue-toastification";
import { useField, useForm } from "vee-validate";
import { toFormValidator } from "@vee-validate/zod";
import { z } from "zod";

export default (
  schema: z.ZodObject<unkown>,
  initialValues: Record<string, unkown>
) => {
  const toast = useToast();
  const zodSchema = toFormValidator(schema);

  const { validate: runValidator } = useForm({
    validationSchema: zodSchema,
    initialValues: initialValues,
    validateOnMount: false,
  });

  const validate = async () => {
    const { valid, errors } = await runValidator();
    if (!valid) {
      toast.clear();
      const errArr = Object.values(errors);
      for (const err of errArr) {
        toast.error(err);
      }
      return false;
    } else {
      return true;
    }
  };

  return validate;
};
