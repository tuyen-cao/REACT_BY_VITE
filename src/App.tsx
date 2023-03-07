import "./assets/css/fontAwesome.min.css"
import './assets/css/elegantIcons.css'
import "./assets/css/magnificPopup.css"
import "./assets/css/niceSelect.css"
import "./assets/css/owl.carousel.min.css"
import "./assets/css/slicknav.min.css"

import './sass/style.scss'
import { Outlet, useNavigation } from "react-router-dom"
import { MainLayout } from "./components/layout"
import { PagePreloder } from "./components/common"

function App() {

  const { state } = useNavigation()

  if (state === 'loading') return <PagePreloder />

  return (
    <MainLayout>
      <>
        <Outlet />
      </>
    </MainLayout>
  )
}

export default App
