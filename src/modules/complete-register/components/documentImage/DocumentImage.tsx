import React from 'react';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import vector1 from '@/modules/complete-register/assets/InitalImage.png'
// import LogoPDF from '@/modules/complete-register/assets/logo-pdf.png'
import Image, { StaticImageData } from 'next/image';
import styles from '@/modules/complete-register/components/documentImage/documentImage.module.scss'


export default function DocumentImage() {
  
  const [ previewURL, setPreviewURL ] = useState<string | StaticImageData>('')
  // const [ isPDF, setIsPDF ] = useState()

  // <Image src={ newImage } width={130} height={90} alt="Vista previa del archivo"  />
  // className={ styles.image }

  const handleDrop = (droppedFiles: any) => {
    const file = droppedFiles[0];
    const objectURL = URL.createObjectURL(file);
    
    setPreviewURL(objectURL);
  };

  const { 
    getRootProps,
    getInputProps 
  } = useDropzone({ 
    onDrop: handleDrop, 
    accept: { 
      'image/png': ['.png'],
      'image/jpg': ['.jpg', '.jpeg'],
      'application/pdf': ['.pdf'] 
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024
  });

  return (
    <div className={ styles.frontId }>
      <strong className={ styles.strong }>Frontal del documento de identidad *</strong>
      <div className={ styles.divImage } {...getRootProps()}>
        <input width={300} height={150} {...getInputProps()}/>
        <div>
          {
            previewURL ? ( <Image src={ previewURL } width={200} height={160} alt="Vista previa del archivo" className={ styles.image } /> )
                        : (<div className={ styles.InitImg }>
                            <Image src={vector1} width={160} height={100} alt='Imagen provisional'  className={ styles.image }/>
                            <span>Sube tus archivos aquí</span>
                          </div>)
          }
        </div>     
      </div>
    </div>
  )
}