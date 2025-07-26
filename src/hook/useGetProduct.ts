import type { ProductDTO } from "@/DTO/productDTO";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

export const useGetProduct = () => {
  const [search, setSearch] = useState<string>("");
  const [data, setData] = useState<ProductDTO[]>();
  const [sortData, setSortData] = useState<string>("");

  const debounced = useDebouncedCallback((value) => {
    const text = value.toLowerCase();
    setSearch(text);
  }, 300);

  const { data: queryData, isPending } = useQuery<ProductDTO[]>({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/product");
      return response.data;
    },
  });

  useEffect(() => {
    if (sortData == "termahal") {
      const sortHarga = data?.sort((a, b) => b.harga - a.harga);
      setData(sortHarga);
    } else if (sortData == "termurah") {
      const sortHarga = data?.sort((a, b) => a.harga - b.harga);
      setData(sortHarga);
    }
  }, [data, sortData, queryData]);

  useEffect(() => {
    if (search) {
      const filterData = data?.filter((d) =>
        d.nama.toLowerCase().includes(search)
      );
      setData(filterData);
    } else {
      setData(queryData);
    }
  }, [data, queryData, search]);

  return { debounced, data, isPending, setSortData };
};
