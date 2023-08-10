import { httpRequest } from "@/shared/lib/build-request";

export async function changePassword({
  newPassword,
  oldPassword,
  user_id,
  user_token
}: {
  newPassword: string;
  oldPassword: string;
  user_id:number
  user_token: string
}) {
  const { success, token, changePassword, info, applied } = await httpRequest({
    url: `pass/change/${user_id}`,
    service: "EXXICAPITAL_SECURITY_CUSTOMER_API",
    headers: {
        user_id,
        user_token,
    },
    body: {
      newPassword,
      oldPassword,
    },
    method: "PATCH",
  });
  return { success, token, changePassword, info, applied };
}
