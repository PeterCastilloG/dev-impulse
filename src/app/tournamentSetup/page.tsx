import TournamentSetup from "@/modules/tournamentSetup/TournamentSetup";
import { ITournamentSetup } from "@/modules/tournamentSetup/interfaces/tournamentSetup.interfaces";
import { tournamentSetupPageContent } from "@/modules/tournamentSetup/services/tournamentSetup.services";
import { useSession } from "@/shared/hooks/useSession";

export default async function Page() {

  const { user } = await useSession()

  const { data }: { data: ITournamentSetup } = await tournamentSetupPageContent({
    user_id: user.info.userId,
    user_token: user.token
  })
  
  return <TournamentSetup props={ data } />

}