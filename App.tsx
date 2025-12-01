import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Icon } from './components/Icon';
import { CONTRACT_TEMPLATES, SUPPORTED_LANGUAGES } from './constants';
import { ContractCategory, ContractRequestData, TemplateDefinition } from './types';
import { generateContractContent } from './services/geminiService';

enum AppStep {
  SELECTION = 0,
  FORM = 1,
  LOADING = 2,
  RESULT = 3,
}

const App: React.FC = () => {
  const [step, setStep] = useState<AppStep>(AppStep.SELECTION);
  const [selectedTemplate, setSelectedTemplate] = useState<TemplateDefinition | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [targetLanguage, setTargetLanguage] = useState<string>('zh-CN');
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  // Handle Template Selection
  const handleSelectTemplate = (template: TemplateDefinition) => {
    setSelectedTemplate(template);
    setFormData({}); // Reset form
    setStep(AppStep.FORM);
    window.scrollTo(0, 0);
  };

  // Handle Form Input
  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  // Handle Generate
  const handleGenerate = async () => {
    if (!selectedTemplate) return;

    // Basic validation
    const missingFields = selectedTemplate.fields
      .filter(f => f.required && !formData[f.key])
      .map(f => f.label);

    if (missingFields.length > 0) {
      alert(`请填写以下必填项: ${missingFields.join(', ')}`);
      return;
    }

    setStep(AppStep.LOADING);
    setError(null);

    const requestData: ContractRequestData = {
      category: selectedTemplate.id,
      targetLanguage,
      formData
    };

    try {
      const content = await generateContractContent(requestData);
      setGeneratedContent(content);
      setStep(AppStep.RESULT);
    } catch (err) {
      setError("生成失败，请稍后重试或检查网络。");
      setStep(AppStep.FORM);
    }
  };

  // Handle Reset
  const handleReset = () => {
    setStep(AppStep.SELECTION);
    setSelectedTemplate(null);
    setGeneratedContent('');
  };

  const handleBackToForm = () => {
    setStep(AppStep.FORM);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    alert('合同内容已复制到剪贴板！');
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedContent], {type: 'text/markdown'});
    element.href = URL.createObjectURL(file);
    element.download = `${selectedTemplate?.name || 'contract'}_${Date.now()}.md`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-10">
        
        {/* Step 1: Template Selection */}
        {step === AppStep.SELECTION && (
          <div className="space-y-8 animate-fade-in">
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                请选择您的<span className="text-blue-600">合同类型</span>
              </h1>
              <p className="mt-4 text-lg text-gray-500">
                我们提供多种专业模板，结合AI智能生成，满足您从商业到个人的所有法律文档需求。
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CONTRACT_TEMPLATES.map((template) => (
                <button
                  key={template.id}
                  onClick={() => handleSelectTemplate(template)}
                  className="group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-500 hover:shadow-xl transition-all duration-300 rounded-xl border border-gray-200 text-left flex flex-col h-full"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-3 rounded-lg bg-blue-50 text-blue-700 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon name={template.icon} size={28} />
                    </span>
                    <Icon name="ChevronLeft" className="rotate-180 text-gray-300 group-hover:text-blue-500 transition-colors" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {template.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {template.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Input Form */}
        {step === AppStep.FORM && selectedTemplate && (
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden animate-fade-in">
             <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
                <button 
                  onClick={handleReset}
                  className="text-gray-500 hover:text-gray-700 flex items-center text-sm font-medium"
                >
                  <Icon name="ChevronLeft" className="mr-1" size={16} /> 返回模版
                </button>
                <h2 className="text-lg font-bold text-gray-800 flex items-center">
                  <Icon name={selectedTemplate.icon} className="mr-2 text-blue-600" size={20} />
                  {selectedTemplate.name}
                </h2>
                <div className="w-16"></div> {/* Spacer for centering */}
             </div>

             <div className="p-8 space-y-6">
                {error && (
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <Icon name="AlertTriangle" className="h-5 w-5 text-red-400" />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-red-700">{error}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 gap-6">
                  {/* Language Selector */}
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <label className="block text-sm font-medium text-blue-900 mb-2 flex items-center">
                      <Icon name="Languages" className="mr-2" size={16}/> 目标语言 (Output Language)
                    </label>
                    <select
                      value={targetLanguage}
                      onChange={(e) => setTargetLanguage(e.target.value)}
                      className="block w-full pl-3 pr-10 py-2.5 text-base border-blue-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md shadow-sm"
                    >
                      {SUPPORTED_LANGUAGES.map(lang => (
                        <option key={lang.code} value={lang.name}>{lang.name}</option>
                      ))}
                    </select>
                    <p className="mt-1 text-xs text-blue-600">合同将使用此语言全自动生成。</p>
                  </div>
                  
                  <div className="border-t border-gray-100 my-2"></div>

                  {/* Dynamic Fields */}
                  {selectedTemplate.fields.map((field) => (
                    <div key={field.key}>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      
                      {field.type === 'textarea' ? (
                        <textarea
                          rows={4}
                          placeholder={field.placeholder}
                          value={formData[field.key] || ''}
                          onChange={(e) => handleInputChange(field.key, e.target.value)}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                      ) : (
                        <div className="relative rounded-md shadow-sm">
                          {field.type === 'currency' && (
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">¥/$</span>
                            </div>
                          )}
                          <input
                            type={field.type === 'currency' ? 'number' : field.type}
                            className={`block w-full ${field.type === 'currency' ? 'pl-10' : 'pl-3'} pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                            placeholder={field.placeholder}
                            value={formData[field.key] || ''}
                            onChange={(e) => handleInputChange(field.key, e.target.value)}
                          />
                        </div>
                      )}
                    </div>
                  ))}

                  <div className="pt-4">
                     <button
                        onClick={handleGenerate}
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                      >
                        <Icon name="Wand2" className="mr-2" size={20} />
                        立即生成合同
                      </button>
                  </div>
                </div>
             </div>
          </div>
        )}

        {/* Step 3: Loading */}
        {step === AppStep.LOADING && (
           <div className="flex flex-col items-center justify-center py-20 animate-pulse">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mb-6"></div>
              <h3 className="text-xl font-medium text-gray-900">正在起草合同...</h3>
              <p className="text-gray-500 mt-2">AI 法律助手正在分析条款并翻译为 {targetLanguage.split(' ')[0]} ...</p>
           </div>
        )}

        {/* Step 4: Result */}
        {step === AppStep.RESULT && (
          <div className="max-w-4xl mx-auto animate-fade-in">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <button 
                  onClick={handleBackToForm}
                  className="text-gray-500 hover:text-gray-900 flex items-center text-sm font-medium"
                >
                  <Icon name="ChevronLeft" className="mr-1" size={16} /> 修改信息
                </button>
                <div className="flex space-x-3">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                  >
                    <Icon name="Copy" className="mr-2 h-4 w-4" /> 复制全文
                  </button>
                  <button
                    onClick={handleDownload}
                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                  >
                    <Icon name="Download" className="mr-2 h-4 w-4" /> 下载 .md 文件
                  </button>
                </div>
             </div>

             <div className="bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-200">
                <div className="bg-gray-50 px-8 py-4 border-b border-gray-200 flex items-center text-gray-500 text-sm">
                   <Icon name="CheckCircle2" className="text-green-500 mr-2" size={18} />
                   生成成功 | {selectedTemplate?.name} | {new Date().toLocaleDateString()}
                </div>
                <div className="p-8 md:p-12 prose prose-blue max-w-none text-gray-800">
                   {/* We use ReactMarkdown to render the Gemini output which is usually Markdown */}
                   <ReactMarkdown>{generatedContent}</ReactMarkdown>
                </div>
             </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
};

export default App;
