import React, {useState} from "react";

const Header =()=>{
    const [activeItem, setActiveItem] = useState("Home");

    const handleActiveItem = (item, e) =>{
        e.preventDefault();
        setActiveItem(item);
    }

return(
    <div className="ui three item menu">
        <a className={activeItem == "Home" ? "active item": "item"} href="#" onClick={(e)=>handleActiveItem(e.target.innerText, e)}>Home</a>
        <a className={activeItem == "Count Tracker" ? "active item": "item"} href="a" onClick={(e)=>handleActiveItem(e.target.innerText, e)}>Count Tracker</a>
        <a className={activeItem == "Use Effect" ? "active item": "item"} href="b" onClick={(e)=>handleActiveItem(e.target.innerText, e)}>Use Effect</a>
    </div>
)
}

export default Header;