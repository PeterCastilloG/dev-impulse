import { httpRequest } from "@/shared/lib/build-request";

export async function recobery({ email }: { email: string }) {
  const { success, data } = await httpRequest({
    url: "pass/reset/requester",
    service: "EXXICAPITAL_SECURITY_CUSTOMER_API",
    headers: {
        solution_id: "EXX"
    },
    body: {
        email
    },
    method: 'POST'
  });
  return { success, data };
}
