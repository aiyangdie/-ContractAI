<div align="center">

# ⚖️ 智律 ContractAI

**AI 智能合同生成器 — 全自动 · 多语言 · 专业级法律文档**

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
<img src="https://img.shields.io/badge/Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white" alt="Gemini"/>
<img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind"/>

</div>

---

## 📌 项目简介

智律 ContractAI 是一款基于 Google Gemini 大模型的智能合同生成器。用户选择合同类型、填写关键信息、指定输出语言，即可在数秒内获得一份结构完整、术语专业的法律合同。支持 6 大合同模板和 11 种语言输出，覆盖从商业合作到个人事务的全场景需求。

## ✨ 核心特性

- 🤖 **Gemini AI 驱动** — 基于 Gemini 2.5 Flash 模型，低温度参数确保输出稳定专业
- 📝 **6 大合同模板** — 劳动雇佣 / 房屋租赁 / 借款欠条 / 保密协议 / 产品销售 / 服务合作
- 🌍 **11 种语言输出** — 中文、英语、维吾尔语、西班牙语、法语、德语、日语、韩语、俄语、阿拉伯语、葡萄牙语
- 📋 **动态表单引擎** — 根据合同类型自动生成对应字段，支持文本 / 数字 / 日期 / 金额 / 长文本
- 📄 **Markdown 渲染** — 生成结果实时渲染为格式化文档，支持一键复制与 `.md` 下载
- 🎯 **四步引导流程** — 选模板 → 填信息 → AI 生成 → 查看结果，交互清晰直观
- 🎨 **Tailwind 精美 UI** — 响应式布局，动画过渡，Lucide 图标体系
- ⚠️ **法律免责提示** — 页脚内置 AI 生成内容免责声明，提醒用户咨询专业律师

## 🛠️ 技术栈

| 类别 | 技术 |
|------|------|
| 前端框架 | React 19 + TypeScript |
| 构建工具 | Vite 6 |
| AI 模型 | Google Gemini 2.5 Flash (`@google/genai`) |
| 样式方案 | Tailwind CSS (CDN) |
| 图标库 | Lucide React |
| Markdown 渲染 | React Markdown |
| 字体 | Noto Sans SC (Google Fonts) |

## 🚀 快速开始

### 前置条件

- Node.js 18+
- Google Gemini API Key（[获取地址](https://aistudio.google.com/apikey)）

### 安装步骤

```bash
git clone https://github.com/yourusername/-ContractAI.git
cd -ContractAI
npm install
```

### 配置 API Key

在项目根目录创建 `.env.local` 文件：

```
GEMINI_API_KEY=your_gemini_api_key_here
```

### 运行命令

```bash
# 开发模式（默认端口 3000）
npm run dev

# 生产构建
npm run build

# 预览构建结果
npm run preview
```

## 📂 项目结构

```
-ContractAI/
├── App.tsx                    # 主应用组件（四步引导流程）
├── index.tsx                  # 应用入口
├── index.html                 # HTML 模板（Tailwind CDN + Import Map）
├── constants.ts               # 合同模板定义 + 支持语言列表
├── types.ts                   # TypeScript 类型定义
├── components/
│   ├── Header.tsx             # 顶部导航栏
│   ├── Footer.tsx             # 底部免责声明
│   └── Icon.tsx               # Lucide 图标映射组件
├── services/
│   └── geminiService.ts       # Gemini API 调用服务
├── vite.config.ts             # Vite 配置（环境变量注入）
├── tsconfig.json              # TypeScript 配置
├── package.json               # 项目依赖
└── metadata.json              # 应用元数据
```

## 🤝 贡献与许可证

欢迎提交 Issue 和 Pull Request 参与贡献！

> ⚠️ **免责声明**：本工具生成的合同仅供参考。AI 生成内容可能存在错误或不符合特定司法管辖区的法律规定。在签署任何具有法律约束力的文件之前，请务必咨询专业律师或法律顾问。
