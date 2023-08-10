export interface ICompleteRegisterContentPage {
  personalData: {
    title: string;
    fields: Array<InputField | SelectFiled>;
  };
  financial: {
    title: string;
    fields: Array<InputField | SelectFiled>;
  };
  profileAcount:  {
    title: string;
    fields: Array<InputField | SelectFiled>;
  };
}

interface InputField {
  label: string;
  id: string;
  name: string;
  value: string;
  placeholder: string;
  type: "INPUT";
  disable?: boolean;
  readonly?: boolean;
}

interface SelectFiled {
  label: string;
  id: string;
  name: string;
  value: string;
  placeholder: string;
  type: "SELECT";
  options: Array<{
    value: string;
    label: string;
  }>;
  disable?: boolean;
  readonly?: boolean;
}
