export interface IInvoiceContentPage {
  challengeOrderId: number;
  title: string;
  label: string;
  description: Array<ILetter>;
  invoiceDetailts: Array<Array<IDetail>>;
  paymentMethods: {
    title: string;
    methods: Array<{
      currencie: string;
      currencieImg: string;
      processors: Array<IProcessor>;
    }>;
  };
  extrainfo: string;
  invoiceInfo: IInvoiceInfo;
}

export interface IProcessor {
  label: string;
  code: string;
  img: string;
  paymenteProcessor: string;
  currencyCode?: string;
  currencyToken?: string;
}
export interface ILetter {
  letter: string;
  bold?: boolean;
}

export interface IDetail {
  propertie: string;
  value: string;
  variant?: boolean;
}

export interface IInvoiceInfo {
  labelInvoice: string;
  title: string;
  payWith: string;
  img: string;
  code: string;
  properties: Array<Array<IDetail>>;
  warns?: Array<IProcessorWarn>;
  extraInfo?: Array<string>;
  soporte?: Array<{
    label: string;
    img: string;
    currencie: string;
  }>;
  verify: {
    text: string;
  };
  checkpage?: {
    text: string;
    link: string;
  };
  timer?: {
    label: string;
    hours: number;
  };
  qr?: IQrCode;
  extraInfWithLinks?: Array<Array<{ text: string; redirect?: string }>>;
}
export interface IProcessorWarn {
  title: string;
  content: string;
}
export interface IQrCode {
  code: string;
  img: string;
}
