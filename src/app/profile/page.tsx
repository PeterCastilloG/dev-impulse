import { useSession } from "@/shared/hooks/useSession";
import { profilePageContent } from "@/modules/profile/services/profile.services";
import ProfilePage from "@/modules/profile/Profile";

export default async function Page() {
  const { user } = await useSession();

  const profileContentPage = await profilePageContent({
    user_id: user.info.customerId,
    user_token: user.token,
  });

  // if(user.info.registrationStatus === 0){
  //   redirect("/complete-register")
  // }

  return <ProfilePage profilePage={profileContentPage} />;
}
