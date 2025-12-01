export enum ContractCategory {
  EMPLOYMENT = 'EMPLOYMENT',
  RENTAL = 'RENTAL',
  LOAN = 'LOAN',
  SERVICE = 'SERVICE',
  SALES = 'SALES',
  NDA = 'NDA',
  PARTNERSHIP = 'PARTNERSHIP',
  OTHER = 'OTHER'
}

export interface TemplateDefinition {
  id: ContractCategory;
  name: string;
  icon: string;
  description: string;
  fields: FormField[];
}

export interface FormField {
  key: string;
  label: string;
  placeholder: string;
  type: 'text' | 'number' | 'date' | 'textarea' | 'currency';
  required?: boolean;
}

export interface ContractRequestData {
  category: ContractCategory;
  targetLanguage: string;
  formData: Record<string, string>;
}

export interface GeneratedContract {
  title: string;
  content: string;
  language: string;
  createdAt: Date;
}
