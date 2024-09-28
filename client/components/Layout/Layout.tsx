import { type FC, ReactNode, useEffect, useState } from "react";
import { isTMA, SDKProvider } from "@telegram-apps/sdk-react"
import { MiniAppProvider } from "../MiniAppProvider/MiniAppProvider";
import { AppRoot } from "@telegram-apps/telegram-ui";
import { usePlatform } from "../../hooks/usePlatform"
interface LayoutProps { children: ReactNode }

export const Layout: FC<LayoutProps> = ({ children }) => {

    const [isMiniApp, setIsMiniApp] = useState(false)
    const { changePlatform } = usePlatform()
    useEffect(() => {
        const CheckIsTMA = async () => {
            const res = await isTMA()
            setIsMiniApp(res)
            changePlatform(res ? "tma" : "web")
        }
        CheckIsTMA()

    }, [])

    if (!isMiniApp) {
        return (
            <AppRoot appearance="dark">
                {children}
            </AppRoot>
        );
    } else if (isMiniApp) {
        return (
            <SDKProvider acceptCustomStyles>
                <MiniAppProvider>
                    {children}
                </MiniAppProvider>
            </SDKProvider>
        );
    }
}