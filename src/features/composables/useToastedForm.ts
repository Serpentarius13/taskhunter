import { useToast } from "vue-toastification";
import { useForm } from "vee-validate";
import { toFormValidator } from "@vee-validate/zod";
import { z } from "zod";

export default (
  schema: z.ZodObject<any>,
  initialValues: Record<string, unknown>
) => {
  const toast = useToast();
  const zodSchema = toFormValidator(schema);

  const { validate: runValidator } = useForm({
    validationSchema: zodSchema,
    initialValues: initialValues,
    validateOnMount: false,
  });

  const validate = async () => {
    try {
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
    } catch (error) {
      console.error(error);
      throw new Error(error)
    }
  };

  return validate;
};
