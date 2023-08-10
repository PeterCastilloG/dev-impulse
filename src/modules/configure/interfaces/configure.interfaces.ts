export interface IConfigureContentPage {
  title: string;
  defaultChallenge: IChallenge;
  typeProducts: { label: string; items: Array<ITypeProduct> };
  modalities: { label: string; items: Array<IModality> };
  challenges: { label: string; items: Array<IChallenge> };
  cuponInput: ICupon;
  swing: ISwing;
  term_conditions: Array<ITerm>;
  buyChallengeBtn: {
    value: string;
  };
}

export interface ISwing {
  label: string;
  true: {
    label: string;
  };
  false: {
    label: string;
  };
}
export interface ICupon {
  label: string;
  id: string;
  name: string;
  placeholader: string;
}

export interface ITerm {
  id: string;
  name: string;
  defaultValue: boolean;
  required: true;
  label: Array<{
    letter: string;
    link?: {
      bold: boolean;
      redirect: string;
    };
  }>;
}
export interface ITypeProduct {
  typeProductId: number;
  typeProductName: string;
  typeProductImg: string;
  showImg: boolean;
}

export interface IModality {
  typeProductId: number;
  typeModalityId: number;
  typeModalityName: string;
}

export interface IChallenge {
  balance: number;
  label: string;
  typeProductId: number;
  typeModalityId: number;
  challengeId: number;
  detailsChallenge: Array<{ label: string; info: string }>;
  balanceLabel: string;
  amount: {
    price: number;
    priceLabel: string;
    priceValue: string;
  };
  swing?: {
    priceValue: string;
  };
}
