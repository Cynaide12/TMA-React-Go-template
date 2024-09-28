import { Cell, Slider } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import { usePlatform } from "../../hooks/usePlatform";
import { BackButtonManipulator } from "../../components/BackButtonManipulator/BackButtonManipulator"
import { TelegramUser, TelegramWidget } from "../../components/TelegramWidget/TelegramWidget"
export const UserPage: FC = () => {
    const { platform } = usePlatform()

    const onAuth = (user: TelegramUser) => {
        let msg: string = ""
        for (const [key, value] of Object.entries(user)) {
            msg += `${key} - ${value} \n`
        }
        alert(msg)
    }

    return (

        <>
            {platform == "tma" && <BackButtonManipulator />}
            {platform == "web" && <TelegramWidget Callback={onAuth} />}
            <Slider content="слайд"><Cell subtitle="карточка">карточка коноттент</Cell></Slider>
        </>
    )
}