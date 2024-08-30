import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './CallbackForm.module.scss';
import emailjs from 'emailjs-com';

const Modal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_3hlp1ma', 'template_6j8llbg', formData, 'b1U4VKwjsVjUVlshn')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Сообщение отправлено успешно!');
            }, (err) => {
                console.error('FAILED...', err);
                alert('Произошла ошибка при отправке сообщения.');
            });

        setFormData({
            name: '',
            phone: ''
        });

        onClose();
    };

    return ReactDOM.createPortal(
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2>Напиши сейчас и получи выгодное предложение</h2>
                <p>Получите профессиональную консультацию от наших менеджеров</p>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Имя"
                        className={styles.input}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Номер телефона"
                        className={styles.input}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className={styles.button}>Отправить</button>
                </form>
            </div>
        </div>,
        document.getElementById('modal-root') // Не забудьте добавить элемент с id "modal-root" в ваш index.html
    );
};

export default Modal;
