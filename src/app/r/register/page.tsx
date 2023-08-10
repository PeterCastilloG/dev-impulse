import RegisterPage from "@/modules/auth/register/Register"
import { countries } from "@/modules/auth/register/services/register.services"

export default async function Page() {
    const { success, data } = await countries()
    const result = success ? data.items ?? [] : []
    return (
      <RegisterPage countries={ result }/>
    )
  }
  