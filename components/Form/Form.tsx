import { Props } from '@/types/types';
import React from 'react';
import styles from './Form.module.scss'
import useForm from './Form.controller';

function Form({ 
  ruLang, 
  csrfToken 
}: Props & { csrfToken: string }) {

  const {
    loader,
    formTexts,
    form,
    formSubmit,
    errors,
    changeHandler,
    isSent,
    reSubmit
  } =  useForm(ruLang, csrfToken);

  return (
    <div 
      className={`
        ${styles['form__wrapper']} 
        ${loader && styles['form__wrapper--loader']}
      `}
    >
      {
        isSent
        ? (
          <div 
            className={`
              ${styles['form__answer']}
              ${isSent !== 'send success' && styles['form__answer--error']}
            `}
          >
            <h2>{formTexts.answerTitle}</h2>
            <p>{formTexts.answerText}</p>
            <button onClick={reSubmit}>
              {formTexts.answerBtn}
            </button>
          </div>
        )
        : (
          <form 
            className={styles['form']}
            onSubmit={formSubmit}
          >
            <label className={styles['contact']}>
              <span>{formTexts.name.label}</span>
              <input 
                type='text' 
                placeholder={formTexts.name.placeholder}
                value={form.name}
                onChange={(e) => changeHandler({name: e.target.value})} 
                required
              />
              <span style={{color: 'red'}}>{errors.name}</span>
            </label>
            <label className={styles['contact']}>
              <span>{formTexts.email.label}</span>
              <input 
                type='email' 
                placeholder={formTexts.email.placeholder} 
                value={form.email}
                onChange={(e) => changeHandler({email: e.target.value})} 
                required
              />
              <span style={{color: 'red'}}>{errors.email}</span>
            </label>
            <label className={styles['message']}>
              <span>{formTexts.message.label}</span>
              <textarea 
                placeholder={formTexts.message.placeholder} 
                value={form.message}
                onChange={(e) => changeHandler({message: e.target.value})} 
              />
              <span style={{color: 'red'}}>{errors.message}</span>
            </label>
            <button 
              className={styles['submit']}
              disabled={loader}
            >
              {formTexts.btn}
            </button>
          </form>
        )
      }
      
    </div>
  );
}

export default Form;