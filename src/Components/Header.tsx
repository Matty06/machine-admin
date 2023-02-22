import {Link } from "react-router-dom";
import '../styles/header.scss'

function Header() {

return (
        <header className="header">
			<Link to={'/'} className="header__logo">Logo</Link>
			
			<Link to={'/history-all'} className="header__link">
				<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0_348_124)">
					<path d="M7.5 13.75C10.9518 13.75 13.75 10.9518 13.75 7.5C13.75 4.04822 10.9518 1.25 7.5 1.25C4.04822 1.25 1.25 4.04822 1.25 7.5C1.25 10.9518 4.04822 13.75 7.5 13.75Z" stroke="#3369E6" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M7.5 3.75V7.5L10 8.75" stroke="#3369E6" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
					</g>
				</svg> 
				
				Historie závad
			</Link>
        </header>
	)
}

export default Header
