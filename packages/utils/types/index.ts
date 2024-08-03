export type NavItem = {
  title: string;
  slug?: string;
  children?: NavItem[] | boolean;
};

export type MobileNavType = {
  title: string;
  slug?: string;
  children?: NavItem[];
};
