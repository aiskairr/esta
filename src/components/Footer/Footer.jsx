import scss from "./Footer.module.scss";

function Footer() {
  return (
    <div className={scss.footer_w}>
      <div className={scss.footer_w_cont + " container"}>
        <div className={scss.left}>
          <p></p>
          <p></p>
          <div>
            <input type="text" />
            <input type="text" />
          </div>
          <p></p>
          <p></p>
          <div className={scss.social}></div>
        </div>
        <div className={scss.right}>
          <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
