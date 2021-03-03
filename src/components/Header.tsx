import styles from '../styles/components/Header.module.css'

const Header = () => {
  return(
    <div className={styles.container}>
      <img src='/imgs/lumena.jpg' alt='Lumena ipsum'/>
      <div> 
        <h1>Lumena Ipsum</h1>
        <p>Um lorem ipsum fenotipicamente eficaz</p>
      </div>
   
    </div>
  )
}

export default Header