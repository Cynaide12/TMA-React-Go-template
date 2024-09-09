import { Cell, Section } from "@telegram-apps/telegram-ui"
import { Link } from "../../components/Link/Link"
import { FC } from "react"
import { usePlatform } from "../../hooks/usePlatform"
import { DisplayUserData } from "../../components/DisplayUserData/DisplayUserData"
import { BackButtonManipulator } from "../../components/BackButtonManipulator/BackButtonManipulator"
export const IndexPage: FC = () => {
    const { platform } = usePlatform()
    return (
        <>
            {platform == "tma" && <BackButtonManipulator />}
            {platform == "tma" && <DisplayUserData />}
            <Section header="pages">
                <Link to={"/"}>
                    <Cell subtitle="main page">Main page</Cell>
                </Link>
                <Link to={"/learn-page"}>
                    <Cell subtitle="learn page">all trash</Cell>
                </Link>
            </Section>
        </>
    )
}