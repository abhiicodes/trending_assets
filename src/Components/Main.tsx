import { Card } from "./Card";
import { data } from "../data";

export const Main = () => {
  return (
    <div className="bg-[#14172b] p-10">
      <div className="flex items-center mb-10">
        <img
          className="h-8"
          src="https://res.cloudinary.com/dyocvbqbf/image/upload/v1673272110/Manuals/download_gowwsq.png"
        />
        <p className="text-white">Trending Assets</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {data.map((el) => (
          <Card key={el.name} data={el} />
        ))}
      </div>
    </div>
  );
};
