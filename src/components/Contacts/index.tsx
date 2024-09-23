import styles from "./Contacts.module.sass";

export function Contacts() {
  const contactsArr = [
    {icon: "./IconAddress.svg", value: "Санкт-Петербург" },
    {icon: './IconGit.svg', value: 'Ivan-Merkuryev', link: 'https://github.com/Ivan-Merkuryev' },
    {icon: './IconEmail.svg', value: 'merkuryevii@yandex.ru', link: 'mailto:merkuryevii@yandex.ru' },
    {icon: './IconTelegram.svg', value: '@m_e_r_k_u_r_y_i', link: 'https://t.me/m_e_r_k_u_r_y_i' },
  ];
  return (
    <div className={styles.contacts}>
      {contactsArr.map((el, index) => (
        <div key={index} className={styles.contact}>
            <a href={el.link} target="_blank" className={styles.link}>
                <img src={el.icon} alt="" />
                <p>{el.value}</p>
            </a>
        </div>
      ))}
    </div>
  );
}