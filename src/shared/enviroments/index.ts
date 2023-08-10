import { IAppTraderServices } from "../interfaces/appTraderServices";
  
export const environment: Record<IAppTraderServices, string> = {
  EXXICAPITAL_DEFAULT: "https://testgold.impulseworld.pro",
  EXXICAPITAL_GEO_API: "https://testgold.impulseworld.pro/api/geo/v1",
  EXXICAPITAL_SECURITY_CUSTOMER_API: "https://testgold.impulseworld.pro/api/security-customer/v1",
  EXXICAPITAL_FACEBOOK_ID: "ENV_EXXICAPITAL_FACEBOOK_ID",
  EXXICAPITAL_GOOGLE_ID: "ENV_EXXICAPITAL_GOOGLE_ID",
  EXXICAPITAL_CUSTOMER_API: "https://testgold.impulseworld.pro/api/exx-customer/v1",
  EXXICAPITAL_BASE_URL: "https://testgold.impulseworld.pro",
  VISA_URL_JS: "ENV_VISA_URL_JS",
  PAGE_CONTENT: process.env.APP_TRADER_BFF ?? "https://dev.impulseworld.pro/bff/customer",
};