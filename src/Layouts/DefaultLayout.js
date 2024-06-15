import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

export default function DefaultLayout({children}) {
  return (
    <>
      <Header/>
      {children}
      <Footer/>
    </>
  )
}