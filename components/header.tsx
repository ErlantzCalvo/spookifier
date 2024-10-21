'use client'
import Link from "next/link";
import Modal from "./modal";
import { useState } from "react";
import { getUserCode } from "@/lib/utils";
import Image from "next/image";

interface ShareModalProps {openShareModal: boolean, setOpenShareModal: (arg: boolean)=> void}

export default function Header() {
    const [openShareModal, setOpenShareModal] = useState<boolean>(false);

    return (
        <header className="border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center">
                    <span className=" ml-2 text-2xl font-semibold text-orange-600 font-[family-name:var(--font-october-crow)]">SPOOKIFIER</span>
                </Link>
                <div className="flex items-center space-x-4">
                    <Link
                        href="/photos"
                        className="text-lg font-medium text-orange-500 hover:text-orange-300 font-[family-name:var(--font-creepster)]"
                    >
                        Your photos
                        <Image src="/photos.svg" height={15} width={15} alt="share" className="inline ml-2 text-orange-600"/>
                        </Link>
                    <button className="text-lg font-medium text-orange-500 hover:text-orange-300 font-[family-name:var(--font-creepster)]"
                        onClick={() => setOpenShareModal(true)}
                    >
                        share
                        <Image src="/share.svg" height={15} width={15} alt="share" className="inline ml-2 text-orange-600"/>
                    </button>

                </div>
            </div>
            <ShareModal openShareModal={openShareModal} setOpenShareModal={setOpenShareModal}/>
        </header>
    );
}

function ShareModal({openShareModal, setOpenShareModal} : ShareModalProps) {
    const userCode = getUserCode()
    return (
    <Modal
        openModal={openShareModal}
    >
        <div id="course-modal" tabIndex={-1} aria-hidden="true" className="backdrop-brightness-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative p-4 w-full max-w-lg max-h-full m-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
            <div className="flex items-center justify-between p-4 md:p-5">
                <h3 className="text-xl text-orange-600 font-[family-name:var(--font-creepster)]">
                    Scare the hell out of your friends
                </h3>
                <button type="button" onClick={() => setOpenShareModal(false)}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-700 dark:hover:text-white" data-modal-toggle="course-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="px-4 pb-4 md:px-5 md:pb-5">
                <label htmlFor="course-url" className="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                Send the following link to your friends so they can see and spookify the images you have uploaded:
                </label>
                <div className="relative mb-4">
                    <input id="course-url" type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    value={"https://spookifier.vercel.app/user?uid=" + userCode} disabled readOnly></input>
                    <button data-copy-to-clipboard-target="course-url" data-popover-target="tooltip-course-url" title="Copy to clipboard"
                     onClick={() => navigator.clipboard.writeText("https://spookifier.vercel.app/user?uid=" + userCode)}
                     className="absolute end-2 top-1/2 -translate-y-1/2 bg-gray-900 text-gray-400 hover:bg-gray-800 rounded-lg p-2 inline-flex items-center justify-center">
                        <span id="default-icon-course-url">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                            </svg>
                        </span>
                        <span id="success-icon-course-url" className="hidden items-center">
                            <svg className="w-3.5 h-3.5 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                            </svg>
                        </span>
                    </button>
                    <div id="tooltip-course-url" role="tooltip" data-popover="tooltip-course-url" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        <span id="default-tooltip-message-course-url">Copy to clipboard</span>
                        <span id=" success-tooltip-message-course-url" className="hidden">Copied!</span>
                        <div className="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <button type="button" data-modal-hide="course-modal" onClick={() => setOpenShareModal(false)}
                className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Close</button>
            </div>
        </div>
    </div>
</div>
    </Modal>)
}