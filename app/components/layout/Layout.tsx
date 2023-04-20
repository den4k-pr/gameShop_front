import { FC, PropsWithChildren } from "react"
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return(
        <>
            <Header />
            { children }
            <Footer />
        </>
    )
}