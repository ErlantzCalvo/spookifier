import { v4 as uuidv4 } from 'uuid';

export function getUserUid() {
    if(typeof window !== "undefined"){
        let uid = localStorage.getItem('uid')
        if(!uid) {
            uid = uuidv4()
            localStorage.setItem('uid', uid)
        }
    
        return uid
    }
}