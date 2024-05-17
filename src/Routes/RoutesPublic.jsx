import { Routes, Route } from 'react-router-dom'
import App from '../App.jsx'

const RoutesPublic = () => {
  return (
    <>
    
     <Routes>

         <Route path='/' element={ <App /> } />
         <Route path='/*' element={ <App /> } />

     </Routes>
    
    </>
  )
}

export default RoutesPublic