import { createContext, FC, ReactNode, useState } from "react"
export interface PlatformContextType {
    platform: string
    changePlatform: (value: string) => void
}

export const PlatformContext = createContext<PlatformContextType | null>(null)

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [platform, setPlatform] = useState<string>("web")

    const changePlatform = (value: string) => {
        setPlatform(value)
    }

    return <PlatformContext.Provider value={{ platform, changePlatform }}>{children}</PlatformContext.Provider>
}