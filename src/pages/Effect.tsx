import axios from "axios";
import { useEffect, useState } from "react";

const EffectPages = () => {
  const [data, setData] = useState<{ effect: string }[]>([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/ability/battle-armor")
      .then((res) => {
        // console.log(res.data);
        setData(res.data.effect_entries);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-2 w-xl p-2">
        {data.map((data) => (
          <h1>Effect: {data.effect}</h1>
        ))}
      </div>
    </div>
  );
};

export default EffectPages;
