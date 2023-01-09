import { Card } from "./Card";
import { data } from "../data";

export const Main = () => {
  return (
    <div className="bg-[#14172b] h-screen p-20">
      <p>Trending Assets</p>
      <div>
        {data.map((el) => (
          <Card />
        ))}
      </div>
    </div>
  );
};
