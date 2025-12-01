import { ContractCategory, TemplateDefinition } from './types';

export const SUPPORTED_LANGUAGES = [
  { code: 'zh-CN', name: '简体中文 (Chinese Simplified)' },
  { code: 'en-US', name: '英语 (English)' },
  { code: 'ug-CN', name: '维吾尔语 (Uyghur)' },
  { code: 'es-ES', name: '西班牙语 (Spanish)' },
  { code: 'fr-FR', name: '法语 (French)' },
  { code: 'de-DE', name: '德语 (German)' },
  { code: 'ja-JP', name: '日语 (Japanese)' },
  { code: 'ko-KR', name: '韩语 (Korean)' },
  { code: 'ru-RU', name: '俄语 (Russian)' },
  { code: 'ar-SA', name: '阿拉伯语 (Arabic)' },
  { code: 'pt-BR', name: '葡萄牙语 (Portuguese)' },
];

export const CONTRACT_TEMPLATES: TemplateDefinition[] = [
  {
    id: ContractCategory.EMPLOYMENT,
    name: "劳动雇佣合同",
    icon: "Briefcase",
    description: "适用于公司与员工之间的全职、兼职或实习协议。",
    fields: [
      { key: "partyA", label: "甲方 (雇主名称)", placeholder: "例如：某某科技有限公司", type: "text", required: true },
      { key: "partyB", label: "乙方 (员工姓名)", placeholder: "例如：张三", type: "text", required: true },
      { key: "position", label: "职位名称", placeholder: "例如：高级软件工程师", type: "text", required: true },
      { key: "salary", label: "月薪资 (元)", placeholder: "20000", type: "currency", required: true },
      { key: "startDate", label: "入职日期", placeholder: "", type: "date", required: true },
      { key: "probation", label: "试用期 (月)", placeholder: "3", type: "number" }
    ]
  },
  {
    id: ContractCategory.RENTAL,
    name: "房屋租赁合同",
    icon: "Home",
    description: "适用于房东与租客之间的住宅或商铺租赁。",
    fields: [
      { key: "partyA", label: "出租方 (房东)", placeholder: "姓名或公司", type: "text", required: true },
      { key: "partyB", label: "承租方 (租客)", placeholder: "姓名或公司", type: "text", required: true },
      { key: "address", label: "房屋地址", placeholder: "详细地址", type: "text", required: true },
      { key: "rentAmount", label: "月租金", placeholder: "5000", type: "currency", required: true },
      { key: "duration", label: "租赁期限 (月)", placeholder: "12", type: "number", required: true },
      { key: "deposit", label: "押金金额", placeholder: "5000", type: "currency" }
    ]
  },
  {
    id: ContractCategory.LOAN,
    name: "借款/欠条合同",
    icon: "Banknote",
    description: "适用于个人或企业之间的资金借贷关系，明确利息与还款。",
    fields: [
      { key: "partyA", label: "出借人", placeholder: "姓名", type: "text", required: true },
      { key: "partyB", label: "借款人", placeholder: "姓名", type: "text", required: true },
      { key: "amount", label: "借款金额", placeholder: "100000", type: "currency", required: true },
      { key: "interestRate", label: "年利率 (%)", placeholder: "5", type: "number" },
      { key: "repaymentDate", label: "还款截止日期", placeholder: "", type: "date", required: true },
      { key: "purpose", label: "借款用途", placeholder: "例如：资金周转", type: "text" }
    ]
  },
  {
    id: ContractCategory.NDA,
    name: "保密协议 (NDA)",
    icon: "Lock",
    description: "保护商业机密，防止信息泄露。",
    fields: [
      { key: "partyA", label: "披露方", placeholder: "公司或个人", type: "text", required: true },
      { key: "partyB", label: "接收方", placeholder: "公司或个人", type: "text", required: true },
      { key: "project", label: "涉及项目/信息", placeholder: "例如：Project X 源代码", type: "text", required: true },
      { key: "term", label: "保密期限 (年)", placeholder: "5", type: "number", required: true },
      { key: "penalty", label: "违约金", placeholder: "500000", type: "currency" }
    ]
  },
  {
    id: ContractCategory.SALES,
    name: "产品销售合同",
    icon: "ShoppingCart",
    description: "适用于商品买卖，规定交付、付款及质保条款。",
    fields: [
      { key: "partyA", label: "卖方", placeholder: "公司名称", type: "text", required: true },
      { key: "partyB", label: "买方", placeholder: "公司名称", type: "text", required: true },
      { key: "productName", label: "产品名称", placeholder: "例如：工业机器人臂", type: "text", required: true },
      { key: "totalPrice", label: "合同总金额", placeholder: "1000000", type: "currency", required: true },
      { key: "deliveryDate", label: "交付日期", placeholder: "", type: "date" },
      { key: "warranty", label: "质保期 (月)", placeholder: "12", type: "number" }
    ]
  },
  {
    id: ContractCategory.SERVICE,
    name: "通用服务/合作协议",
    icon: "Handshake",
    description: "适用于咨询、外包、软件开发等一般性服务合作。",
    fields: [
      { key: "partyA", label: "委托方 (甲方)", placeholder: "客户", type: "text", required: true },
      { key: "partyB", label: "服务方 (乙方)", placeholder: "服务商", type: "text", required: true },
      { key: "serviceScope", label: "服务内容", placeholder: "简要描述服务范围", type: "textarea", required: true },
      { key: "fee", label: "服务费用", placeholder: "金额", type: "currency", required: true },
      { key: "timeline", label: "项目周期", placeholder: "例如：3个月", type: "text" }
    ]
  }
];
