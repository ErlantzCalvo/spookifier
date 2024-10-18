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

export function setUserUid(uid: string) {
    if(typeof window !== "undefined")
      localStorage.setItem('uid', uid)
}

export function isValidUid(uid: string): boolean {
    return uid.length === 36
}

export function getUserCode() {
    if(typeof window !== "undefined"){
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const uid = getUserUid()
      if(uid && isValidUid(uid)) {
        const randomChar = characters.charAt(Math.floor(Math.random() * characters.length));
        const b64uid = Buffer.from(uid).toString('base64')
        return randomChar + b64uid
      }
    }
}

export async function downloadAsset(assetUrl: string) {
    const download = (filename: string, content: string) => {
        const element = document.createElement("a");
        element.setAttribute("href", content);
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);
    
        element.click();
    
        document.body.removeChild(element);
      };

    try {
        const result = await fetch(assetUrl, {
          method: "GET",
          headers: {}
        });
        const blob = await result.blob();
        const url = URL.createObjectURL(blob);
        download("spooky_image", url);
        URL.revokeObjectURL(url);
      } catch (error) {
        console.error(error);
      }
}