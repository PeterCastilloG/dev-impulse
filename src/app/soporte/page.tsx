import SoportePage from "@/modules/soporte/Soporte";
import { ISoporte } from "@/modules/soporte/interfaces/soporte.interfaces";
import { soportePageContent } from "@/modules/soporte/services/soporte.services";
import { useSession } from "@/shared/hooks/useSession";

export default async function Page(){
    
    const { user } = await useSession()

    const { data }: { data: ISoporte } = await soportePageContent({ 
        user_id: user.info.userId, 
        user_token: user.token
    })

    return <SoportePage  props={ data }/>
}