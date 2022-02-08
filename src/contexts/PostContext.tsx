import { createContext, ReactNode, useState } from "react";
import { SocialApp } from "../pages/scheduling";

type DateTime = {
  date: string;
  time: string;
}
type PostContextType = {
    modal: boolean;
    setModal: any;
    social: SocialApp | undefined,
    setSocial: any,
    text: string;
    setText: any;
    date: DateTime,
    setDate: any,
    img: {
      preview: any;
      raw: any;
    } | undefined,
    setImg: any,
    dateError: boolean,
    setDateError: any,
};
type PostContextProviderProps = {
    children: ReactNode;
};
export const PostContext = createContext({} as PostContextType)

export function PostContextProvider(props: PostContextProviderProps) {
    const [social, setSocial] = useState<SocialApp | undefined>()
    const [text, setText] = useState<string>('')
    const [date, setDate] = useState<DateTime>({date: '', time: ''})
    const [ img, setImg ] = useState()

    const [dateError, setDateError] = useState(false)
    const [modal, setModal] = useState<boolean>(false);


    return (
      <PostContext.Provider value={{ modal, setModal, social, setSocial, text, setText, date, setDate, img, setImg, dateError, setDateError }}>
        {props.children}
      </PostContext.Provider>
    );
}