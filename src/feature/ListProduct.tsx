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
      <div className="relative">
        <h1 className="absolute left-2 bg-red-500 p-2 top-2 rounded-md font-bold text-white">
          Diskon Harga
        </h1>
        <img
          src={data.images}
          alt={data.nama}
          className="rounded-md h-46 max-h-46 bg-cover min-w-full bg-center"
        />
      </div>
      <h1 className="font-bold">{data.nama} </h1>
      <small>Stock: {data.stock}</small>
      <p>
        <s className="text-red-500 mr-2">
          {data.harga.toLocaleString("id-ID", {
            style: "currency",
            currency: "IDR",
          })}{" "}
        </s>{" "}
        {data.diskon.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
      </p>

      <p>
        {data.deskripsi.length >= 20
          ? `${data.deskripsi.slice(0, 50)}...`
          : data.deskripsi}
      </p>
    </div>
  );
};

export default ListProduct;
