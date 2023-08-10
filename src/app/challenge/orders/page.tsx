import { useSession } from "@/shared/hooks/useSession";
import { ordersPageContent } from "@/modules/orders/services/orders.services";
import OrdersPage from "@/modules/orders/Orders";

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { user } = await useSession();

  const ordersContentPage = await ordersPageContent({
    user_id: user.info.userId,
    user_token: user.token,
    page: searchParams?.page as string,
  });

  return (
    <OrdersPage
      ordersPage={ordersContentPage}
      userAuth={{
        user_id: user.info.userId,
        user_token: user.token,
      }}
      currentPage={searchParams?.page as string}
    />
  );
}
