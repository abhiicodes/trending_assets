import { Card } from "./Card";
import { data } from "../data";

export const Main = () => {
  return (
    <div className="bg-[#14172b] p-10">
      <div className="flex items-center mb-10">
        <img
          className="h-8"
          src="https://thenounproject.com/api/private/icons/1571615/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23C462DD&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjvBcEldxnGm1yYzfD0dBiWyCLLsxC2mkn4Xd6LEH680FMX0GbNqgSUaVFk-64v7kKg6CciMVjB-jaAtGbxd0ErWQC1Q%3D%3D"
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
