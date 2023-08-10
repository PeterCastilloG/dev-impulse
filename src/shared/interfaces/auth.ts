import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";

export interface UserAuth {
  user_id: number,
  user_token: string
}
export interface User {
  success: boolean;
  token: string;
  changePassword: boolean;
  info: {
    userId: number;
    profileId: number;
    customerId: number;
    firstName: string;
    lastName: string;
    sponsorCode: string;
    partnerCode: string | null;
    registrationStatus: number;
    verifiedMobile: number;
    mobile: number;
    hasDemoAccount: number;
    hasRealAccount: number;
    sex: number;
    ibType: string;
    ibGoal: string;
  };
  applied: {
    email: string;
    appId: string;
  };
}

declare module "next-auth" {
  interface Session  {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    success: boolean;
    token: string;
    changePassword: boolean;
    info: {
      userId: number;
      profileId: number;
      customerId: number;
      firstName: string;
      lastName: string;
      sponsorCode: string;
      partnerCode: string | null;
      registrationStatus: number;
      verifiedMobile: number;
      mobile: number;
      hasDemoAccount: number;
      hasRealAccount: number;
      sex: number;
      ibType: string;
      ibGoal: string;
    };
    applied: {
      email: string;
      appId: string;
    };
  }
}
