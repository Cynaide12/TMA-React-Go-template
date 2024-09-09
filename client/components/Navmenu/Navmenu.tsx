import { type FC } from "react"
import { Cell, Tabbar } from "@telegram-apps/telegram-ui"
import { TabbarItem } from "@telegram-apps/telegram-ui/dist/components/Layout/Tabbar/components/TabbarItem/TabbarItem"
import { Outlet } from "react-router-dom"
import { Link } from "../Link/Link"
export const Navmenu: FC = () => {
    return (
        <>
            <Outlet />
            <nav>
                <Tabbar>
                    <TabbarItem>
                        <Link to={"/"}>
                            <Cell>Main</Cell>
                        </Link>
                    </TabbarItem>
                    <TabbarItem>
                        <Link to={"/user"}>
                            <Cell>User</Cell>
                        </Link>
                    </TabbarItem>
                    <TabbarItem>
                        <Link to={"/learn-page"}>
                            <Cell>Learn</Cell>
                        </Link>
                    </TabbarItem>
                </Tabbar>
            </nav>
        </>
    )
}