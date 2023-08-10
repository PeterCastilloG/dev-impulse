import { httpRequest } from "@/shared/lib/build-request";

export async function register({
  address,
  city,
  country,
  email,
  firstName,
  identification,
  lastName,
  mobile,
  sex,
  sponsorCode,
}: {
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
}) {
  const { success, data } = await httpRequest({
    url: "customers/prop-trading/suscriptors",
    service: "EXXICAPITAL_CUSTOMER_API",
    body: {
      firstName,
      lastName,
      identification,
      email,
      country,
      city,
      address,
      sex,
      mobile,
      sponsorCode,
    },
    method: "POST",
  });
  return { success, data };
}


export async function countries() {
  const { success, data } = await httpRequest({
    url: "countries",
    service: "EXXICAPITAL_GEO_API",
  });
  return { success, data };
}