import { useEffect, useRef } from "react";

export default function Modal({ openModal, children }: {openModal: boolean, children: React.ReactNode}) {
  const ref = useRef<any>();
  useEffect(() => {
    if (openModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [openModal]);

  return (
    <dialog
      ref={ref}
    >
      {children}
    </dialog>
  );
}
