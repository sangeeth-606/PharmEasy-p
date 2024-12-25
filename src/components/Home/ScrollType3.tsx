const categories = [
    {
        id: "1",
        label: "https://cdn01.pharmeasy.in/dam/banner/banner/2a98ec7794a-LupinHumJPEG.jpg?dim=1440x0",
    },
    {
        id: "2",
        label: "https://cdn01.pharmeasy.in/dam/banner/banner/2a98ec7794a-LupinHumJPEG.jpg?dim=1440x0",
    },
    {
        id: "3",
        label: "https://cdn01.pharmeasy.in/dam/banner/banner/2a98ec7794a-LupinHumJPEG.jpg?dim=1440x0",
    },
    {
        id: "4",
        label: "https://cdn01.pharmeasy.in/dam/banner/banner/2a98ec7794a-LupinHumJPEG.jpg?dim=1440x0",
    },
    {
        id: "5",
        label: "https://cdn01.pharmeasy.in/dam/banner/banner/2a98ec7794a-LupinHumJPEG.jpg?dim=1440x0",
    },
    {
        id: "6",
        label: "https://cdn01.pharmeasy.in/dam/banner/banner/2a98ec7794a-LupinHumJPEG.jpg?dim=1440x0",
    },
    {
        id: "7",
        label: "https://cdn01.pharmeasy.in/dam/banner/banner/2a98ec7794a-LupinHumJPEG.jpg?dim=1440x0",
    },
    {
        id: "8",
        label: "https://cdn01.pharmeasy.in/dam/banner/banner/2a98ec7794a-LupinHumJPEG.jpg?dim=1440x0",
    },
    {
        id: "9",
        label: "https://cdn01.pharmeasy.in/dam/banner/banner/2a98ec7794a-LupinHumJPEG.jpg?dim=1440x0",
    },
    {
        id: "10",
        label: "https://cdn01.pharmeasy.in/dam/banner/banner/2a98ec7794a-LupinHumJPEG.jpg?dim=1440x0",
    },
];


const Scrollboxreuse = () => {
  return (
    <div
      style={{
      width: "100vw", // Full viewport width
      overflowX: "hidden", // Prevent horizontal scroll on the page
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      marginTop: "50px",
      }}
    >
      <div
      style={{
        width: "75%", // 70% width for the parent container
        overflowY: "hidden", // Prevent vertical scroll
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
        scrollbarWidth: "none", // Hide scrollbar for Firefox
        }}
        className="hide-scrollbar" // Add a class to hide scrollbar for Webkit browsers
      >
        {categories.map((category) => (
        <div
          key={category.id}
          style={{
          minWidth: "250px", // Fixed child width
          height: "180px",
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "8px",
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
  )
}

export default Scrollboxreuse