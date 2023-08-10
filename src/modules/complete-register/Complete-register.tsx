"use client";
import styles from "./Complete-register.module.scss";
import DocumentImage from "@/modules/complete-register/components/documentImage/DocumentImage";
import { ICompleteRegisterContentPage } from "./interfaces/complete-register.interfaces";
import Image from "next/image";
import newImage from "@/modules/complete-register/assets/logo-pdf.png"

export default function CompleteRegisterPage({ props }: { props: ICompleteRegisterContentPage }) {
  return (
    <>
      <strong className={ styles.principal }>Completar datos de mi cuenta</strong>
      <div className={styles.container}>
        <div className={styles.inputs}>
          {/* <span className={styles.title}>{ personalData.title }</span> */}
          <span className={styles.title}>hello</span>
          <div className={styles.space}>
            {/* <div>
              <label htmlFor="">Telefono</label>
              <input type="text" placeholder="Ingresa tu teléfono" />
            </div>
            <div>
              <label htmlFor="">Nivel de estudio*</label>
              <select name="" id="">
                <option value="" hidden>
                  Seleccionar
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="">Situacion laboral*</label>
              <select name="" id="">
                <option value="" hidden>
                  Seleccionar
                </option>
              </select>
            </div> */}
            {/* {
              personalData.fields.map((item) => (
                <div key={item.id}>
                  <label htmlFor={ item.name }>{ item.label }</label>
                  {
                    item.type === "INPUT" 
                      ? ( <input type="text" placeholder={ item.placeholder } /> ) 
                      : ( 
                          <select name="" id="">
                            {
                              item.options.map((option) => (
                                <option value={ item.value } hidden>
                                  { option.value }
                                </option>
                              ))
                            }
                          </select> 
                        )
                  }
                </div>
              ))
            } */}
          </div>
        </div>
        <div className={styles.inputs}>
          <span className={styles.title}>Finanzas</span>
          <div className={styles.gap}>
            <div>
              <label htmlFor="">
                ¿Cuál es tu estimado ingreso Total anual ( USD ...
              </label>
              <select name="" id="">
                <option value="" hidden>
                  Seleccionar
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="">
                ¿Cuál es tu Estimado Patrimonio Total (USD) ?*
              </label>
              <select name="" id="">
                <option value="" hidden>
                  Seleccionar
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.inputs}>
          <span className={styles.title}>Perfil de cuenta</span>
          <div className={styles.gap}>
            <div>
              <label htmlFor="">Moneda</label>
              <select name="" id="">
                <option value="" hidden>
                  Seleccionar
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="">Aplacamiento</label>
              <select name="" id="">
                <option value="" hidden>
                  Seleccionar
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.contentTestExp}>
          <div className={styles.checks}>
            <span className={styles.title}>Experiencia</span>
            <div  className={ styles.test }>
              <label htmlFor="">
                ¿ Cuentas con experiencia en mercado Forex y/o CFDs ?
              </label>
              <div>
                <div>
                  <input type="checkbox" />
                  <span>Sí</span>
                </div>
                {/* </div>
                <div> */}
                <div>
                  <input type="checkbox" />
                  <span>No</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.checks}>
            <span className={styles.title}>Prueba de residencia</span>
            <div>
              <input type="checkbox" />
              <span>El nombre del títular no es el tuyo</span>
            </div>
          </div>
        </div>
        <div className={ styles.documents }>
        
          <h2>Documentos</h2>
          <p>Se admiten solo imagen de los siguientes formatos: <strong>.jpeg .jpg .png</strong> asi como documentos <strong>.pdf</strong>, peso máximo de los <br/>mismos <strong>5MB</strong></p>
          <div className={ styles.containerImageDoc }>
            <DocumentImage/>
            <DocumentImage/>
            <DocumentImage/>
          </div>  
        </div>
        <button className={styles.btn}>Enviar información</button>
      </div>
    </> 
  );
}
