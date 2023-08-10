"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Recovery from "./components/recovery/Recovery";
import Error from "./components/error/Error";
import Load from "./components/load/Load";
import { recobery } from "./services/revocery.services";

export default function RecoveryPassword() {
  const router = useRouter();
  const [state, setState] = useState<"RECOVERY" | "LOAD" | "ERROR">("RECOVERY");

  const handleUserRecovery = async (userInfo: string) => {
    setState("LOAD");
    await recobery({email: userInfo})
    setState("ERROR")
  };

  return (
    <>
      {
        {
          RECOVERY: <Recovery handleUserRecovery={handleUserRecovery}/>,
          ERROR: <Error setState={setState}/>,
          LOAD: <Load />,
        }[state]
      }
    </>
  );
}
