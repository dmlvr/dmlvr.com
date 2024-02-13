import Head from 'next/head';
import React from 'react';
import styles from './Contacts.module.scss';
import { Props } from '@/types/types';
import useContacts from './Contacts.controller';
import Image from 'next/image'
import ym from 'react-yandex-metrika';
import Link from 'next/link';

function Contacts({ ruLang, darkTheme }: Props) {

  const { 
    texts,
    socialList,
    formTexts,
    form,
    setForm,
    formSubmit,
    errors,
    cleanErrors,
    changeHandler
  } = useContacts(ruLang);
  return (
    <>
    <Head>
      <title>{texts.title}</title>
    </Head>
    <main className={styles.container}>
      <div 
        className={styles.image}
        style={{
          borderRadius: '16px',
          boxShadow: darkTheme ? 'none' : '0 5px 25px rgba(0,0,0,.12)'
        }} 
      >
        <Image alt={texts.title} width={500} height={800} src={'/img/contacts.jpg'} />
      </div>
      <div className={styles.content}>
        <h1>{texts.title}</h1>
        <ul className={styles.social}>
          {socialList.map((item) => (
            <li key={item.name}>
            <Link 
              className={`${styles.socialLink} ${item.adress && styles.socialLink__email}`}
              href={item.url}
              onClick={() => ym('reachGoal', item.name)}
            >
              <svg width="50" height="50" viewBox="0 0 25 25">
                <use xlinkHref={`./img/sprite.svg#${item.name}`} />
              </svg>
              <span>{item.adress ? item.adress : item.name}</span>
            </Link>
            </li>
          ))}
        </ul>
        <p>{texts.paragraph}</p>
        <form 
          className={styles.form}
          onSubmit={formSubmit}
        >
          <label className={styles.contact}>
            <span>{formTexts.name.label}</span>
            <input 
              type='text' 
              placeholder={formTexts.name.placeholder}
              value={form.name}
              // onChange={(e) => setForm((prev) => ({...prev, name: e.target.value}))} 
              onChange={(e) => changeHandler({name: e.target.value})} 
            />
            <span style={{color: 'red'}}>{errors.name}</span>
          </label>
          <label className={styles.contact}>
            <span>{formTexts.email.label}</span>
            <input 
              type='email' 
              placeholder={formTexts.email.placeholder} 
              value={form.email}
              // onChange={(e) => setForm((prev) => ({...prev, email: e.target.value}))} 
              onChange={(e) => changeHandler({email: e.target.value})} 
            />
           <span style={{color: 'red'}}>{errors.email}</span>
          </label>
          <label className={styles.message}>
            <span>{formTexts.message.label}</span>
            <textarea 
              placeholder={formTexts.message.placeholder} 
              value={form.message}
              // onChange={(e) => setForm((prev) => ({...prev, message: e.target.value}))} 
              onChange={(e) => changeHandler({message: e.target.value})} 
            />
            <span style={{color: 'red'}}>{errors.message}</span>
          </label>
          <button className={styles.submit}>{formTexts.btn}</button>
        </form>
      </div>
    </main>
  </>
  );
}

export default Contacts;