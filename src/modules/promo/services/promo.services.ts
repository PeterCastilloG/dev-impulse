import { httpRequest } from "@/shared/lib/build-request";

export const promoPageContent = async ({
  user_id,
  user_token,
}: {
  user_id: number;
  user_token: string;
}) => {
  const { data } = await httpRequest({
    service: "PAGE_CONTENT",
    url: "promo",
    headers: {
      user_id,
      user_token,
    },
  });
  return data;
};

export const validateCupon = async ({
  user_id,
  user_token,
  info,
}: {
  user_id: number;
  user_token: string;
  info: Record<string, string | number>;
}) => {
  const { success, data, kindMessage } = await httpRequest({
    service: "PAGE_CONTENT",
    url: "promo/verify",
    method: 'POST',
    headers: {
      user_id,
      user_token,
    },
    body: {
      ...info,
    },
  });
  return { success, data, kindMessage };
};
