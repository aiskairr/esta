import scss from "./Header.module.scss"

function Header() {
  return (
    <div className={scss.header}>
        <div className={scss.header_w + " container"}>
            <div className={scss.left}>
                <a href="#">
                    <img src="/images/logo.svg" alt="" />
                    <p>швейное производство детской и подростковой одежды</p>
                </a>
            </div>
            <div className={scss.right}>
                <a href="#">детские</a>
                <a href="#">подростковые</a>
                <button>burger</button>
            </div>
        </div>
    </div>
  )
}

export default Header