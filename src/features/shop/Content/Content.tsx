import Link from "next/link";
import ProductList from "../ProductList/ProductList";
import Pagination from "../Pagination/Pagination";

export default function Content() {
  return (
    <main id="catalog-content" style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" style={{ fontSize: "14px", color: "#666" }}>
        <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>
          Головна
        </Link>
        {" | "}
        <span>Пропозиції</span>
      </nav>

      {/* Заголовок */}
      <header>
        <h1 style={{ fontSize: "24px", fontWeight: 600, margin: 0 }}>Котельні</h1>
      </header>

      {/* Список продуктів */}
      <section aria-label="Список продуктів">
        <ProductList />
      </section>

      {/* Пагінація */}
      <nav aria-label="Пагінація каталогу">
        <Pagination />
      </nav>
    </main>
  );
}