import { useSession } from "@/shared/hooks/useSession";
import { ICompleteRegisterContentPage } from "@/modules/complete-register/interfaces/complete-register.interfaces";
import CompleteRegisterPage from "@/modules/complete-register/Complete-register";
import { completeRegisterPageContent } from "@/modules/complete-register/services/completeRegister.services";

export default async function Page() {
  const { user } = await useSession();

  const { data }: { data: ICompleteRegisterContentPage } = await completeRegisterPageContent({
    user_id: user.info.userId,
    user_token: user.token
  })

  return <CompleteRegisterPage props={ data }/>;
}
