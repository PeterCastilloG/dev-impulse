import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export async function useSession(): Promise<Session> {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/r/login");
  } else {
    if (session.user.changePassword) {
      redirect("/r/change-password");
    } else {
      return session;
    }
  }
}
