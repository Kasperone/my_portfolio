import { Outlet } from "react-router-dom"
import Sidebar from "../Sidebar"
import "./index.scss"

console.log("Layout Start")

const Layout = () => {
	return (
		<div className='App'>
			<div className='page'>
				<Sidebar />
				<Outlet />
			</div>
		</div>
	)
}
console.log("Layout End")
export default Layout
