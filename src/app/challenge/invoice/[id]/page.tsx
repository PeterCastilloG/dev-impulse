import { invoicePageContent } from "@/modules/invoice/services/invoice.services";
import { useSession } from "@/shared/hooks/useSession";
import InvoicePage from "@/modules/invoice/Invoice";

export default async function Page({ params }: { params: { id: number } }) {
  const { user } = await useSession();

  const  InvoiceContentPage = await invoicePageContent({
    user_id: user.info.userId,
    user_token: user.token,
    challengeOrderId: params.id,
  });

  return (
    <InvoicePage
      invoicePage={InvoiceContentPage}
      userAuth={{ user_id: user.info.userId, user_token: user.token }}
    />
  );
}
