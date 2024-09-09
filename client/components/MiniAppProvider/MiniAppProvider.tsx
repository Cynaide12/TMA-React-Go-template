import { FC, ReactNode, useEffect } from "react";
import {
    bindMiniAppCSSVars,
    bindThemeParamsCSSVars,
    bindViewportCSSVars,
    useMiniApp,
    useThemeParams,
    useViewport,
    useLaunchParams
} from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';

interface MiniAppProviderProps { children: ReactNode }

export const MiniAppProvider: FC<MiniAppProviderProps> = ({ children }) => {
    const lp = useLaunchParams();
    const miniApp = useMiniApp();
    const themeParams = useThemeParams();
    const viewport = useViewport();

    useEffect(() => {
        return bindMiniAppCSSVars(miniApp, themeParams);
    }, [miniApp, themeParams]);

    useEffect(() => {
        return bindThemeParamsCSSVars(themeParams);
    }, [themeParams]);

    useEffect(() => {
        return viewport && bindViewportCSSVars(viewport);
    }, [viewport]);

    return (
            <AppRoot platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"} appearance={miniApp.isDark ? "dark" : "light"}>
                {children}  
            </AppRoot>
    );

}