export interface HeaderLink {
  href: string;
  label: string;
  current?: boolean;
}

export interface HeaderProps {
  title: string;
  links: HeaderLink[];
  class?: string;
}
