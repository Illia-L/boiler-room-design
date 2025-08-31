export type NavLink = {
  label: string;
  to: string;
}

export const navLinks: NavLink[] = [
  {label: 'Головна', to: '/'},
  {label: 'Каталог', to: '/shop'},
  {label: 'Наші роботи', to: '/our-work'},
  {label: 'Що в проєкті', to: '/deliverables'},
  {label: 'Контакти', to: '#contacts'},
]