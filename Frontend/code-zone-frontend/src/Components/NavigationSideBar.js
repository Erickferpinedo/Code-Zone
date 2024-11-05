import {NavLink} from "react-router-dom"
import { FiHome } from "react-icons/fi";
import { RiAddCircleLine } from "react-icons/ri";
import { MdOutlineFolder } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";

import "./NavigationSideBar.css"
function NavigationSideBar() {
    return(
        <>
            <div>
                <div className={"navbarHeader"}>
                    <h3><LuBrainCircuit /> Code Zone</h3>
                </div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/"><FiHome /> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/log-problem"><RiAddCircleLine /> Log Problem</NavLink>
                        </li>
                        <li>
                            <NavLink to="/view-logs"><MdOutlineFolder /> View Logs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/notifications"><FaRegBell /> Notifications</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about-us"><FiBook /> About Us</NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings"><IoSettingsOutline /> Settings</NavLink>
                        </li>
                        <li>
                            <a><TbLogout /> Log Out</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export {NavigationSideBar}