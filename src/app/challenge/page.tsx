import { useSession } from "@/shared/hooks/useSession";
import { challengePageContent } from "@/modules/challenge/services/challenge.services";
import Challenge from "@/modules/challenge/Challenge";

export default async function Page() {
  
  const { user } = await useSession();

  const challengeContentPage = await challengePageContent({
    user_id: user.info.userId,
    user_token: user.token,
  });

  return <Challenge challengePage={challengeContentPage} />;
}
