import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { isAxiosError } from "axios";
import toast from "react-hot-toast";

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["product"],
    mutationFn: async (id: string) => {
      const response = await axios.delete(
        `http://localhost:3000/product/${id}`
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success("Delete Product Success");
      queryClient.invalidateQueries({ queryKey: ["workout"] });
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        toast.error("An error occurred");
      }
    },
  });
  return { mutateAsync, isPending };
};
