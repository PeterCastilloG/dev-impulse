"use client"

import React from 'react';
import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import vector1 from '@/modules/tournamentSetup/assets/Vector.png'
import Image, { StaticImageData } from 'next/image';
import styles from './Imagen.module.scss'



export default function ImageSave() {
  
  const [ image, setImage ] = useState<string | StaticImageData>('')

  const handleDrop = (droppedFiles: any) => {
    const file = droppedFiles[0];
    const objectURL = URL.createObjectURL(file);
    
    setImage(objectURL);
  };

  const { 
    getRootProps,
    getInputProps 
  } = useDropzone({ 
    onDrop: handleDrop, 
    accept: { 
      'image/png': ['.png'],
      'image/jpg': ['.jpg', '.jpeg']
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024
  });

  return (
            <div className={ styles.principalPhoto } {...getRootProps()}>
                <input {...getInputProps()}/>
                {
                    image === ''    ? ( <div className={ styles.containerInitial }>
                                            <Image src={ vector1 } width={60} height={50} alt="Default Image"/>
                                            <strong>foto de perfil</strong>
                                        </div> ) 
                                    : (<Image src={ image } width={100} height={50} alt="Selected Image"/>)
                }
            </div>
        )
}