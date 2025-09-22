import PageTopControls from "@/features/shop/ProductPage/PageTopControls/PageTopControls";
import ProductCard from "@/features/shop/ProductPage/ProductCard/ProductCard";
import ProductTabs from "@/features/shop/ProductPage/ProductTabs/ProductTabs";

export default function ProductPage() {
  const title = "Твердопаливний котел + теплоакумулятор"; // можна отримувати з даних

  return (
    <div style={{ padding: 24, display: "grid", gap: 16 }}>
      <PageTopControls title={title} />
      <ProductCard />
      <ProductTabs />
    </div>
  );
}
