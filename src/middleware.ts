export { default } from "next-auth/middleware"

export const config = { matcher: ["/","/challenge","/challenge/:path*"]}