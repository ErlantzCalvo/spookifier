import { useEffect, useState } from "react"
import loadingContent from '@/app/assets/loadingContent.json'
import Image from "next/image"

export default function SpookyLoader() {
    const [loaderContent, setLoaderContent] = useState<{text: string, image: string}>(generateRandomContent())
    const SECONDS_TO_CHANGE_TEXT = 5
    useEffect(() => {
      let count = 0
      const interval = setInterval(() =>{
        if(count % SECONDS_TO_CHANGE_TEXT === 0) {
            const { text, image } = generateRandomContent()
            setLoaderContent({text, image})
        }
        count++
      }, 1000)
      return () => {clearInterval(interval)}
    }, [])

    return <div className='text-orange-600 flex py-14 text-2xl justify-center align-middle items-center font-[family-name:var(--font-creepster)] tracking-wide'>
        <SpookyLoaderContent content={loaderContent} />
    </div>
  }

function generateRandomContent() {
    const textIndex = Math.floor(Math.random() * loadingContent.length)
    const imageIndex = Math.floor(Math.random() * loadingContent[textIndex].filesNumber) + 1
    const text = loadingContent[textIndex].text
    const image = `/gifs/${loadingContent[textIndex].folder}/${imageIndex}.gif`
    return { text, image }
}

  function SpookyLoaderContent({content}: {content: {text: string, image: string}}) {
    return (
        <>
        <span className="pr-3">{content.text}</span>
        <Image 
            src={content.image}
            width={45}
            height={45}
            alt={content.text}
            unoptimized
        />
        </>
    )
  }