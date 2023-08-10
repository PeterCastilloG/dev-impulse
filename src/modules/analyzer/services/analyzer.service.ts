import { httpRequest } from "@/shared/lib/build-request";

export const analyzerPageContent = async ({
  user_id,
  user_token,
  orderId,
}: {
  user_id: number;
  user_token: string;
  orderId?: string;
}) => {
  const { data } = await httpRequest({
    service: "PAGE_CONTENT",
    url: "analyzer",
    headers: {
      user_id,
      user_token,
    },
    params: { orderId },
  });
  return data;
};

export const challengeOrderExtension = async ({
  user_id,
  user_token,
  challengeOrderExtensionId,
  orderId,
}: {
  user_id: number;
  user_token: string;
  challengeOrderExtensionId: number;
  orderId: string;
}) => {
  const { success, data, kindMessage } = await httpRequest({
    service: "PAGE_CONTENT",
    url: "analyzer/challenge-order",
    method: "POST",
    headers: {
      user_id,
      user_token,
    },
    body: {
      challengeId: challengeOrderExtensionId,
      orderId,
      currency: "USD",
      platform: "MT4",
      risk: "Agresivo",
    },
  });

  return { success, data, kindMessage };
};
