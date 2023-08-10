import { httpRequest } from "@/shared/lib/build-request";

export async function ordersPageContent({
  user_id,
  user_token,
  page,
}: {
  user_id: number;
  user_token: string;
  page?: string;
}) {
  const { data } = await httpRequest({
    service: "PAGE_CONTENT",
    url: "orders",
    headers: {
      user_id,
      user_token,
    },
    params: { page } ,
  });

  return data;
}

export async function verifyInvoiceChallengeOrder({
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
    url: "orders/verify/" + challengeOrderId,
    headers: {
      user_id,
      user_token,
    },
  });
  return response;
}
