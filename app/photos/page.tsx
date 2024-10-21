"use client"
import { getUserUid } from "@/lib/utils"
import { useEffect, useState } from "react"
import {CldImage} from 'next-cloudinary'
import { useRouter } from "next/navigation"
import ImageLoadSkeleton from "@/components/image-load-skeleton"
import Link from "next/link"
import Spider from "@/components/spider"
import UploadButton from "@/components/upload-button"

export default function Photos() {
    const [imagesUrls, setImagesUrls] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const router = useRouter()
    useEffect(() => {
        const fetchData = async () =>{
            const response = await fetch(`/api/getUserPhotos?uid=${getUserUid()}`)
            const {data}= await response.json()
            setImagesUrls(data.resources)
            setIsLoading(false)
        }

        setIsLoading(true)
        fetchData()
    }, [])

    const handleWidgetUpload = function(result: any) {
        if(result.info) {
          console.log(result?.info)
          router.push('/photos/' + result?.info.public_id)
        }
      }

    if(!isLoading && imagesUrls.length === 0) return <EmptyPage handleWidgetUpload={handleWidgetUpload}/>
    if(isLoading) return skeletonGrid()
    return (
        <div className="p-12 h-screen">
            <Spider scale={0.2} left={80} hangHeight={800}/>
            <Spider scale={0.2} left={10} hangHeight={200}/>
            <div className="mb-5"><UploadButton onSuccess={handleWidgetUpload}/></div>
            <div className=" grid grid-cols-2 md:grid-cols-4 gap-4">
                {imagesUrls.map(image => (
                    <Link href={'/photos/' + image.public_id} key={image.public_id}>
                        <CldImage src={image.public_id}
                            alt="image"
                            width={400}
                            height={200}
                            className="cursor-pointer rounded-lg h-auto transition duration-300
                             hover:scale-125 shadow hover:shadow-xl hover:shadow-orange-400 max-h-[calc(100vh/4)] max-w-[calc(100vw/4)] object-contain"
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

function EmptyPage({handleWidgetUpload}: {handleWidgetUpload: any}) {
    return (
    <div className="h-screen w-full text-2xl text-center pt-11 font-[family-name:var(--font-creepster)]">
            <Spider scale={0.3} left={60}/>
            <div className="mb-5"><UploadButton onSuccess={handleWidgetUpload}/></div>

        <div className="text-slate-300">🎃 Beware! This album is as empty as a grave on Halloween night. 👻</div>
    </div>
    )
}

function skeletonGrid() {
    return (
        <div className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-2">
            <ImageLoadSkeleton height={200}/>
            <ImageLoadSkeleton height={200}/>
            <ImageLoadSkeleton height={200}/>
            <ImageLoadSkeleton height={200}/>
        </div>
    )
}