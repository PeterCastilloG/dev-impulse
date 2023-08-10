export interface IAnalyzerContentPage {
  userMessage: string;
  challengeOrder: IChallengeOrder;
  orders: Array<IOrder>;
  pageMessage: IPageMessage;
}

export interface IOrder {
  challengeOrderId: number;
  login: string;
  loginLabel: string;
  state: {
    status: string;
    fase?: string;
    back: string;
    color: string;
    icon: string;
  };
}
interface IChallengeOrder {
  challengeOrderId: number;
  orderId: string;
  challengeOrderInfo: IChallengeOrderInfo;
  extensionPacks?: IExtensionPacks;
  analyzer?: IAnalyzer;
}

export interface IChallengeOrderInfo {
  account: {
    accountLabel: string;
    accountNumber: string;
  };
  state: {
    status: string;
    fase?: string;
    back: string;
    color: string;
    icon: string;
  };
  credenciales: {
    title: string;
    btnName: string;
    fields: [
      {
        label: string;
        value: string;
      },
      {
        label: string;
        value: string;
      }
    ];
  };
}

export interface IExtensionPacks {
  icon: string;
  message: string;
  link?: string;
  packs: Array<{
    challengeId: number;
    price: number;
    packLabel: string;
  }>;
}

export interface IAnalyzer {
  resume: IAcountResume;
  progress: IAcountProgress;
  rules: IAcountRules;
  fase: IFase;
}

export interface IAcountResume {
  title: string;
  currentBalance: IResuemeItem;
  initialWeek: IResuemeItem;
  maximunWeek: IResuemeItem;
  initialDay: IResuemeItem;
  maximunDay: IResuemeItem;
}

interface IResuemeItem {
  label: string;
  value: number;
  percent?: string;
  goal?: boolean;
}

interface IAcountProgress {
  title: string;
  labels: number[];
  data: Array<IProgressItem>;
}

export interface IProgressItem {
  label: string;
  value: number[];
}

export interface IAcountRules {
  title: string;
  properties: Array<{
    propertie: string;
    label: string;
    responsive: boolean;
  }>;
  objects: Array<
    Record<
      string,
      {
        value: string;
        extra?: string;
        status?: boolean;
        icon?: string;
        color?: string;
      }
    >
  >;
}

export interface IFase {
  title: string;
  currentDay: number;
  lastDay: number;
  label: string;
}

export interface IPageMessage {
  title: string;
  content: string;
  reference: string;
}
