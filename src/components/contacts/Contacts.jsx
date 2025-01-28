import scss from "./Contacts.module.scss";

function Contacts() {
  return (
    <div className={scss.contacts_w}>
      <div className={scss.images}>
        <img src="/images/1.jpg" alt="" />
        <img src="/images/2.jpg" alt="" />
        <img src="/images/3.jpg" alt="" />
      </div>
      <div className={scss.info}>
        <div style={{borderRight: "1px solid #FFE484"}}>
          <p className={scss.top}>Адрес</p>
          <p className={scss.bot}>г. Бишкек , ул. Курманалиева 52</p>
        </div>
        <div style={{borderRight: "1px solid #FFE484"}}>
          <p className={scss.top}>Контакты</p>
          <p className={scss.bot}>+996222149402</p>
        </div>
        <div>
          <p className={scss.top}>Режим работы</p>
          <p className={scss.bot}>09:00-18:00 пн-сб</p>
        </div>
      </div>
      <div className={scss.imgg}>
        <img src="/images/4.png" alt="" />
      </div>
    </div>
  );
}

export default Contacts;
