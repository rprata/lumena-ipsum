import styles from '../styles/components/Header.module.css'

const Header = () => {
  return(
    <div className={styles.container}>
      <img src='/imgs/lumena.jpg' alt='Lumenês'/>
      <div> 
        <h1>Lumenês</h1>
        <p>Um lorem ipsum fenotipicamente eficaz</p>
      </div>
   
    </div>
  )
}

export default Header