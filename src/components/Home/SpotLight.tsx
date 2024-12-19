// import ScrollboxreuseType2 from "./ScrollboxreuseType2";
const categories = [
  {
    id: "1",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
    label: "All Products 1",
    slugmrp: "MRP 1000",
    mrp: "₹ 500",
  },
  {
    id: "2",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
    label: "Electronics 2",
    slugmrp: "MRP 1000",
    mrp: "₹ 500",
  },
  {
    id: "3",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
    label: "Clothing 3",
    slugmrp: "MRP 1000",
    mrp: "₹ 500",
  },
  {
    id: "4",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
    label: "Books 4",
    slugmrp: "MRP 1000",
    mrp: "₹ 500",
  },
  {
    id: "5",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
    label: "Home & Garden 5",
    slugmrp: "MRP 1000",
    mrp: "₹ 500",
  },
  {
    id: "6",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
    label: "Sports 6",
    slugmrp: "MRP 1000",
    mrp: "₹ 500",
  },
  {
    id: "7",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
    label: "Automotive 7",
    slugmrp: "MRP 1000",
    mrp: "₹ 500",
  },
  {
    id: "8",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
    label: "Health & Beauty 8",
    slugmrp: "MRP 1000",
    mrp: "₹ 500",
  },
  {
    id: "9",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
    label: "Toys & Games 9",
    slugmrp: "MRP 1000",
    mrp: "₹ 500",
  },
  {
    id: "10",
    image:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
    label: "Pet Supplies 10",
    slugmrp: "MRP 1000",
    mrp: "₹ 500",
  },
];

const SpotLight = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://assets.pharmeasy.in/apothecary/images/spotlightBig.svg')",
        display: "flex",
        justifyContent: "center",
        width: "80%", // 80% width for the parent container
        maxWidth: "80vw", // Prevent exceeding 80% of the viewport width
        margin: "0 auto",
        boxSizing: "border-box",
      }}
      className="exp w-3/4 max-w-3/4vw h-auto m"
    >
      <div style={{ width: "100%" }}>
        <h1 className="text text-2xl font-semibold m-5">In the Spotlight</h1>
        <div
          style={{
            width: "100%",
            overflowX: "hidden", // Prevent horizontal scroll on the page
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "75%", // 75% width for the parent container
              overflowY: "hidden", // Prevent vertical scroll
              margin: "0 auto", // Center the parent div horizontally
              overflow: "hidden", // Prevent any child overflow
              boxSizing: "border-box",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                overflowX: "auto", // Horizontal scroll confined to this container
                gap: "20px",
                scrollBehavior: "smooth",
                whiteSpace: "nowrap", // Prevent wrapping
                scrollbarWidth: "none", // Hide scrollbar for Firefox
                maxWidth: "100%", // Ensure children do not overflow parent
              }}
              className="hide-scrollbar" // Add a class to hide scrollbar for Webkit browsers
            >
              {categories.map((category) => (
                <div
                  key={category.id}
                  style={{
                    minWidth: "180px", // Fixed child width
                    height: "250px",
                    backgroundColor: "#f0f0f0",
                    display: "flex",
                    flexDirection: "column",
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "180px",
                    }}
                  >
                    {category.image.startsWith("http") ? (
                      <img
                        src={category.image}
                        alt={`Category ${category.id}`}
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          borderRadius: "12px",
                        }}
                      />
                    ) : (
                      <span style={{ fontSize: "18px", fontWeight: "bold" }}>
                        {category.image}
                      </span>
                    )}
                  </div>
                  <div style={{ textAlign: "center", marginTop: "10px" }}>
                    <p style={{ fontSize: "16px", fontWeight: "bold" }}>
                      {category.label}
                    </p>
                    <p style={{ fontSize: "14px", color: "gray" }}>
                      {category.slugmrp}
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "green",
                      }}
                    >
                      {category.mrp}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpotLight;
