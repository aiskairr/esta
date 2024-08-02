import React, { useState } from 'react';
import styles from './faqItem.module.scss';

const FAQItem = ({ question, answer, index, isNum }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.faqItem}>
            {
                isNum ? (
                    <div className={isOpen ? styles.nums__cont : styles.nums__cont_inactive}>
                        <div className={isOpen ? styles.nums : styles.nums_inactive}>{index + 1}</div>
                        <div className={isOpen ? styles.question : styles.inactiveQuestion} onClick={() => setIsOpen(!isOpen)}>
                            <p className={styles.qTitle}>{question}</p>
                            <img
                                src='/images/arrowFaq.svg'
                                className={isOpen ? styles.activeArr : styles.inactiveArr}
                                width="24px"
                                height="36px"
                            />
                        </div>
                    </div>
                ) : (
                    <div className={isOpen ? styles.question : styles.inactiveQuestion} onClick={() => setIsOpen(!isOpen)}>
                        <p className={styles.qTitle}>{question}</p>
                        <img src='/images/arrowFaq.svg' className={isOpen ? styles.activeArr : styles.inactiveArr} />
                    </div>
                )
            }
            {isOpen &&
                <div className={styles.ansCont}>
                    <div className={isNum ? styles.answerC : styles.answer}>
                        <p> {answer}</p>
                    </div>
                </div>
            }
        </div>
    );
};

export default FAQItem;