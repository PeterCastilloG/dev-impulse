
'use client'
import { IConfirmationContentPage } from "./interfaces/confirmation.interfaces"
import Icon from "@/shared/components/icon/Icon"
import styles from "./Confirmation.module.scss"
import Credentials from "@/shared/components/credentials/Credentials"
import Link from "next/link"

export default function Confirmation({ confirmationPage }: { confirmationPage: IConfirmationContentPage }) {
    const { title, icon, label, credenciales, link } = confirmationPage
    return <div className={styles.container}>
        <span className={styles.title}>{title}</span>
        <div className={styles.content}>
            <Icon icon={icon} />
            <span>{label}</span>
        </div>
        {credenciales && <Credentials data={credenciales} />}
        {link && <Link href={link.link}>{link.linklabel}</Link>}
    </div>
}