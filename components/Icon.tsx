import React from 'react';
import { 
  Briefcase, 
  Home, 
  Banknote, 
  Lock, 
  ShoppingCart, 
  Handshake, 
  FileText,
  ChevronLeft,
  Download,
  Copy,
  Languages,
  Wand2,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';

export const IconMap: Record<string, React.ComponentType<any>> = {
  Briefcase,
  Home,
  Banknote,
  Lock,
  ShoppingCart,
  Handshake,
  FileText,
  ChevronLeft,
  Download,
  Copy,
  Languages,
  Wand2,
  CheckCircle2,
  AlertTriangle
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const IconComponent = IconMap[name] || FileText;
  return <IconComponent className={className} size={size} />;
};
