<p align="center"><img src="assets/covers/26-ContractAI.jpg" alt="智律合同 项目封面" width="100%"></p>

<h1 align="center">智律 ContractAI</h1>

<p align="center">选模板、填要素、生成合同草稿的多语言 AI 合同工具</p>

## 简介

把常见合同拆成「模板 + 关键要素」，用户选模板、补字段，AI 生成草稿并支持中英等多语言输出。定位是提高起草效率，不替代律师审核。

## 功能

- **模板选择**：按合同类型挑结构，减少从零起草
- **要素填写**：主体、金额、期限、违约条款等逐项录入
- **AI 生成**：调用 Gemini 生成正文，保留条款结构
- **多语言**：同一份要素可输出不同语言版本
- **导出**：生成结果可直接预览与导出

## 技术栈

React · TypeScript · Gemini API

## 快速开始

```bash
git clone https://github.com/aiyangdie/ContractAI.git
cd ContractAI
npm install
```

配置 API Key：

```bash
# .env 中填入 Gemini API Key
```

```bash
npm run dev       # 开发模式，默认端口 3000
npm run build     # 生产构建
npm run preview   # 预览构建结果
```

## 项目结构

```
src/            页面与组件
src/lib/        模型调用与提示词
public/         静态资源
```

## 说明

生成结果仅供参考，正式签署前请由专业律师审阅。

## 许可证

仓库未附 LICENSE 文件，使用与分发请先联系作者确认。
