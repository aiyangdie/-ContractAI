import React from 'react';
import { Icon } from './Icon';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-semibold text-white">智律 ContractAI</p>
            <p className="text-sm text-gray-400 mt-1">智能法律助手，赋能全球商务。</p>
          </div>
          <div className="flex items-start max-w-lg bg-gray-700/50 p-4 rounded-lg border border-gray-600">
            <Icon name="AlertTriangle" className="text-yellow-500 mr-3 flex-shrink-0" size={20} />
            <p className="text-xs text-gray-400">
              <strong>免责声明：</strong> 本工具生成的合同仅供参考。AI生成内容可能存在错误或不符合特定司法管辖区的法律规定。在签署任何具有法律约束力的文件之前，请务必咨询专业律师或法律顾问。开发者不对因使用本工具产生的任何法律后果负责。
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} 智律 ContractAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
