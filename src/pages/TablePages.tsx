import axios from "axios";
import { useEffect, useState } from "react";

const TablePages = () => {
  const [data, setData] = useState<{ name: string }[]>([]);

  useEffect(() => {
    axios
      .get(" https://pokeapi.co/api/v2/ability")
      .then((res) => {
        setData(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center p-2">
      <table>
        {data.map((datas, i) => (
          <tr className="flex gap-2 border w-xl p-2">
            <td>
              {i + 1}. {datas.name}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default TablePages;
