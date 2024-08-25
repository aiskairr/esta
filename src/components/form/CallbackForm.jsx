import React, { useState } from 'react';
import styles from './CallbackForm.module.scss';
import emailjs from 'emailjs-com';

const CallBackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Замените 'your_service_id', 'your_template_id', 'your_user_id' на соответствующие значения из вашей EmailJS учетной записи.
        emailjs.send('service_3hlp1ma', 'template_6j8llbg', formData, 'b1U4VKwjsVjUVlshn')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Сообщение отправлено успешно!');
            }, (err) => {
                console.error('FAILED...', err);
                alert('Произошла ошибка при отправке сообщения.');
            });

        // Очищаем форму после отправки
        setFormData({
            name: '',
            phone: ''
        });
    };
    return (
        <div className={styles.formContainer}>
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
    );
};

export default CallBackForm;