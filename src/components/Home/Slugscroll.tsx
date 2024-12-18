const categories = [
  {
    id: "1",
    label: "https://cdn01.pharmeasy.in/dam/banner/banner/8ba6aa74543-3.jpg",
  },
  {
    id: "2",
    label:
      "https://cdn01.pharmeasy.in/dam/banner/banner/8786963c3c8-scalpe_Ban.jpg",
  },
  { id: "3", label: "https://cdn01.pharmeasy.in/dam/banner/banner/1183ad82bb8-NEW-SLIPPERS.jpg" },
  {
    id: "4",
    label: "https://cdn01.pharmeasy.in/dam/banner/banner/93b84087381-2.jpg",
  },
  {
    id: "5",
    label:
      "https://cdn01.pharmeasy.in/dam/banner/banner/192c91627f4-Evion_Banner.jpg",
  },
  {
    id: "6",
    label:
      "https://cdn01.pharmeasy.in/dam/banner/banner/8786963c3c8-scalpe_Ban.jpg",
  },
  {
    id: "7",
    label:
      "https://cdn01.pharmeasy.in/dam/banner/banner/1183ad82bb8-NEW-SLIPPERS.jpg",
  },
  { id: "8", label: "https://cdn01.pharmeasy.in/dam/banner/banner/93b84087381-2.jpg" },
  { id: "9", label: "https://cdn01.pharmeasy.in/dam/banner/banner/93b84087381-2.jpg" },
  { id: "10", label: "https://cdn01.pharmeasy.in/dam/banner/banner/93b84087381-2.jpg" },
];

function Slugscroll() {
  return (
    <div
      style={{
        width: "100vw", // Full viewport width
        overflowX: "hidden", // Prevent horizontal scroll on the page
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "70%", // 70% width for the parent container
          maxWidth: "70vw", // Prevent exceeding 70% of the viewport width
          margin: "0 auto", // Center the parent div horizontally
          overflow: "hidden", // Prevent any child overflow
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            overflowX: "auto", // Horizontal scroll confined to this container
            gap: "20px",
            scrollBehavior: "smooth",
            whiteSpace: "nowrap", // Prevent wrapping
          }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              style={{
                minWidth: "400px", // Fixed child width
                height: "200px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                flex: "0 0 auto",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              {category.label.startsWith("http") ? (
                <img
                  src={category.label}
                  alt={`Category ${category.id}`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    borderRadius: "12px",
                  }}
                />
              ) : (
                <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {category.label}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slugscroll;
