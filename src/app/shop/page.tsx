import SideBar from "../../features/shop/SideBar/SideBar";
import Content from "../../features/shop/Content/Content";

export default function ShopPage() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "280px 1fr",
        gap: "24px",
        padding: "24px",
        background: "#f8f8f8",
      }}
    >
      {/* Ліва колонка */}
      <aside
        aria-label="Фільтри каталогу"
        style={{
          background: "#fff",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "16px",
          alignSelf: "start",
          position: "sticky",
          top: "20px",
        }}
      >
        <SideBar />
      </aside>

      {/* Права колонка */}
      <Content />
    </div>
  );
}