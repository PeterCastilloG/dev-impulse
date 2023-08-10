import { httpRequest } from "@/shared/lib/build-request";

export const challengePageContent = async ({
  user_id,
  user_token,
}: {
  user_id: number;
  user_token: string;
}) => {
  const { data } = await httpRequest({
    service: "PAGE_CONTENT",
    url: "challenge",
    headers: {
      user_id,
      user_token,
    },
  });
  return data;
};
