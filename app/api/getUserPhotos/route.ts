import {v2 as cloudinaryApi} from 'cloudinary'

export async function GET(request: Request) {
    const {searchParams} = new URL(request.url)
    const uid = searchParams.get('uid')
    if(!uid) return new Response('UID parameter is needed', {
        status: 400,
        statusText: "MISSING_UID"
    })

    if(uid.length !== 36) return new Response('Invalid UID value', {
        status: 400,
        statusText: "INVALID_UID"
    })

    const userImages = await cloudinaryApi.search
    .expression(`resource_type:image AND asset_folder:spookifier AND public_id:${uid}/*`)
    .sort_by('public_id','desc')
    .max_results(300)
    .execute()
    

    return Response.json({data: userImages})
}