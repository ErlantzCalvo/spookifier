"use client"
import { getUserUid } from "@/lib/utils";
import { CldUploadWidget } from "next-cloudinary";

type UploadButtonProps = {
    onSuccess: (arg: any) => void
}
export default function UploadButton(props: UploadButtonProps) {
    const uid = getUserUid()

    return <CldUploadWidget
        onSuccess={(result) => props.onSuccess(result)}
        uploadPreset="spookifier-upload-unsigned"
        options={{
            sources: ["local", "camera"],
            folder: uid,
            multiple: false,
            maxFiles: 1,
            language: "en",
            text: {
                en: {
                    or: "Or",

                    menu: {
                        files: "Upload from your device",
                    },
                    local: {
                        browse: "Select",
                        dd_title_single:
                            "Drag your image here",
                    },
                },
            },
            styles: {
                palette: {
                    window: "#000000",
                    sourceBg: "#000000",
                    windowBorder: "#FF8405",
                    tabIcon: "#FF8405",
                    inactiveTabIcon: "#924C05",
                    menuIcons: "#FF8405",
                    link: "#FD9705",
                    action: "#336BFF",
                    inProgress: "#00BFFF",
                    complete: "#33ff00",
                    error: "#EA2727",
                    textDark: "#000000",
                    textLight: "#FFFFFF",
                },
                fonts: {
                    default: null,
                    "'Space Mono', monospace": {
                        url: "https://fonts.googleapis.com/css?family=Space+Mono",
                        active: true,
                    },
                },
            },
        }}
    >
        {({ open }) => {
            return (
                <button onClick={() => open()} className="bg-orange-600 hover:bg-orange-800 text-white font-bold py-2 px-4 rounded-lg">
                    Upload your photo...
                </button>
            );
        }}
    </CldUploadWidget>
}