import styles from "./MainBlock.module.scss"

const MainBlock = () => {
    return (
        <div className="container">
            <div className={styles.wrapper}>
                <p className={styles.mainTextDesktop}>Швейное производство полного цикла по пошиву детской и подростковой одежды оптом в Кыргызстане</p>
                <div className={styles.footer}>
                    <div className={styles.info}>
                        <div className={styles.info__element}>
                            <p className={styles.title}>+20 000</p>
                            <p className={styles.desc}>единиц  одежды в месяц</p>
                        </div>
                        <div className={styles.info__element}>
                            <p className={styles.title}>+5 000</p>
                            <p className={styles.desc}>единиц в неделю</p>
                        </div>
                    </div>
                    <button>Оформить заявку</button>
                </div>
            </div>
            <p className={styles.mainText}>Швейное производство полного цикла по пошиву детской и подростковой одежды оптом в Кыргызстане</p>
        </div>
    )
}

export default MainBlock;