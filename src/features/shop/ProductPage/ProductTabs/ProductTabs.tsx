"use client";

import { useId, useState } from "react";
import s from "./ProductTabs.module.css";

/* фейковий контент під макет */
const description = {
  intro:
    "Твердопаливний котел з теплоакумулятором. Циркуляція між ними відбувається самопливом. Для постійного використання твердопаливного котла це неповноцінний варіант. Він більше підходить для в’язки цього обладнання до вже існуючого електричного або газового котла.",
  includesTitle: "У пропозицію входить:",
  includes: [
    "твердопаливний котел Neus Практик 20 кВт",
    "теплоакумулятор Теплобак BTA-4 Економ 1000 л, в м’якій ізоляції",
    "ручне керування температурою теплоносія",
    "енергозберігаючий циркуляційний насос Wilo",
    "обладнання і арматура західноєвропейських виробників (крани, баки, клапани)",
    "обв’язування мідними та поліпропіленовими трубами",
    "доставка, монтаж, пуск, первісне налагодження",
  ],
  customerTitle: "З боку замовника повинно бути забезпечено:",
  customerList: ["димар"],
};

const specs = [
  { label: "Джерело тепла:", value: "Тверде паливо" },
  { label: "Гідравлічний роздільник:", value: "Теплоакумулятор" },
  { label: "Кількість контурів:", value: "1" },
  { label: "Твердопаливний котел циркуляція:", value: "Самоплив" },
  { label: "ГВП:", value: "Нема" },
  { label: "ГВП Рециркуляція:", value: "Ні" },
];

export default function ProductTabs() {
  const [tab, setTab] = useState<"desc" | "specs">("desc");

  const tabDescId = useId();
  const tabSpecsId = useId();
  const panelDescId = useId();
  const panelSpecsId = useId();

  return (
    <section className={s.wrap} aria-label="Опис та параметри">
      {/* таби */}
      <div className={s.tabbar} role="tablist" aria-label="Вкладки">
        <button
          role="tab"
          id={tabDescId}
          aria-controls={panelDescId}
          aria-selected={tab === "desc"}
          tabIndex={tab === "desc" ? 0 : -1}
          className={`${s.tab} ${tab === "desc" ? s.tabActive : ""}`}
          onClick={() => setTab("desc")}
          type="button"
        >
          Опис
        </button>

        <button
          role="tab"
          id={tabSpecsId}
          aria-controls={panelSpecsId}
          aria-selected={tab === "specs"}
          tabIndex={tab === "specs" ? 0 : -1}
          className={`${s.tab} ${tab === "specs" ? s.tabActive : ""}`}
          onClick={() => setTab("specs")}
          type="button"
        >
          Параметри
        </button>
      </div>

      {/* панель: Опис */}
      {tab === "desc" && (
        <div
          role="tabpanel"
          id={panelDescId}
          aria-labelledby={tabDescId}
          className={s.panel}
        >
          <p className={s.lead}>{description.intro}</p>

          <p className={`${s.lead} ${s.subhead}`}>{description.includesTitle}</p>
          <ul className={s.ul}>
            {description.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className={`${s.lead} ${s.subhead}`}>{description.customerTitle}</p>
          <ul className={s.ul}>
            {description.customerList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* панель: Параметри */}
      {tab === "specs" && (
        <div
          role="tabpanel"
          id={panelSpecsId}
          aria-labelledby={tabSpecsId}
          className={s.panel}
        >
          <div className={s.table} role="table" aria-label="Технічні параметри">
            {specs.map((row) => (
              <div key={row.label} role="row" className={s.tr}>
                <div role="cell" className={`${s.td} ${s.tdLabel}`}>
                  {row.label}
                </div>
                <div role="cell" className={`${s.td} ${s.tdValue}`}>
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
