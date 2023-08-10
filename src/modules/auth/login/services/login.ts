import { httpRequest } from "@/shared/lib/build-request";

export async function login({
  email,
  password,
}: {
  email: number;
  password: string;
}) {
  const { success, token, changePassword, info, applied } = await httpRequest({
    url: "session/login",
    service: "EXXICAPITAL_CUSTOMER_API",
    body: {
      email,
      password,
    },
    method: "POST",
  });
  return { success, token, changePassword, info, applied };
}
