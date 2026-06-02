export interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  isFirst?: boolean;
}

export interface CareerCard {
  id: number;
  title: string;
  description: string;
  liItem: string;
}

export interface AboutCard {
  id: number;
  name: string;
  description: string;
  buttonText: string;
}

export interface EmployeeProps {
  imageSrc: string;
  name: string;
  words: string;
  description: string;
  position: string;
}

export interface EmployeeCard {
  id: number;
  name: string;
  description: string;
  logo?: { url: string };
  words: string;
  position: string;
}

export interface RoleCard {
  id: number;
  title: string;
  description: string;
  employmentType: string;
  workType: string;
  location: string;
  date: string;
}
