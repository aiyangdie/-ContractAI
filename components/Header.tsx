import React from 'react';
import { Icon } from './Icon';

export const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Icon name="FileText" className="text-white" size={24} />
            </div>
            <span className="ml-3 text-xl font-bold text-gray-900 tracking-tight">智律<span className="text-blue-600">ContractAI</span></span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-500 text-sm">全自动 · 多语言 · 专业级</span>
          </div>
        </div>
      </div>
    </header>
  );
};
