import {
  ZodProductDTO,
  type EditProductDTOS,
  type ProductDTO,
  type ZodProductDTOS,
} from "@/DTO/productDTO";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { isAxiosError } from "axios";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useGetProduct } from "./useGetProduct";

export const useEditProduct = (id: string, data: ProductDTO) => {
  const queryClient = useQueryClient();
  const { data: getData } = useGetProduct();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProductDTOS>({
    defaultValues: {
      id: id,
      nama: data.nama,
      harga: data.harga,
      stock: data.stock,
      diskon: data.diskon,
      images: data.images,
      deskripsi: data.deskripsi,
    },
    mode: "onChange",
    resolver: zodResolver(ZodProductDTO),
  });

  const { mutateAsync, isPending } = useMutation<
    EditProductDTOS,
    Error,
    EditProductDTOS
  >({
    mutationKey: ["product"],
    mutationFn: async (data: EditProductDTOS) => {
      const response = await axios.put(
        `http://localhost:3000/product/${id}`,
        data
      );
      return response.data;
    },
    onSuccess: (res) => {
      console.log(res);

      toast.success("Success Edit Data");
      queryClient.invalidateQueries({ queryKey: ["workout"] });
    },
    onError: (err) => {
      if (isAxiosError(err)) {
        toast.error("Error Edit data");
      }
    },
  });

  const dataNama = getData?.map((d) => {
    return d.nama.toLowerCase();
  });

  const onSubmit = async (data: ZodProductDTOS) => {
    if (dataNama?.includes(data.nama.toLowerCase())) {
      return toast.error("Nama Tidak Boleh Sama");
    } else {
      await mutateAsync(data);
    }
  };

  return { register, handleSubmit, errors, onSubmit, isPending };
};
