import React from 'react';
import FAQItem from './item/faqItem';
import styles from './faq.module.scss';

const FAQ = ({ title, data, isNum }) => {
    return (
        <div className="container">
            <div className={`${styles.faq}`}>
                <div className={styles.text__block}>
                    <h2>{title}</h2>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.items__cont}>
                    {data.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            answer2={item.answer2}
                            answer3={item.answer3}
                            answer4={item.answer4}
                            answer5={item.answer5}
                            answer6={item.answer6}
                            index={index}
                            isNum={isNum}
                            list={item.list}
                            listTitle={item.listTitle}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;