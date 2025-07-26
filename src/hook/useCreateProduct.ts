import { ZodProductDTO, type ZodProductDTOS } from "@/DTO/productDTO";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { isAxiosError } from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useGetProduct } from "./useGetProduct";

export const useCreateProduct = () => {
  const queryClient = useQueryClient();
  const { data: getData } = useGetProduct();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ZodProductDTOS>({
    mode: "onChange",
    resolver: zodResolver(ZodProductDTO),
  });

  const { mutateAsync, isPending } = useMutation<
    ZodProductDTOS,
    Error,
    ZodProductDTOS
  >({
    mutationKey: ["product"],
    mutationFn: async (data: ZodProductDTOS) => {
      const response = await axios.post("http://localhost:3000/product", data);
      console.log(response.data.nama);

      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);
      toast.success("Success Create Data");
      queryClient.invalidateQueries({ queryKey: ["workout"] });
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        toast.error("Error create data");
      }
    },
  });

  const dataNama = getData?.map((d) => {
    return d.nama.toLowerCase();
  });

  const onSubmit = async (data: ZodProductDTOS) => {
    if (dataNama?.includes(data.nama)) {
      return toast.error("Nama Tidak Boleh Sama");
    } else {
      await mutateAsync(data);
    }
  };

  return { register, handleSubmit, errors, onSubmit, isPending };
};
