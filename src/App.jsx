import './app.css'
import { Outlet } from 'react-router-dom'
import Menu from './components/menu'
import Rodape from './components/Rodape'

function app() {
    return (
        <>
          <Outlet/>
          <Menu/>
          <Rodape/>
        </>
       
     )
}

export default app