import { useInitData, useInitDataRaw } from "@telegram-apps/sdk-react";
import { useMemo } from "react"
import { Section, Placeholder } from "@telegram-apps/telegram-ui"
interface userData {
    title: string;
    value: any;
}

export const DisplayUserData = () => {
    const initData = useInitData()
    const initDataRaw = useInitDataRaw()
    const userData: userData[] | undefined = useMemo<userData[] | undefined>(() => {
        if (!initData?.user) {
            return
        }

        const { id, username, photoUrl } = initData.user

        console.log(initDataRaw)
        return [
            { title: "id", value: id.toString() },
            { title: "username", value: username },
            { title: "photoUrl", value: photoUrl }
        ]
    }, [initData, initDataRaw])


    return (
        userData &&
        <Section header="All trash" footer="learning">
            <Placeholder header={userData[1].value} description={userData[1].title}></Placeholder>
        </Section>
    )
}