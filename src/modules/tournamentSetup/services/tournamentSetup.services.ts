import { httpRequest } from "@/shared/lib/build-request";

export async function tournamentSetupPageContent({
  user_id,
  user_token,
}: {
  user_id: number;
  user_token: string;
}) {
  const { data } = await httpRequest({
    service: "PAGE_CONTENT",
    url: "tournamentSetup",
    headers: {
      user_id,
      user_token,
    },
  });

  return { data };
}
