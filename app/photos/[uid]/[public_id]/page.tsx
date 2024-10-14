'use client'
import {CldImage} from 'next-cloudinary'
export default function Photo({ params }: { params: { uid: string, public_id: string } }) {
  const imagePath = `${params.uid}/${params.public_id}`
    return (<div>
      {params.uid} --- {params.public_id}
      <CldImage 
        alt='photo'
        src={imagePath}
        width={800}
        height={400}
      />
    </div>);
  }