'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import UploadButton from "@/components/upload-button";
import { v4 as uuidv4 } from 'uuid';
import {useRouter} from 'next/navigation'
import ImageLoadSkeleton from "@/components/image-load-skeleton";
import Testimonials from "@/components/testimonials";
import Spider from "@/components/spider";


export default function Home() {
  const [isTuElementReady, setTuElementReady] = useState<boolean>(false);
  const router = useRouter()

  useEffect(() => {
    const isTwoUpElementImported = import("two-up-element")
    isTwoUpElementImported.then(() => setTuElementReady(true))
    const uid = localStorage.getItem('uid')
    if(!uid) localStorage.setItem('uid', uuidv4())
  })
  const handleWidgetUpload = function(result: any) {
    if(result.info) {
      console.log(result?.info)
      router.push('/photos/' + result?.info.public_id)
    }
  }
  return (
      <main>
        <Spider scale={0.2} left={30} hangHeight={800}/>
        <Spider scale={0.2} left={60}/>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1 className="text-4xl font-bold text-orange-600 tracking-tight sm:text-5xl md:text-6xl font-[family-name:var(--font-creepster)]">
                Unleash terror
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Turn a person&apos;s photo into its most terrifying and
                    spine-chilling version!

                </p>
                <div className="w-fit mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col items-center">
                  <UploadButton onSuccess={handleWidgetUpload}/>
                  <p className="text-gray-300 tracking-widest font-[family-name:var(--font-october-crow)]">
                    Only if you dare  
                  </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
                {isTuElementReady && <TwoUpWrapper />}
                {!isTuElementReady && <ImageLoadSkeleton width={600} height={300}/>}
              </div>
            </div>
          </div>
        </section>
  
        <section className="bg-white w-full">
          <Testimonials />
        </section>
      </main>
  
  )
}

function TwoUpWrapper() {
  return (
    <div className="my-two-up">
      <two-up>
        <Image src="https://res.cloudinary.com/ds4qpjtfq/image/upload/v1728920459/template_primary_sa3nyv.avif" 
        alt="normal person" width={800} height={400}></Image>
        <Image src="https://res.cloudinary.com/ds4qpjtfq/image/upload/v1728920459/template_primary_1_ux2vur.avif" 
        alt="normal person" width={800} height={400}></Image>
      </two-up>
    </div>
  )
}