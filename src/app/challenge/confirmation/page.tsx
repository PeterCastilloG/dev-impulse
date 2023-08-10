import Confirmation from "@/modules/confirmation/Confirmation";
import { confirmationPageContent } from "@/modules/confirmation/services/confirmation.services";
import { useSession } from "@/shared/hooks/useSession";
import { redirect } from "next/navigation";

export default async function Page({
    searchParams,
}: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {

    if (!searchParams?.orderId) redirect("/challenge")

    const { user } = await useSession();

    const configureContentPage = await confirmationPageContent({
        user_id: user.info.userId,
        user_token: user.token,
        orderId: searchParams.orderId as string
    });

    if (configureContentPage.successPurchase) return <Confirmation confirmationPage={configureContentPage} />
}