import "./assets/css/font-awesome.min.css"
import './assets/css/elegant-icons.css'
import "./assets/css/magnific-popup.css"
import "./assets/css/nice-select.css"
import "./assets/css/owl.carousel.min.css"
import "./assets/css/slicknav.min.css"

import './sass/style.scss'
import { Outlet, useNavigation } from "react-router-dom"
import { MainLayout } from "./components/layout"
import PagePreloder from "./components/common/page-preloder"
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PAYPAL_CLIENT_ID } from "./constants"

function App() {

  const { state } = useNavigation()

  if (state === 'loading') return <PagePreloder />

  const initialOptions = {
    "client-id": PAYPAL_CLIENT_ID,
    currency: "USD",
    intent: "capture",
    "data-client-token": "abc123xyz==",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <MainLayout>
        <>
          <Outlet />
        </>
      </MainLayout>
    </ PayPalScriptProvider>
  )
}

export default App
