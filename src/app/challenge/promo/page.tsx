import { useSession } from "@/shared/hooks/useSession";
import { promoPageContent } from "@/modules/promo/services/promo.services";
import PromePage from "@/modules/promo/Promo";


export default async function Page() {
  const { user } = await useSession();

  const  promoContentPage  = await promoPageContent({
    user_id: user.info.customerId,
    user_token: user.token,
  });

  return (
    <PromePage
      promoPage={promoContentPage}
      userAuth={{ user_id: user.info.userId, user_token: user.token }}
    />
  );
}
