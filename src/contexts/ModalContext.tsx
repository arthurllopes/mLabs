import { createContext, ReactNode, useState } from "react";

type ModalContextType = {
    modal: boolean;
    setModal: any;
};
type ModalContextProviderProps = {
    children: ReactNode;
};
export const ModalContext = createContext({} as ModalContextType)

export function ModalContextProvider(props: ModalContextProviderProps) {
    const [modal, setModal] = useState<boolean>(false);


    return (
      <ModalContext.Provider value={{ modal, setModal }}>
        {props.children}
      </ModalContext.Provider>
    );
}