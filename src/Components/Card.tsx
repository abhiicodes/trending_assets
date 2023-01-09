import { dataInterface } from "../data";

export const Card = (props: { data: dataInterface }) => {
  const { icon, name, price, change, tvl, pairs } = props.data;

  return (
    <div className="w-fit relative">
      <div className="bg-[#14172b] absolute left-[26%] p-5 rounded-full">
        <div className="bg-[#1f212f] p-5 rounded-full">
          <img className="h-12" src={icon} />
        </div>
      </div>
      <div className="bg-[#1b1f34] text-white p-8 mt-14 pt-24 w-fit rounded-3xl">
        <p className="text-sm text-[#606794] text-center">{name}</p>
        <div className="flex bg-[#14172b] px-5 py-2 w-56 rounded-full mt-4 mb-2">
          <p className="m-auto">{price}</p>
          {change[0] == "+" ? (
            <p className="text-[#02e897]">{change}</p>
          ) : (
            <p className="text-[#cc4145]">{change}</p>
          )}
        </div>
        <p className="text-sm text-[#606794] text-center">Price</p>
        <p className="bg-[#14172b] py-2 text-center rounded-full mt-4 mb-2">
          {tvl}
        </p>
        <p className="text-sm text-[#606794] text-center">TVL</p>
        <div className="flex justify-between w-fit space-x-4 bg-[#14172b] p-3 m-auto rounded-full mt-4 mb-2">
          <img className="h-5" src={pairs[0]} />
          <img className="h-5" src={pairs[1]} />
          <img className="h-5" src={pairs[2]} />
        </div>
        <p className="text-sm text-[#606794] text-center">Popular pairs</p>
      </div>
    </div>
  );
};
