import { Cell, Slider } from "@telegram-apps/telegram-ui";
import { FC } from "react";
import { usePlatform } from "../../hooks/usePlatform";
import { BackButtonManipulator } from "../../components/BackButtonManipulator/BackButtonManipulator"
export const LearnPage: FC = () => {
    const { platform } = usePlatform()

    return (

        <>
            {platform == "tma" && <BackButtonManipulator />}
            <Slider content="слайд"><Cell subtitle="карточка">карточка коноттент</Cell></Slider>
        </>
    )
}