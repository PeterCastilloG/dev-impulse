import AuthLayout from "@/modules/auth/Auth";

export default function Layout({children}:{children: React.ReactNode;}){
    return <AuthLayout>{children}</AuthLayout>
}