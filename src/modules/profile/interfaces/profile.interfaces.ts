export interface IProfileContentPage {
  title: string;
  fields: Array<InputField | SelectField>;
  verifiedState: {
    label: string;
    value: string;
    state: 1 | 2;
  };
  button: {
    value: string;
  };
}

export interface InputField {
  type: "INPUT";
  variant: "text" | "number" | "date";
  id: string;
  label: string;
  name: string;
  value: string;
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
  required: boolean;
  onClickEdit: boolean;
}

export interface SelectField {
  type: "SELECT";
  id: string;
  label: string;
  name: string;
  value: string;
  placeholder: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  disabled: boolean;
  readonly: boolean;
  required: boolean;
  onClickEdit: boolean;
}
