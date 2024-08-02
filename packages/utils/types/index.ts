export type NavItem = {
  title: string;
  slug?: string;
  NavTitle?: string;
  rows?: number;
  children?: NavItem[];
};
