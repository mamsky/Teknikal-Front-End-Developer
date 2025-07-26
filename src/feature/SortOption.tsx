import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetProduct } from "@/hook/useGetProduct";

const SortOption = () => {
  const { setSortData } = useGetProduct();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-2 cursor-pointer rounded-xl border bg-gray-300 my-4">
        Filter Data
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        {["termurah", "termahal"].map((sort) => (
          <div className="flex flex-col gap-2">
            <button
              onClick={() => setSortData(sort)}
              className="hover:bg-gray-500 cursor-pointer"
            >
              {sort}
            </button>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortOption;
