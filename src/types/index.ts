export interface Project {
  id: number;
  title: string;
  image: string;
  tags: string[];
  description: string[];
  buttons: ProjectButton[];
  hidden?: boolean;
}

export interface ProjectButton {
  text: string;
  link: string;
}

export interface ExperienceItem {
  icon: string;
  title: string;
  level: string;
}

export interface ContactInfo {
  icon: string;
  link: string;
  text: string;
  type: 'email' | 'linkedin';
}

export interface NavLink {
  href: string;
  text: string;
} 