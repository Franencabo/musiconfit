import { RecentItems } from "./RecentItems"
import { UserControls } from "./UserControls"

export const AsideMenu = () => {
    return (
        <aside className="aside-menu">

            <UserControls />
            <RecentItems />
        </aside>
    )
}
