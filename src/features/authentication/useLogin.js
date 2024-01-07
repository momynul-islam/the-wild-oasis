import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user?.user);
      toast.success("Successfully logged in");
      navigate("/", { replace: true });
    },

    onError: (error) => {
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading };
}
