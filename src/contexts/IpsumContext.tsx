import { createContext, ReactNode, useEffect, useState } from 'react'
import { useToasts } from 'react-toast-notifications'

import ipsum from '../../ipsum.json'

interface IpsumProps {
  children: ReactNode
}

interface IpsumContextData {
  paragraphs: number
  ipsumText: JSX.Element
  handleParagraphs: (event: React.ChangeEvent<HTMLInputElement>) => void
  generateIpsum: () => void
  copyIpsum: () => void
}

export const IpsumContext = createContext({} as IpsumContextData)

export const IpsumContextProvider = ({
  children
}: IpsumProps): JSX.Element => {

  const [ipsumText, setIpsumText] = useState(null)
  const [paragraphs, setParagraphs] = useState(1)
  
  const quotes: string[] = []

  const { addToast } = useToasts()

  const generateQuote = (): string => {
    const firstIndex = Math.floor(Math.random() * ipsum.first.length)
    const first = ipsum.first[firstIndex].text

    const secondIndex = Math.floor(Math.random() * ipsum.second.length)
    const second = ipsum.second[secondIndex].text

    const thirdIndex = Math.floor(Math.random() * ipsum.third.length)
    const third = ipsum.third[thirdIndex].text

    return `${first} ${second} ${third}. `
  }

  const generateBlock = () => {
    let block = ''
    for(let i = 0; i < 3; i++) {
      block += generateQuote()
    }
    quotes.push(block)
  }

  const handleParagraphs = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const num = Number(event.target.value)
    setParagraphs(num  < 100 ? num : 100)
  }

  useEffect(() => {
    generateBlock()
    setIpsumText(quotes.map((quote, index) => (
      <span key={index}>
        {quote}
      </span>
    )))
  }, [])

  const generateIpsum = (): void => {
    for (let i = 0; i < paragraphs; i++) {
      generateBlock()
    }
    setIpsumText(quotes.map((quote, index) => (
      <span key={index}>
        {quote}
        </span>
      )))
  }

  const copyIpsum = (): void => {
    let text = ''
    ipsumText.map(e => {
      text += `${e.props.children}\n`
    })
    navigator.clipboard.writeText(text)
    addToast('O texto foi fenotipicamente copiado', {
      appearance: 'success',
      autoDismiss: true
    })
  }

  return(
    <IpsumContext.Provider 
    value={{ 
      paragraphs,
      ipsumText,
      handleParagraphs,
      generateIpsum,
      copyIpsum
    }}
    >
      { children }
    </IpsumContext.Provider>  
  )
}