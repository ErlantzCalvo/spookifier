'use client'
import ImageLoadSkeleton from '@/components/image-load-skeleton';
import { downloadAsset } from '@/lib/utils';
import {CldImage, getCldImageUrl } from 'next-cloudinary'
import { useState } from 'react';
export default function Photo({ params }: { params: { uid: string, public_id: string } }) {
  const originalImagePath = `${params.uid}/${params.public_id}`
  const [isLoadingImage, setLoadingImage] = useState<boolean>(false)
  const [selectedImage, setSelectedImage] = useState<string>(originalImagePath)
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0)
  const [generatedImages, setGeneratedImages] = useState<string[]>([originalImagePath])

  function spookifyImage() {
    console.log('is loading')
    setLoadingImage(true)
    const url = getCldImageUrl({
      src: originalImagePath, 
      // namedTransformations: 'person-spookified',
      replaceBackground: "halloween party",
      replace: {
        from: 'shirt',
        to: 'Shirt with spiders on it'
      },
      simulateColorblind: 'tritanomaly',
    })
    waitLoadingImage(url)
    let currIndex = selectedImageIndex
    setSelectedImage(url)
    if(!generatedImages.some(imUrl => url === imUrl)) {
      setGeneratedImages([...generatedImages, url])
      currIndex++
    }
    setSelectedImageIndex(currIndex)
  }

  function waitLoadingImage(url: string) {
    fetch(url).then(res => {
      console.log('is NOT loading')
      setLoadingImage(false)
    })
  }

  function handleGeneratedImageClick(index: number) {
    setSelectedImageIndex(index)
    setSelectedImage(generatedImages[index])
  }

  

    return (
    <div className='h-screen flex text-center p-2 md:p-12'>
      <div id='lateralPanel' className='text-white mr-5 md:mr-20 overflow-y-auto pb-5'>
        {
          generatedImages.map((imageUrl, idx) => (
            <div 
            key={"generatedImage__" + idx}
            id={"generatedImage__" + idx}
            className={'hover:bg-slate-800 mb-2 ' + (idx === selectedImageIndex ? "bg-orange-950": "")}
            >
              {isLoadingImage && idx === selectedImageIndex && <ImageLoadSkeleton height={100}/>}
              {(!isLoadingImage || idx !== selectedImageIndex) && <CldImage 
                alt={'generated image ' + idx}
                src={imageUrl}
                width={200}
                height={100}
                className={' m-auto rounded-lg cursor-pointer ' + (idx === selectedImageIndex ? "w-full": "w-9/12")}
                preserveTransformations
                onClick={() => handleGeneratedImageClick(idx)}
              />}
            </div>
          ))
        }
      </div>
      <div className='flex flex-col'>
     <ButtonsPane onSpookify={spookifyImage} onDownloadClick={() => handleDownloadClick(selectedImage)}/>
      {isLoadingImage && <ImageLoadSkeleton height={400}/>}
      {!isLoadingImage && <CldImage 
        alt='original image'
        src={selectedImage}
        width={800}
        height={400}
        className='mt-5 rounded-lg'
        preserveTransformations
        />}
      </div>
    </div>);
  }

  function ButtonsPane(params: {onSpookify: Function, onDownloadClick: Function}) {
    return (
      <div className='text-start'>
        <button
          className='bg-orange-600 hover:bg-orange-800  
      rounded-lg px-5 py-2.5 font-[family-name:var(--font-creepster)]
      text-white text-xl tracking-wide' onClick={() => params.onSpookify()}>Spookify!</button>
        <button
          className='bg-orange-600 hover:bg-orange-800 
      rounded-lg px-5 py-2.5  float-end'  title='Download image'>
          <img src='/download.svg' width={20} onClick={() => params.onDownloadClick()}></img>
      </button>
    </div>
    )
  }

  function handleDownloadClick(selectedImage: string) {
    downloadAsset(selectedImage)
  }