import CreateProduct from "@/feature/CreateProduct";
import ListProduct from "@/feature/ListProduct";
import ProductSkeleton from "@/feature/ProductSkeleton";
import SortOption from "@/feature/SortOption";
import { useGetProduct } from "@/hook/useGetProduct";
import { useEffect } from "react";

const Home = () => {
  const { data, debounced, isPending } = useGetProduct();
  useEffect(() => {}, []);
  return (
    <div className="w-full h-screen p-4">
      <CreateProduct />
      <div className="flex flex-col my-2">
        <label htmlFor="search">Search</label>
        <input
          type="text"
          placeholder="search"
          className="p-2 border rounded-md"
          onChange={(e) => debounced(e.target.value)}
        />
      </div>
      <SortOption />
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {isPending && <ProductSkeleton />}
        {data?.length == 0 ? (
          <h1>Data Not Found</h1>
        ) : (
          data?.map((data) => <ListProduct key={data.id} data={data} />)
        )}
      </div>
    </div>
  );
};

export default Home;
