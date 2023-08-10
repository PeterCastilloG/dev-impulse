import { httpRequest } from "@/shared/lib/build-request";

export async function configurePageContent({
  user_id,
  user_token,
}: {
  user_id: number;
  user_token: string;
}) {
  const { data } = await httpRequest({
    service: "PAGE_CONTENT",
    url: "configure",
    headers: {
      user_id,
      user_token,
    },
  });

  return data 
}

export const challengeOrder = async ({
  user_id,
  user_token,
  challengeId,
  acceptCancelation,
  acceptTerms,
  cupon,
  isSwing,
}: {
  user_id: number;
  user_token: string;
  challengeId: number;
  acceptCancelation: boolean;
  acceptTerms: boolean;
  cupon?: string;
  isSwing?: boolean;
}) => {
  const { success, data, kindMessage } = await httpRequest({
    service: "PAGE_CONTENT",
    url: "configure/challenge-order",
    method: "POST",
    headers: {
      user_id,
      user_token,
    },
    body: {
      challengeId,
      acceptCancelation,
      acceptTerms,
      risk: "Agresivo",
      platform: "MT4",
      currency: "USD",
      cupon,
      isSwing,
    },
  });

  return { success, data, kindMessage };
};

export const validateCupon = async ({
  user_id,
  user_token,
  cupon,
}: {
  user_id: number;
  user_token: string;
  cupon: string;
}) => {
  const { success, data, kindMessage } = await httpRequest({
    service: "PAGE_CONTENT",
    url: "configure/cupon/" + cupon,
    headers: {
      user_id,
      user_token,
    },
  });

  return { success };
};
