import { Button, Box, Heading, Stack } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { useForm } from "react-hook-form";
import { useReset } from "./use-reset.hooks";

interface FormValues {
  password: string;
  confirmPassword: string;
}

export const ResetPasswordForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    trigger,
    formState: { errors },
  } = useForm<FormValues>();

  const [loading, reset] = useReset();
  const onSubmit = handleSubmit((data) => reset(data.password));

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      maxW="lg"
      mx="auto"
    >
      <form style={{ width: "100%" }} onSubmit={onSubmit}>
        <Stack
          width="100%"
          direction="column"
          gap="4"
          px={4}
          py={6}
          shadow={{ base: "none", md: "md" }}
        >
          <Heading as="h1" size="2xl" textAlign="center" mb={4}>
            Reset Password
          </Heading>
          <Field
            invalid={!!errors.password}
            errorText={errors.password?.message}
          >
            <PasswordInput
              colorPalette="blue"
              placeholder="password"
              size="xl"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be 8-20 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Password must be 8-20 characters",
                },
                validate: (value) =>
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/.test(
                    value
                  ) ||
                  "Must include uppercase, lowercase, number, and special character",
                onChange: () => {
                  if (watch("confirmPassword")) {
                    trigger("confirmPassword");
                  }
                },
              })}
            />
          </Field>

          <Field
            invalid={!!errors.confirmPassword}
            errorText={errors.confirmPassword?.message}
          >
            <PasswordInput
              colorPalette="blue"
              size="xl"
              placeholder="confirm password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === watch("password") ||
                  "Password and password confirmation should be the same.",
              })}
            />
          </Field>

          <Button
            loading={loading}
            size="xl"
            loadingText="Resetting..."
            type="submit"
            colorPalette="blue"
          >
            Reset
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
