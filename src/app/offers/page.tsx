import { offersPageContent } from "@/modules/offers/services/offers.services";
import { useSession } from "@/shared/hooks/useSession";
import OffersPage from "@/modules/offers/Offers"

export default async function Page() {

  const { user } = await useSession();

  const offersContentPage = await offersPageContent({
    user_id: user.info.userId,
    user_token: user.token,
  });

  return (
    <OffersPage offersPage={offersContentPage}/>
  )
}
