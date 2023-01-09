export const Card = () => {
  return (
    <div className="w-fit">
      <div className="bg-[#14172b] absolute top-5 left-40 p-5 rounded-full">
        <div className="bg-[#1f212f] p-5 rounded-full">
          <img
            className="h-12"
            src="https://cryptologos.cc/logos/bitcoin-sv-bsv-logo.png?v=024"
          />
        </div>
      </div>
      <div className="bg-[#1b1f34] text-white p-8 pt-24 w-fit rounded-3xl">
        <p className="text-sm text-[#606794] text-center">Bitcoin [BTC]</p>
        <div className="flex space-x-5 pl-16 bg-[#14172b] py-2 w-60 rounded-full mt-4 mb-2">
          <p>$31,812.80</p>
          <p className="text-[#02e897]">+10%</p>
        </div>
        <p className="text-sm text-[#606794] text-center">Price</p>
        <p className="bg-[#14172b] py-2 text-center rounded-full mt-4 mb-2">
          $60,000
        </p>
        <p className="text-sm text-[#606794] text-center">TVL</p>
        <div className="flex justify-between w-fit space-x-4 bg-[#14172b] p-3 m-auto rounded-full mt-4 mb-2">
          <img
            className="h-5"
            src="https://res.cloudinary.com/dyocvbqbf/image/upload/v1673260765/Manuals/bitcoin-icon-png-42940_gvqjbf.png"
          />
          <img
            className="h-5"
            src="https://res.cloudinary.com/dyocvbqbf/image/upload/v1673260765/Manuals/bitcoin-icon-png-42940_gvqjbf.png"
          />
          <img
            className="h-5"
            src="https://res.cloudinary.com/dyocvbqbf/image/upload/v1673260765/Manuals/bitcoin-icon-png-42940_gvqjbf.png"
          />
        </div>
        <p className="text-sm text-[#606794] text-center">Popular pairs</p>
      </div>
    </div>
  );
};
