"use client";

import { useState } from "react";
import Image from "next/image";
import Button from "../../ui/Button/Button";
import { ChevronDown, ChevronRight } from "lucide-react";

type Section = {
  id: string;
  title: string;
  options: { label: string; value: string }[];
};

const sections: Section[] = [
  {
    id: "heatSource",
    title: "Джерело тепла",
    options: [
      { label: "Газ", value: "gas" },
      { label: "Газ + Електроенергія", value: "gas-electric" },
      { label: "Електроенергія", value: "electric" },
      { label: "Тверде паливо", value: "solid" },
      { label: "Тверде паливо + Електроенергія", value: "solid-electric" },
    ],
  },
  {
    id: "separator",
    title: "Гідравлічний роздільник",
    options: [
      { label: "Немає", value: "none" },
      { label: "Теплорегулятор", value: "thermoreg" },
    ],
  },
  {
    id: "contours",
    title: "Кількість контурів",
    options: [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
    ],
  },
  {
    id: "weather",
    title: "Погодозалежне керування",
    options: [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
    ],
  },
  {
    id: "solidBoiler",
    title: "Твердопаливний котел циркуляція",
    options: [
      { label: "Насос", value: "pump" },
      { label: "Насос + самоплив", value: "pump-self" },
      { label: "Самоплив", value: "self" },
    ],
  },
  {
    id: "dhw",
    title: "ГВП",
    options: [
      { label: "Бойлер непрямого нагріву", value: "boiler" },
      { label: "Двоконтурний", value: "dual" },
      { label: "Немає", value: "none" },
    ],
  },
  {
    id: "recirculation",
    title: "ГВП Рециркуляція",
    options: [
      { label: "Так", value: "yes" },
      { label: "Ні", value: "no" },
    ],
  },
  {
    id: "brand",
    title: "Виробник",
    options: [
      { label: "Protherm", value: "protherm" },
      { label: "Vaillant", value: "vaillant" },
    ],
  },
];

export default function SideBar() {
  const [openSections, setOpenSections] = useState<string[]>(sections.map((s) => s.id));

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  return (
    <aside aria-label="Фільтри каталогу">
      {/* Заголовок */}
      <header
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 12px",
          background: "#f5f5f5",
          borderRadius: 6,
          marginBottom: 16,
        }}
      >
        <Image src="/icons/funnel.svg" alt="Фільтри" width={16} height={16} priority />
        <h2 style={{ fontSize: 16, fontWeight: 500, margin: 0 }}>Параметри котельні</h2>
      </header>

      {/* Секції */}
      <form aria-label="Панель фільтрів" style={{ display: "grid", gap: 12 }}>
        {sections.map((section) => {
          const isOpen = openSections.includes(section.id);
          return (
            <fieldset
              key={section.id}
              style={{
                border: "none",
                padding: 0,
                margin: 0,
              }}
            >
              <legend
                onClick={() => toggleSection(section.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "6px 0",
                  cursor: "pointer",
                  fontWeight: 500,
                  fontSize: 14,
                }}
              >
                {section.title}
                {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              </legend>

              {isOpen && (
                <div style={{ display: "grid", gap: 4, paddingLeft: 4 }}>
                  {section.options.map((opt) => (
                    <label key={opt.value} style={{ fontSize: 14 }}>
                      <input type="checkbox" value={opt.value} /> {opt.label}
                    </label>
                  ))}
                </div>
              )}
            </fieldset>
          );
        })}

        {/* Кнопка */}
        <div style={{ marginTop: 8 }}>
          <Button type="submit">Застосувати</Button>
        </div>
      </form>
    </aside>
  );
}