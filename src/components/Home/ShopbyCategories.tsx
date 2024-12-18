import Scrollboxreuse from "./Scrollboxreuse";

const ShopbyCategories = () => {
  return (
    <>
    <div   className="mb-8 mt-16" style={{ overflow: "hidden" }}>
      <div className="w-3/4 max-w-3/4  mx-auto mb-5">
        {" "}
        <span className="text-3xl font-semibold text-gray-800 tracking-wide">
          Shop by Categories
        </span>
      </div>
      <div className="mt-10" >
        
      <Scrollboxreuse  />
      </div>
    </div>
    <div   className="mb-8 mt-16" style={{ overflow: "hidden" }}>
    <div className="w-3/4 max-w-3/4  mx-auto mb-5">
        {" "}
        <span className="text-3xl font-semibold text-gray-800 tracking-wide">
        New Launches
        </span>
        <p  className="text-gray-500 font-normal mt-2">New wellness range just for you!</p>
      </div>
      <div className="mt-8" >
        
      <Scrollboxreuse  />
      </div>
    </div>

    <div   className="mb-8 mt-16" style={{ overflow: "hidden" }}>
    <div className="w-3/4 max-w-3/4  mx-auto mb-5">
        {" "}
        <span className="text-3xl font-semibold text-gray-800 tracking-wide">
        Trending Near You
        </span>
        <p  className="text-gray-500 font-normal mt-2">Popular in your city</p>
      </div>
      <div className="mt-8" >
        
      <Scrollboxreuse  />
      </div>
    </div>
  

    </>
  );
};

export default ShopbyCategories;
