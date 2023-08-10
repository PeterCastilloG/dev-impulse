"use client";
import { useState } from "react";
import { RegisterForm } from "./Components/register-form/register-form";
import Load from "./Components/load/Load";
import { ICountry, IRegister } from "./interfaces/register.interfaces";
import Error from "./Components/error/Error";
import Welcome from "./Components/welcome/Welcome";
import { register } from "./services/register.services";

export default function RegisterPage({ countries }: { countries: ICountry[] }) {
  const [state, setState] = useState<"REGISTER" | "LOAD" | "ERROR" | "SUCCES">(
    "REGISTER"
  );

  const handleUserRegister = async (userInfo: IRegister) => {
    setState("LOAD");
    const response = await register(userInfo);
    if (response.success) {
      setState("SUCCES");
    } else {
      setState("ERROR");
    }
  };
  return (
    <>
      {
        {
          REGISTER: (
            <RegisterForm
              handleUserRegister={handleUserRegister}
              countries={countries}
            />
          ),
          LOAD: <Load />,
          ERROR: <Error setState={setState} />,
          SUCCES: <Welcome />,
        }[state]
      }
    </>
  );
}
