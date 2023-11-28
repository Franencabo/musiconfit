import { RecentItems } from "./RecentItems"
// import { UserControls } from "./UserControls"
import { LogoCard } from "./LogoCard";

export const AsideMenu = () => {
    return (
        <aside className="aside-menu">

            <LogoCard />
            <RecentItems />
        </aside>
    )
}
