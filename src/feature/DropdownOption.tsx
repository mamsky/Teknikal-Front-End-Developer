import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { ProductDTO } from "@/DTO/productDTO";
import DeleteProduct from "./DeleteProduct";
import EditProduct from "./EditProduct";

const DropdownOption = ({ data }: { data: ProductDTO }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-2 bg-white/30 cursor-pointer rounded-xl font-bold">
        :
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <EditProduct data={data} />
        <DeleteProduct id={data.id!} />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownOption;
