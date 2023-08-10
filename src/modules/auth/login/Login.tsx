"use client";
import Login from "./components/login/Login";
import Error from "./components/error/Error";
import Load from "./components/load/Load";
import { ILogin } from "./interfaces/login.interfaces";
import { useState } from "react";
import { getSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [state, setState] = useState<"LOGIN" | "LOAD" | "ERROR">("LOGIN");

  const handleUserLogIn = async (userInfo: ILogin) => {
    setState("LOAD");
    const response = await signIn("credentials", {
      ...userInfo,
      redirect: false,
    });
    setState("LOAD");
    if (response && response.error) {
      setState("ERROR");
    } else {
      const session = await getSession();
      if (session) {
        if (session.user.changePassword) {
          router.push("/r/change-password");
        } else {
          router.push("/challenge");
        }
      }
    }
  };

  return (
    <>
      {
        {
          LOGIN: <Login handleUserLogIn={handleUserLogIn} />,
          ERROR: <Error setState={setState} />,
          LOAD: <Load />,
        }[state]
      }
    </>
  );
}
