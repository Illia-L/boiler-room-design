"use client";

import { useState } from "react";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronRight,
  ChevronsRight,
} from "lucide-react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const goToPage = (page: number) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const btnStyle = (disabled: boolean) => ({
    background: "none",
    border: "none",
    padding: 4,
    display: "flex",
    alignItems: "center",
    cursor: disabled ? "default" : "pointer",
    opacity: disabled ? 0.4 : 1,
  });

  return (
    <nav
      aria-label="Пагінація"
      style={{ display: "flex", justifyContent: "center", gap: 8 }}
    >
      {/* В початок */}
      <button
        onClick={() => goToPage(1)}
        disabled={currentPage === 1}
        style={btnStyle(currentPage === 1)}
      >
        <ChevronsLeft size={20} />
      </button>

      {/* Попередня */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        style={btnStyle(currentPage === 1)}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Номери сторінок */}
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        const isActive = page === currentPage;
        return (
          <button
            key={page}
            onClick={() => goToPage(page)}
            style={{
              padding: "6px 12px",
              borderRadius: 4,
              border: isActive ? "1px solid #333" : "1px solid transparent",
              background: isActive ? "#fff" : "transparent",
              fontWeight: isActive ? 600 : 400,
              cursor: "pointer",
            }}
          >
            {page}
          </button>
        );
      })}

      {/* Наступна */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={btnStyle(currentPage === totalPages)}
      >
        <ChevronRight size={20} />
      </button>

      {/* В кінець */}
      <button
        onClick={() => goToPage(totalPages)}
        disabled={currentPage === totalPages}
        style={btnStyle(currentPage === totalPages)}
      >
        <ChevronsRight size={20} />
      </button>
    </nav>
  );
}