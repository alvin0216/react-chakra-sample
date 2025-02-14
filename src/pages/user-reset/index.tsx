import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

interface ResetPasswordForm {
  password: string;
  confirmPassword: string;
}

export const UserResetPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordForm>();

  const onSubmit = (data: ResetPasswordForm) => {
    console.log(data); // 替换为实际的API调用
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack gap={4}>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel>新密码</FormLabel>
            <Input
              type="password"
              {...register("password", {
                required: "密码不能为空",
                minLength: { value: 8, message: "密码至少8位" },
                pattern: {
                  value: /^(?=.*[0-9])(?=.*[!@#$%^&*])/,
                  message: "必须包含数字和特殊字符",
                },
              })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.confirmPassword}>
            <FormLabel>确认密码</FormLabel>
            <Input
              type="password"
              {...register("confirmPassword", {
                required: "请再次输入密码",
                validate: (val: string) => {
                  if (watch("password") !== val) {
                    return "两次输入的密码不一致";
                  }
                },
              })}
              aria-invalid={errors.confirmPassword ? "true" : "false"}
            />
            <FormErrorMessage>
              {errors.confirmPassword?.message}
            </FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="blue" width="full">
            重置密码
          </Button>
        </VStack>
      </form>
    </Box>
  );
};
