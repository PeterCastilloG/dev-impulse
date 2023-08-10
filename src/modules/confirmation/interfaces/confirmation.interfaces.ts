export interface IConfirmationContentPage {
  title: string;
  icon: string;
  label: string;
  credenciales?: {
    btnName: string;
    title: string;
    fields: Array<{ label: string; value: string }>;
  };
  link?: {
    link: string
    linklabel: string
  }
  successPurchase: boolean 
}
