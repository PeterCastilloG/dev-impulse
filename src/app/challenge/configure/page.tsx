import { configurePageContent } from "@/modules/configure/services/configure.services";
import { useSession } from "@/shared/hooks/useSession";
import ConfigurePage from "@/modules/configure/Configure";

export default async function Page() {
  const { user } = await useSession();

  const configureContentPage = await configurePageContent({
    user_id: user.info.userId,
    user_token: user.token,
  });

  return (
    <ConfigurePage
      configurePage={configureContentPage}
      userAuth={{ user_id: user.info.userId, user_token: user.token }}
    />
  );
}
