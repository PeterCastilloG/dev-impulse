import styles from "./tournamentSetup.module.scss"
import Image from "next/image"
import Example from '@/modules/tournamentSetup/assets/Vector.png'
import Example2 from '@/modules/tournamentSetup/assets/Account circle.png'
import { ITournamentSetup } from "./interfaces/tournamentSetup.interfaces"
import ImageSave from "./components/ImageSave"

export default function TournamentSetup({ props }: { props: ITournamentSetup }) {

    return (
        <section className={ styles.section }>
            <p className={ styles.p }>
                <strong>Configuración del torneo</strong>
            </p>
            {/* <div className={styles.dataPrincipal}>            */}
                <div className={styles.container}>
                    <div className={styles.containerDiv}>
                        <div className={styles.content} >
                            <label htmlFor="imagePrincipal">{ props.descriptionImage }</label>
                            <ImageSave/>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.separador}>
                                <label htmlFor="username">{ props.descriptionInput }</label>
                                <input type="text" name="username" placeholder="ingresa tu nombre de usuario" className={styles.input}/>
                            </div>
                            <div className={styles.separador}>
                                <p>{ props.descriptionAvatar}</p>
                                <div  className={styles.provisional}>
                                    {
                                        props.numberOfAvatars.map(e => (
                                        <div className={styles.person} key={e}>
                                            <Image src={Example2} alt={`avatar${e}`} />
                                        </div> ))
                                    }
                                </div>
                            </div>
                        </div>                
                    </div>
                    <div className={styles.condition} >
                        <input type="checkbox" name="check" className={styles['#confirmation']}/>
                        <label htmlFor="check">{ props.validationText }</label>
                    </div>
                    <button className={styles.button} >{ props.btnText }</button>
                </div>
            {/* </div> */}
        </section>
    )
}
