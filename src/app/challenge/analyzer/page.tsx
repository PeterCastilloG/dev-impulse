import { useSession } from "@/shared/hooks/useSession";
import { analyzerPageContent } from "@/modules/analyzer/services/analyzer.service";
import AnalyzerPage from "@/modules/analyzer/Analyzer";
import NoAnalyze from "@/modules/analyzer/components/no-analyze/No-analyze";


export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {

  const { user } = await useSession();

  const analyzerContentPage = await analyzerPageContent({
    user_id: user.info.userId,
    user_token: user.token,
    orderId: searchParams?.orderId as string
  });

  if (!analyzerContentPage.orders.length || !analyzerContentPage.challengeOrder.challengeOrderId) return <NoAnalyze />;

  return (
    <AnalyzerPage
      analyzerPage={analyzerContentPage}
      userAuth={{ user_id: user.info.userId, user_token: user.token }}
    />
  );
}
