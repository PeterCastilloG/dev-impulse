import { httpRequest } from "@/shared/lib/build-request";

export const invoicePageContent = async ({
  user_id,
  user_token,
  challengeOrderId,
}: {
  user_id: number;
  user_token: string;
  challengeOrderId: number;
}) => {
  const { data } = await httpRequest({
    service: "PAGE_CONTENT",
    url: "invoice/" + challengeOrderId,
    headers: {
      user_id,
      user_token,
    },
  });
  return data;
};

export const createInvoice = async ({
  user_id,
  user_token,
  challengeOrderId,
  paymentProcessor,
  currencyCode,
  currencyToken,
}: {
  user_id: number;
  user_token: string;
  challengeOrderId: number;
  paymentProcessor: string;
  currencyCode?: string;
  currencyToken?: string;
}) => {
  const { success, data, kindMessage } = await httpRequest({
    service: "PAGE_CONTENT",
    url: "invoice/create",
    method: "POST",
    headers: {
      user_id,
      user_token,
    },
    body: {
      challengeOrderId,
      paymentProcessor,
      currencyCode,
      currencyToken
    },
  });
  return { success, data, kindMessage };
};

export async function verifyInvoice({
  user_id,
  user_token,
  challengeOrderId,
}: {
  user_id: number;
  user_token: string;
  challengeOrderId: number;
}) {
  const response = await httpRequest({
    service: "PAGE_CONTENT",
    url: "invoice/verify/" + challengeOrderId,
    headers: {
      user_id,
      user_token,
    },
  });
  return response;
}