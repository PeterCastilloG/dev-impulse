import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ChangePasswordPage from "@/modules/auth/change-password/ChangePassword";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ChangePassword(){
    const session = await getServerSession(authOptions)
    if(!session){
        redirect("/r/login")
    }
    if(!session.user.changePassword){
        redirect("/challenge")
    }
    return <ChangePasswordPage session={session}/>
}