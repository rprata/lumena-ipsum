import styles from '../styles/components/Footer.module.css'

const Footer = () => {
  return(
    <div className={styles.container}>
      <a href='https://github.com/rprata/lumena-ipsum'>
        <img src='/icons/github.png' alt='github'/>
      </a>
      <p>© 2021 Renan Prata</p>
    </div>
  )
}

export default Footer