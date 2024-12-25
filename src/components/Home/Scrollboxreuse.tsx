const categories = [
  {
    id: "1",
    label:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
  },
  {
    id: "2",
    label:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
  },
  {
    id: "3",
    label:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
  },
  {
    id: "4",
    label:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
  },
  {
    id: "5",
    label:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
  },
  {
    id: "6",
    label:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
  },
  {
    id: "7",
    label:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
  },
  {
    id: "8",
    label:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
  },
  {
    id: "9",
    label:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
  },
  {
    id: "10",
    label:
      "https://cms-contents.pharmeasy.in/homepage_top_categories_images/4cb2baf3234-Fullbody.png?dim=256x0",
  },
];

const Scrollboxreuse = () => {
  return (
    <div
      style={{
        width: "100vw", // Full viewport width
        overflowX: "hidden", // Prevent horizontal scroll on the page
        overflowY: "hidden", // Prevent vertical scroll on the page
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
            overflowY: "hidden", // Prevent vertical scroll
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
                height: "180px",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "12px",
                flex: "0 0 auto",
                // boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
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
                    // borderRadius: "12px",
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
};

export default Scrollboxreuse;
