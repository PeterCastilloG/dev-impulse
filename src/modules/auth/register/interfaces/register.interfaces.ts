export interface IRegister {
  firstName: string;
  lastName: string;
  identification: string;
  email: string;
  country: string;
  city: string;
  address: string;
  sex: number;
  mobile: string;
  sponsorCode: string;
}

export interface ICountry {
  countryId: string;
  phonePrefix: string;
  name: string;
  active: number;
}
