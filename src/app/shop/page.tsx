import Checkbox from "../../features/shop/Checkbox/Checkbox";
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
          border: "4px",
          borderRadius: "4px",
          padding: "32px 16px",
          alignSelf: "start",
          position: "sticky",
          top: "20px",
          boxShadow: "2px 2px 10px 0 rgba(0, 0, 0, 0.08)",
        }}
      >
        <Checkbox />
      </aside>

      {/* Права колонка */}
      <Content />
    </div>
  );
}