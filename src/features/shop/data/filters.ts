export type FilterValue = {
  valueId: string;
  label: string;
};

export type FilterSection = {
  filterId: string;
  label: string;
  multipleChoice: boolean;
  values: FilterValue[];
};

export type Filter = FilterSection[];

export const filter: Filter = [
  {
    filterId: 'heat-source',
    label: 'Джерело тепла',
    multipleChoice: true,
    values: [
      { valueId: 'gas', label: 'Газ' },

      {
        valueId: 'electro',
        label: 'Електроенергія',
      },

      {
        valueId: 'solid-fuel',
        label: 'Тверде паливо',
      },
    ],
  },

  {
    filterId: 'separator',
    label: 'Гідравлічний роздільник',
    multipleChoice: false,
    values: [
      { valueId: 'true', label: 'Так' },

      { valueId: 'false', label: 'Ні' },
    ],
  },

  {
    filterId: 'sirquits',
    label: 'Кількість контурів',
    multipleChoice: false,
    values: [
      { valueId: '1', label: '1' },

      { valueId: '2', label: '2' },
    ],
  },

  {
    filterId: 'weather',
    label: 'Погодозалежне керування',
    multipleChoice: false,
    values: [
      { valueId: 'true', label: 'так' },

      { valueId: 'false', label: 'Ні' },
    ],
  },

  {
    filterId: 'solid-fuel-boiler-circulation',
    label: 'Циркуляція через твердопаливний котел',
    multipleChoice: true,
    values: [
      { valueId: 'pump', label: 'Насос' },

      { valueId: 'gravitation', label: 'Самоплив' },
    ],
  },

  {
    filterId: 'how-water',
    label: 'ГВП',
    multipleChoice: false,
    values: [
      { valueId: 'false', label: 'Немає' },

      { valueId: 'indirect-tank', label: 'Бойлер непрямого нагріву' },

      { valueId: 'double-circuit-boiler', label: 'Двоконтурний котел' },
    ],
  },

  {
    filterId: 'recirculation',
    label: 'ГВП',
    multipleChoice: false,
    values: [
      { valueId: 'true', label: 'Так' },

      { valueId: 'false', label: 'Ні' },
    ],
  },
];
