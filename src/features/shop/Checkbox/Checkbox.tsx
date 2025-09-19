"use client";

import s from "./Checkbox.module.css";
import colors from "../../../app/shop/page.module.css"

import { useState } from "react";
import Image from "next/image";
import Button from "../../ui/Button/Button";
import { ChevronDown, ChevronUp } from "lucide-react";

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

export default function Checkbox() {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const handleCheckboxChange = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <aside aria-label="Фільтри каталогу" className={`${s.aside} ${colors.page}` }>
      {/* Заголовок */}
      <header className={s.header}>
        <Image
          src="/icons/funnel.svg"
          alt="Фільтри"
          width={14}
          height={16}
          priority
        />
        <h2>Параметри котельні</h2>
      </header>

      {/* Секції */}
      <form
        aria-label="Панель фільтрів"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={s.form}
      >
        {sections.map((section) => {
          const isOpen = openSections.includes(section.id);
          return (
            <fieldset key={section.id} className={s.fieldset}>
              <legend
                onClick={() => toggleSection(section.id)}
                className={s.legend}
              >
                {section.title}
                {isOpen ? (
                  <ChevronDown
                    // onClick={() => toggleSection(section.id)}
                    size={18}
                    style={{ flexShrink: 0 }}
                  />
                ) : (
                  <ChevronUp
                    // onClick={() => toggleSection(section.id)}
                    size={18}
                    style={{ flexShrink: 0 }}
                  />
                )}
              </legend>

              {isOpen && (
                <div className={s.openDiv}>
                  {section.options.map((opt) => (
                    <label key={opt.value} className={s.label}>
                      <input
                        type="checkbox"
                        value={opt.value}
                        checked={selectedValues.includes(opt.value)}
                        onChange={() => handleCheckboxChange(opt.value)}
                      />
                      <span>{opt.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </fieldset>
          );
        })}

        {/* Кнопка */}
        <div className={s.divBt}>
          <Button className={s.btn} type="submit" variant="fill" size="sm">
            Застосувати
          </Button>
        </div>
      </form>
    </aside>
  );
}
