import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Animal from '../pages/src/Animal'
import Animals from '../public/animals.json'
export default function Home() {
  
    const animalMaker = pet => <Animal type={pet.type} state={pet.state} img={pet.img} adoption_fee={pet.adoption_fee}/>
    const thinkersOnly = pet => pet.state == "thinking"
    const thinkers = Animals.filter(thinkersOnly)
    const thinkersFormatted =thinkers.map(animalMaker)
    const sumTogether = (x,y) => x + y.adoption_fee
    const totalFeesThinkers = thinkers.reduce(sumTogether,0)
  return (
    <div class = "grid place-items-center bg-green-300">
      <p  class = "font-bold bg-8xl">Total Fees: {totalFeesThinkers}</p>
      <p class = "italic">{thinkersFormatted}</p>
    </div>
  )
  
}
