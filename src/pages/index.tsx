import { spawn } from 'child_process';
import type { NextPage } from 'next'
import Titulo from "../ui/components/Titulo/Titulo";


const Home: NextPage = () => {
  return (
    <div>
      <Titulo 
      titulo="  " 
      subititulo={
        <span>
          Com um pequeno valor mensal, você <br />
          pode <strong>adotar um pet</strong>
        </span>
      }/>
    </div>
  )
}

export default Home
