import { useState } from "react";
import { toaster } from "@/components/ui/toaster";
import { request } from "@/utils/request";

export const useReset = () => {
  const [loading, setLoading] = useState(false);

  const reset = async (pwd: string) => {
    setLoading(true);
    request
      .post("updatepassword", { newpasswd: pwd })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        toaster.create({
          type: "error",
          title: "Failed to reset password, please try again.",
        });
        setLoading(false);
      });
  };

  return [loading, reset] as const;
};
