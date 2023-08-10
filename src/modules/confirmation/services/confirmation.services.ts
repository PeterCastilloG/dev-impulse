import { httpRequest } from "@/shared/lib/build-request";

export async function confirmationPageContent({
  user_id,
  user_token,
  orderId,
}: {
  user_id: number;
  user_token: string;
  orderId: string;
}) {
  const { data } = await httpRequest({
    service: "PAGE_CONTENT",
    url: "confirmation/" + orderId,
    headers: {
      user_id,
      user_token,
    },
  });

  return data;
}