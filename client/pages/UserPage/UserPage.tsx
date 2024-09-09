import { Cell, Slider } from "@telegram-apps/telegram-ui";
import React, { FC } from "react";
import { usePlatform } from "../../hooks/usePlatform";
import { BackButtonManipulator } from "../../components/BackButtonManipulator/BackButtonManipulator"
export const UserPage: FC = () => {
    const { platform } = usePlatform()

    return (

        <>
            {platform == "tma" && <BackButtonManipulator />}
            <Slider content="слайд"><Cell subtitle="карточка">карточка коноттент</Cell></Slider>
        </>
    )
}