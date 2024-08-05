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

export interface Module {
  _type: string;
  _key: string;
  [key: string]: any;
}

export interface IndustryModules {
  [key: string]: Module[];
}

export interface CapabilitiesModules {
  [key: string]: Module[];
}
export interface CaseStudyModules {
  [key: string]: Module[];
}
