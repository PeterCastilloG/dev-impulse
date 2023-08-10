"use client";
import Error from "./components/error/Error";
import Load from "./components/load/Load";
import Change from "./components/change/Change";
import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { IChangePassword } from "./interfaces/changepass.services";
import { changePassword } from "./services/changepass.services";
import { Session } from "next-auth";

export default function ChangePasswordPage({session}:{session: Session}) {
  const [state, setState] = useState<"CHANGE" | "LOAD" | "ERROR">("CHANGE");
  
  const handleUserChangePass = async (userInfo: IChangePassword) => {
    setState("LOAD");
    if (session) {
      const response = await changePassword({
        newPassword: userInfo.newpasswordone,
        oldPassword: userInfo.password,
        user_id: session.user.info.userId,
        user_token: session.user.token
      });
      if (response.success) {
        signOut();
      } else {
        setState("ERROR");
      }
    }
  };

  return (
    <>
      {
        {
          CHANGE: <Change handleUserChangaPass={handleUserChangePass} />,
          ERROR: <Error setState={setState} />,
          LOAD: <Load />,
        }[state]
      }
    </>
  );
}
