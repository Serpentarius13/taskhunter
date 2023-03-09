import { z } from "zod";

export default z.object({
  email: z
    .string()
    .email("Enter correct email please")
    .max(60, "Email shouldnt be more than 60 symbols")
    .min(5, "Email should be at least 5 symbols"),
  password: z
    .string()
    .min(6, "Password should be at least 6 symbols long")
    .max(100, "Password shouldnt be more than 100 symbols long")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)/,
      "Password must be contain at least one letter and one number"
    ),
});
