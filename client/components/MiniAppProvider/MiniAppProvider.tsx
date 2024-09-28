import { FC, ReactNode, useEffect } from "react";
import {
    bindMiniAppCSSVars,
    bindThemeParamsCSSVars,
    bindViewportCSSVars,
    useMiniApp,
    useThemeParams,
    useViewport,
    useLaunchParams,
    retrieveLaunchParams
} from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import axios from "axios";

interface MiniAppProviderProps { children: ReactNode }

export const MiniAppProvider: FC<MiniAppProviderProps> = ({ children }) => {
    const lp = useLaunchParams();
    const miniApp = useMiniApp();
    const themeParams = useThemeParams();
    const viewport = useViewport();
    const initDataRaw = retrieveLaunchParams()

    useEffect(() => {
        return bindMiniAppCSSVars(miniApp, themeParams);
    }, [miniApp, themeParams]);

    useEffect(() => {
        return bindThemeParamsCSSVars(themeParams);
    }, [themeParams]);

    useEffect(() => {
        return viewport && bindViewportCSSVars(viewport);
    }, [viewport]);

    useEffect(() => {
        console.log(initDataRaw)
        const validateInitData = async () => {

            const res = await axios.post("http://localhost:8080/tap_validate", initDataRaw.initDataRaw, {
                headers: {
                    Authorization: `tma ${initDataRaw}`
                }
            })
            console.log(res)
        }
        validateInitData()
    }, [])

    return (
        <AppRoot platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"} appearance={miniApp.isDark ? "dark" : "light"}>
            {children}
        </AppRoot>
    );

}