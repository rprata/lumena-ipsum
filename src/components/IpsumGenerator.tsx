import { useContext } from 'react'
import { IpsumContext } from '../contexts/IpsumContext'
import styles from '../styles/components/IpsumGenerator.module.css'

const IpsumGenerator = () => {
  const { 
    paragraphs, 
    ipsumText,
    handleParagraphs,
    generateIpsum,
    copyIpsum
  } = useContext(IpsumContext)


  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <p>Quantas parágrafos são necessários? </p>
        <input 
          type='number'
          value={paragraphs} 
          min='1' 
          max='100'
          onChange={handleParagraphs}
        >
        </input>
        <button
          type='button'
          onClick={generateIpsum}>
            Iniciar itinerário
        </button>
      </div>
      <section 
        contentEditable={false}> 
        {ipsumText}
      </section>
      <button 
        type='button'
        className={styles.copyButton}
        onClick={copyIpsum}>
          Copie sua jornada
      </button>
    </div>
  )
}

export default IpsumGenerator