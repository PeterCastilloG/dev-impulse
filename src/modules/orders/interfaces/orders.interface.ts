export interface IOrdersContentPage {
  title: string;
  description: string;
  challenOrderPropertie: Array<ChallengeOrderProperty>;
  challengeOrders: Array<ChallengeOrder>;
  pages: Array<number>
}

interface ChallengeOrderProperty {
  propertie: properties;
  label: string;
}
export interface ChallengeOrder {
  challengeOrderId: number;
  title: string;
  status: string;
  price: number;
  currency: string;
  createdAt: string;
  credentials: ICredentials;
}

export interface ICredentials {
  btnName: string;
  title: string;
  fields: Array<{ label: string; value: string }>;
}

type properties =
  | "challengeOrderId"
  | "title"
  | "status"
  | "price"
  | "currency"
  | "createdAt";
