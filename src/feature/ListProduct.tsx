import type { ProductDTO } from "@/DTO/productDTO";
import DropdownOption from "./DropdownOption";

const ListProduct = ({ data }: { data: ProductDTO }) => {
  return (
    <div
      key={data.id}
      className="border bg-gradient-to-b from-cyan-500 via-blue-300 to-white p-2 rounded-md text-center"
    >
      <div className="text-end">
        <DropdownOption data={data} />
      </div>
      <img
        src={data.images}
        alt={data.nama}
        className="rounded-md max-h-60 bg-cover min-w-full bg-center"
      />
      <h1 className="font-bold">{data.nama}</h1>
      <p>
        <s className="text-red-500 mr-2">{data.harga} </s> {data.diskon}
      </p>
      <small>
        {data.deskripsi.length >= 20
          ? `${data.deskripsi.slice(0, 50)}...`
          : data.deskripsi}
      </small>
    </div>
  );
};

export default ListProduct;
