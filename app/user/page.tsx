'use client'
import { isValidUid, setUserUid } from '@/lib/utils'
import dynamic from 'next/dynamic'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
const SpookyLoader = dynamic(
    () => import('@/components/spooky-loader'),
    {ssr: false}
)

export default function User() {
    return (
        <Suspense>
            <UserChecker />
        </Suspense>
    )
}

function UserChecker() {
    const router = useRouter()
    const path = useSearchParams()
    const [invalidUser, setInvalidUser] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        setLoading(true)
        const buid = path.get('uid')
        if(buid) {
            const uid = getUidFromUserKey(buid)
            if(isValidUid(uid)) {
                setUserUid(uid)
                setLoading(false)
                router.push('/photos')
            } else {
                setInvalidUser(true)
            }
        } else {
            setLoading(false)
            setInvalidUser(true)
        }
    }, [path, router])

    return (
        <>
        {loading && <SpookyLoader />}
        {invalidUser && 
            <div className='h-screen p-2'>
                <h1 className='text-4xl pb-24 text-red-600 font-[family-name:var(--font-october-crow)]'>🧛&nbsp; Invalid user link &nbsp;🧛</h1>
                <a href='/' className='text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none'>Go home</a>
            </div>
        }
        </>
    )
}

function getUidFromUserKey(userKey: string) {
    return Buffer.from(userKey.substring(1), 'base64').toString('utf8')
}