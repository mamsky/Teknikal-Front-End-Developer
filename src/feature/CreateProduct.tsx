import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useCreateProduct } from "@/hook/useCreateProduct";

const CreateProduct = () => {
  const { register, handleSubmit, errors, onSubmit, isPending } =
    useCreateProduct();
  return (
    <AlertDialog>
      <AlertDialogTrigger className="p-2 my-4 bg-blue-500 font-bold text-white hover:bg-gray-200 cursor-pointer w-full rounded-md">
        Create Product
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Create Product</AlertDialogTitle>
          <div className="flex flex-col">
            <label htmlFor="Name">Name:</label>
            <input
              type="text"
              {...register("nama")}
              placeholder="Input Name.."
              className="border p-2 rounded-md"
            />
            {errors.nama && (
              <p className="text-red-500">{errors.nama.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="harga">Harga:</label>
            <input
              type="number"
              {...register("harga", { valueAsNumber: true })}
              placeholder="Input harga.."
              className="border p-2 rounded-md"
            />
            {errors.harga && (
              <p className="text-red-500">{errors.harga.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="diskon">diskon:</label>
            <input
              type="number"
              {...register("diskon", { valueAsNumber: true })}
              placeholder="Input diskon.."
              className="border p-2 rounded-md"
            />
            {errors.diskon && (
              <p className="text-red-500">{errors.diskon.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="stock">stock:</label>
            <input
              type="number"
              {...register("stock", { valueAsNumber: true })}
              placeholder="Input stock.."
              className="border p-2 rounded-md"
            />
            {errors.stock && (
              <p className="text-red-500">{errors.stock.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="images">images:</label>
            <input
              type="text"
              {...register("images")}
              placeholder="Input images.."
              className="border p-2 rounded-md"
            />
            {errors.images && (
              <p className="text-red-500">{errors.images.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="deskripsi">deskripsi:</label>
            <textarea
              {...register("deskripsi")}
              placeholder="Input images.."
              className="border p-2 rounded-md"
            />
            {errors.images && (
              <p className="text-red-500">{errors.images.message}</p>
            )}
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="bg-blue-500 text-white hover:bg-blue-700 cursor-pointer rounded-md"
            onClick={handleSubmit(onSubmit)}
          >
            {isPending ? "Loading..." : "Create Product"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreateProduct;
