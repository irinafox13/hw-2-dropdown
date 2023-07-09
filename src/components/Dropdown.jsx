import { useState } from "react";
import DropdownList from './DropdownList';

const Dropdown = () => {
    const [toggle, setToggle] = useState(true);
    const toggleOpen = () => {
        return setToggle(!toggle);
    }
    
    return <>
        <div className="container">
            <div className={"dropdown-wrapper " + (toggle ? 'open' : '')}>
            <button className="btn" onClick={() => toggleOpen()}>
                <span>Account Settings</span>
                <i className="material-icons">public</i>
            </button>
            <ul className="dropdown">
                <DropdownList />
            </ul>
            </div>
        </div>
    </>
}

export default Dropdown