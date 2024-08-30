import { useTheme } from "../mode/useTheme"
import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher"
import scss from "./Header.module.scss"

function Header() {
    const { theme } = useTheme()

    console.log(theme)
    return (
        <div className={scss.header}>
            <div className={scss.header_w + " container"}>
                <div className={scss.left}>
                    <a href="#">
                       {
                        theme == "light" ? (
                            <img src="/images/logo.svg" alt="" />
                        ) : theme == "dark" ? (
                            <img src="/images/logo__white.png" alt="" />
                        ) : (
                            <img src="/images/logo.svg" alt="" />
                        )
                       }
                        <p>швейное производство детской и подростковой одежды</p>
                    </a>
                </div>
                <ThemeSwitcher />
            </div>
        </div>
    )
}

export default Header