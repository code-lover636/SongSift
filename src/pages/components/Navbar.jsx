import {useRef} from 'react'
import '../../styles/Navbar.scss'

import { FiHome, FiInfo, FiLogOut } from 'react-icons/fi';
import { FaRobot } from 'react-icons/fa';



const Navbar = ({page, setPage}) => {
  const homeref = useRef(0)
  const botref = useRef(1)
  const featureref = useRef(2)

  const makeActive = (pg, setPage) => {
    const links = [homeref,botref,featureref]
    setPage(pg);
    for(let i = 0; i < links.length; i++){
        i==pg? links[i].current.classList.add('active')
        :links[i].current.classList.remove('active')
    }
}
  return (
    <div className="navbar">
        <svg width="80" className="logo" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="40" fill="white" fill-opacity="0.2"/>
        <path d="M35 58C39.9706 58 44 53.9706 44 49C44 44.0294 39.9706 40 35 40C30.0294 40 26 44.0294 26 49C26 53.9706 30.0294 58 35 58Z" fill="#0085FF"/>
        <path d="M40 22V49H44V30L55 33V26L40 22Z" fill="#0085FF"/>
        </svg>


        <ul className="navbar__links">
            <li ref={homeref} onClick={()=>{makeActive(0, setPage)}} className="navbar__links-item active">
                <FiHome className="navbar__links-icon" />
                Home
            </li>
            <li ref={botref}  onClick={()=>{makeActive(1, setPage)}} className="navbar__links-item">
                <FaRobot className="navbar__links-icon" />
                Bot
            </li>
            <li ref={featureref}  onClick={()=>{makeActive(2, setPage)}} className="navbar__links-item">
                <FiInfo className="navbar__links-icon" />
                Recommender
            </li>
        </ul>
        <div className="navbar__logout">
        <button className="navbar__logout-button">
            <FiLogOut className="navbar__logout-icon" />
            Logout
        </button>
        </div>
    </div>
  )
}

export default Navbar
