
import style from "./layout.module.css"
import Link from "next/link";
import Navbar from "./Navbar/Navbar"

const Layout = ({children}) =>{
  return(
    <div className={style.layout}>
      <Navbar />

      {children}
    </div>
  )
}

export default Layout;