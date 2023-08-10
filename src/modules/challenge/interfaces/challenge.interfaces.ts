export interface IChallengeContentPage {
  title: string;
  icon: string;
  subTitle: string;
  mainInfo: Array<ILetter>;
  description: string;
  challengeInfo: Array<string>;
  challengeBtn: string;
  challengeOrders: Array<IChallengeOrder>;
}

export interface ILetter {
  letter: string;
  bold?: boolean;
}
export interface IChallengeOrder {
  fase: string;
  acount: {
    label: string;
    value: String;
  };
  orderState: {
    label: string;
    value: OrderState;
  };
  credentials: {
    btnName: string;
    title: string;
    fields: Array<{ label: string; value: string }>;
  };
  checkAnalyze: {
    label: string;
    challengeId: number;
  };
  analyzer: {
    stats: Array<IAnalyzerStat>;
    rules: {
      title: string;
      items: Array<IRuleItem>;
    };
  };
}

export type OrderState = "PAID" | "CREATED" | "PENDING";

interface IAnalyzerStat {
  label: string;
  value: string;
  percent: string;
  state: boolean;
  color: string
}

interface IRuleItem {
  label: string;
  percent: string;
  maxValue: number;
  currentValue: number;
  state: boolean;
  color: string
}
