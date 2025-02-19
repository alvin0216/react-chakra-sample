import { Button, Box, Heading, Stack, Text } from "@chakra-ui/react";
import { Field } from "@/components/ui/field";
import { PasswordInput } from "@/components/ui/password-input";
import { useForm } from "react-hook-form";
import { useReset } from "./use-reset.hooks";

interface FormValues {
  password: string;
  confirmPassword: string;
}

const passwordRegex =
  /^(?=\S)(?=.*\S$)((?=.*[A-Z])(?=.*[a-z])(?=.*\d)|(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_])|(?=.*[A-Z])(?=.*\d)(?=.*[\W_])|(?=.*[a-z])(?=.*\d)(?=.*[\W_])).{8,20}$/;

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
      <form id="reset-form" style={{ width: "100%" }} onSubmit={onSubmit}>
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
              id="password"
              colorPalette="blue"
              placeholder="Enter password"
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
                pattern: {
                  value: passwordRegex,
                  message:
                    "Must contain at least three of the following: uppercase letters, lowercase letters, numbers, and symbols.",
                },
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
              id="confirm-password"
              colorPalette="blue"
              size="xl"
              placeholder="Confirm password"
              {...register("confirmPassword", {
                validate: (value) =>
                  value === watch("password") ||
                  "Password and password confirmation should be the same.",
              })}
            />
          </Field>

          <Text pt={6} fontSize="xs" color="gray.500">
            Passwords must have 8-20 characters and contain at least three of
            the following: uppercase letters, lowercase letters, numbers, and
            symbols.
          </Text>

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
