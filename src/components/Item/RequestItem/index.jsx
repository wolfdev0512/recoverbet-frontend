import React from "react";

import "./style.css";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ initialLabel, label, hideIcon, onClose, container, ...rest }) => {

  const [isDropdown, setIsDropdown] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    const windowClick = (e) => {
      if (!dropdownRef.current.contains(e.target)) {
        setIsDropdown(false);
      }
    }

    window.addEventListener("click", windowClick);

    return () => window.removeEventListener("click", windowClick);
  }, []);

  return (
    <div ref={dropdownRef} className="dropdown">
      <div className="dropdown-picker" onClick={() => setIsDropdown(!isDropdown)}>
        <span>
          {label === undefined
            ? (initialLabel !== undefined ? initialLabel : "Select the item")
            : label}
        </span>
        {!hideIcon ? <IoIosArrowDown /> : null}
      </div>
      {container !== undefined && (
        <div className={`dropdown-box ${isDropdown ? 'dropdown-box-show' : 'dropdown-box-hide'}`}>
          {container(() => setIsDropdown(false))}
        </div>
      )}
    </div>
  )
}

export default Dropdown;
