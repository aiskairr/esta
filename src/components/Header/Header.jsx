import { useTheme } from "../mode/useTheme"
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher"
import scss from "./Header.module.scss"

function Header() {
    const { theme } = useTheme()
    return (
        <div className={scss.header}>
            <div className={scss.header_w + " container"}>
                <div className={scss.left}>
                    <a href="#">
                       {
                        theme == "light" ? (
                            <img src="/images/logo.svg" alt="" />
                        ) : (
                            <img src="/images/logo__white.png" alt="" />
                        )
                       }
                        <p>швейное производство детской и подростковой одежды</p>
                    </a>
                </div>
                <div className={scss.right}>
                    <a href="#">детские</a>
                    <a href="#">подростковые</a>
                </div>
                <ThemeSwitcher />
            </div>
        </div>
    )
}

export default Header