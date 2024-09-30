import { Cell, Slider } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import { usePlatform } from "../../hooks/usePlatform";
import { BackButtonManipulator } from "../../components/BackButtonManipulator/BackButtonManipulator"
import { TelegramUser, TelegramWidget } from "../../components/TelegramWidget/TelegramWidget"
import axios from "axios";
export const UserPage: FC = () => {
    const { platform } = usePlatform()

    const onAuth = (user: TelegramUser) => {
        let InitDataRaw: string = ""
        for (let [index, [key, value]] of Object.entries(Object.entries(user))) {
            InitDataRaw += `${key}=${value}`
            if (Object.entries(user).length > (+index + 1)) {
                InitDataRaw += "&"
            }
        }
        alert(InitDataRaw)
        validateInitData(InitDataRaw)
    }

    const validateInitData = async (InitDataRaw: string) => {
        interface ValidateResponse {
            valid: string
        }
        const res = await axios.post<ValidateResponse>("http://localhost:8080/tap_validate", InitDataRaw, {
            headers: {
                Authorization: `tma ${encodeURIComponent(InitDataRaw)}`
            }
        }).then((e) => {
            if (!e.data.valid) {
                alert("пиздюшня")
            } else {
                alert("все гуд")
            }
            console.log("авторизация попытка")
        }).catch((e) => {
            console.error(e)
        })
        console.log(InitDataRaw)

    }

    return (

        <>
            {platform == "tma" && <BackButtonManipulator />}
            {platform == "web" && <TelegramWidget Callback={onAuth} />}
            <Slider content="слайд"><Cell subtitle="карточка">карточка коноттент</Cell></Slider>
        </>
    )
}