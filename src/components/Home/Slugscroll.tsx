const categories = [
  {
    id: "1",
    label: "https://cdn01.pharmeasy.in/dam/banner/banner/8ba6aa74543-3.jpg",
  },
  {
    id: "2",
    label: "https://cdn01.pharmeasy.in/dam/banner/banner/8786963c3c8-scalpe_Ban.jpg",
  },
  {
    id: "3",
    label: "https://cdn01.pharmeasy.in/dam/banner/banner/1183ad82bb8-NEW-SLIPPERS.jpg",
  },
  {
    id: "4",
    label: "https://cdn01.pharmeasy.in/dam/banner/banner/93b84087381-2.jpg",
  },
  {
    id: "5",
    label: "https://cdn01.pharmeasy.in/dam/banner/banner/192c91627f4-Evion_Banner.jpg",
  },
  {
    id: "6",
    label: "https://cdn01.pharmeasy.in/dam/banner/banner/8786963c3c8-scalpe_Ban.jpg",
  },
  {
    id: "7",
    label: "https://cdn01.pharmeasy.in/dam/banner/banner/1183ad82bb8-NEW-SLIPPERS.jpg",
  },
  {
    id: "8",
    label: "https://cdn01.pharmeasy.in/dam/banner/banner/93b84087381-2.jpg",
  },
  {
    id: "9",
    label: "https://cdn01.pharmeasy.in/dam/banner/banner/93b84087381-2.jpg",
  },
  {
    id: "10",
    label: "https://cdn01.pharmeasy.in/dam/banner/banner/93b84087381-2.jpg",
  },
];

function Slugscroll() {
  return (
    <div className="w-screen overflow-hidden box-border flex justify-center">
      <div className="w-[70vw] mx-auto overflow-x-auto scrollbar-hide">
        <div className="flex gap-5 whitespace-nowrap">
          {categories.map((category) => (
            <div
              key={category.id}
              className="w-[400px] h-[200px] bg-gray-200 flex items-center justify-center rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 flex-shrink-0"
            >
              {category.label.startsWith("http") ? (
                <img
                  src={category.label}
                  alt={`Category ${category.id}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <span className="text-lg font-bold">{category.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slugscroll;
