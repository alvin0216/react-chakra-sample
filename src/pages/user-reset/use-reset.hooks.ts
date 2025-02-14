import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toaster } from "@/components/ui/toaster";

export const useReset = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const reset = async (pwd: string) => {
    setLoading(true);
    axios
      .post("/api/reset", pwd)
      .then(() => {
        setLoading(false);
        navigate("/admin/login");
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
