'use client'
import ImageLoadSkeleton from '@/components/image-load-skeleton';
import SpookyLoader from '@/components/spooky-loader';
import { downloadAsset } from '@/lib/utils';
import {CldImage, getCldImageUrl } from 'next-cloudinary'
import Image from 'next/image';
import { useState } from 'react';
import availableTransformations from "@/app/assets/availableTransformations.json"
import Spider from '@/components/spider';

interface ButtonsPaneProps {
  isLoading: boolean, 
  onSpookify: () => void, 
  onDownloadClick: () => void
}

export default function Photo({ params }: { params: { uid: string, public_id: string } }) {
  const originalImagePath = `${params.uid}/${params.public_id}`
  const [isLoadingImage, setLoadingImage] = useState<boolean>(false)
  const [usedTransformations, setUsedTransformations] = useState<number[]>([])
  const [error, setError] = useState<any>(null)
  const [selectedImage, setSelectedImage] = useState<{url: string, index: number}>({url: originalImagePath, index: 0})
  const [generatedImages, setGeneratedImages] = useState<string[]>([originalImagePath])

  async function spookifyImage() {
    setError(null)
    setLoadingImage(true)
    const [transformToApply, transformationIndex] = getNamedTransformation(usedTransformations)
    if(transformationIndex === -1) {
      setError("No more transformations available for this image. Available transformations for the same image are " + availableTransformations.length)
      return
    }
    const url = getCldImageUrl({
      src: originalImagePath, 
      namedTransformations: transformToApply,
    })
    try {
      const res = await waitLoadingImage(url)
      if(res.status !== 200) throw new Error(res.statusText)
      setUsedTransformations([...usedTransformations, transformationIndex])
      let currIndex = generatedImages.length
      if(!generatedImages.some(imUrl => url === imUrl)) {
        setGeneratedImages([...generatedImages, url])
        currIndex++
      }
      setSelectedImage({url, index: currIndex})
    } catch (error) {
        setError(error)
    } finally {
      setTimeout(() => {
        setLoadingImage(false)
      }, 1000)
    }
  }

  async function waitLoadingImage(url: string) {
    return fetch(url)
  }

  function handleGeneratedImageClick(index: number) {
    setSelectedImage({url: generatedImages[index], index})
  }

    return (
    <div className='h-screen flex text-center p-2 md:p-12 justify-center'>
      <Spider scale={0.2} left={50} hangHeight={800}/>
      <Spider scale={0.2} left={80} hangHeight={600}/>
      <div id='lateralPanel' className='text-white mr-5 md:mr-20 overflow-y-auto pb-5'>
        {
          generatedImages.map((imageUrl, idx) => (
            <div 
            key={"generatedImage__" + idx}
            id={"generatedImage__" + idx}
            className={'hover:bg-slate-800 mb-2 ' + (idx === selectedImage.index ? "bg-orange-950": "")}
            >
              {(!isLoadingImage || idx !== selectedImage.index) && <CldImage 
                alt={'generated image ' + idx}
                src={imageUrl}
                width={200}
                height={100}
                className={' m-auto rounded-lg cursor-pointer ' + (idx === selectedImage.index ? "w-full": "w-9/12")}
                preserveTransformations
                onClick={() => handleGeneratedImageClick(idx)}
                />}
            </div>
          ))
        }
        {isLoadingImage && <ImageLoadSkeleton width={200} height={100}/>}
      </div>
      <div className='flex flex-col w-full' style={{maxWidth: '800px'}}>
        
     <ButtonsPane isLoading={isLoadingImage} onSpookify={spookifyImage} onDownloadClick={() => handleDownloadClick(selectedImage.url)}/>
      {isLoadingImage && <SpookyLoader />}
      {!isLoadingImage && <CldImage 
        alt='original image'
        src={selectedImage.url}
        width={1920}
        height={1080}
        className='mt-5 rounded-lg m-auto max-w-full max-h-full object-contain'
        preserveTransformations={selectedImage.url !== originalImagePath}
        />}
      {error && 
      <div>
        <h1 className='text-red-600 text-xl'>Error spookifying image</h1>
        <h2 className='text-red-600'>Please check that the given image corresponds to a person</h2>
      </div>
      }
      </div>
    </div>);
  }

  function ButtonsPane(params: ButtonsPaneProps) {
    return (
      <div className='text-start'>
        <button
          className='bg-orange-600 hover:bg-orange-800  
      rounded-lg px-5 py-2.5 font-[family-name:var(--font-creepster)]
      text-white text-xl tracking-wide' onClick={() => params.onSpookify()}
      disabled={params.isLoading}
      >Spookify!</button>
        <button
          className='bg-orange-600 hover:bg-orange-800 
      rounded-lg px-5 py-2.5  float-end'  title='Download image'>
          <Image src='/download.svg' width={20} height={20} onClick={() => params.onDownloadClick()} alt='Download image'/>
      </button>
    </div>
    )
  }

  function handleDownloadClick(selectedImage: string) {
    downloadAsset(selectedImage)
  }

  function getNamedTransformation(usedTransformations: number[]): [string, number] {
    if(usedTransformations.length === availableTransformations.length) return ["", -1]
    let index = Math.floor(Math.random() * availableTransformations.length)
    while(usedTransformations.includes(index)) {
      index = Math.floor(Math.random() * availableTransformations.length)
    }
  return [availableTransformations[index], index]
  }