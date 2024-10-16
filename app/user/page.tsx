'use client'
import { isValidUid, setUserUid } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'

export default function User() {
    const router = useRouter()
    const path = useSearchParams()
    const buid = path.get('uid')
    let invalidUser = false
    if(buid) {
        const uid = getUidFromUserKey(buid)
        if(isValidUid(uid)) {
            setUserUid(uid)
            router.push('/photos')
        } else {
            invalidUser = true
        }
    } else {
        invalidUser = true
    }
    if(invalidUser){
        return (
            <div className='h-screen p-2'>
                <h1 className='text-4xl pb-24 text-red-600 font-[family-name:var(--font-october-crow)]'>🧛&nbsp; Invalid user link &nbsp;🧛</h1>
                <a href='/' className='text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none'>Go home</a>
            </div>
        )
    }
}

function getUidFromUserKey(userKey: string) {
    return Buffer.from(userKey.substring(1), 'base64').toString('utf8')
}