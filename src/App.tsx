import "./assets/css/font-awesome.min.css"
import './assets/css/elegant-icons.css'
import "./assets/css/magnific-popup.css"
import "./assets/css/nice-select.css"
import "./assets/css/owl.carousel.min.css"
import "./assets/css/slicknav.min.css"

import './sass/style.scss'
import { PageRouters } from './routes';
import { Outlet } from "react-router-dom"
function App() {

  return (<>
    <PageRouters />
    <Outlet />
  </>


  )
}

export default App
