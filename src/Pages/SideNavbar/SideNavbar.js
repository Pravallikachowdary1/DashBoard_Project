import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideNavbar.css";
import { IconContext } from "react-icons";
import arrowRight from "../../Assests/Images/arrow.svg";

function SideNavbar() {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div
      onMouseOver={() => setSidebar(true)}
      onMouseLeave={() => setSidebar(false)}
    >
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="w-[100px] bg-[#000000] h-[1800px]"></div>
        <div className={`${sidebar ? "nav-menu active" : "nav-menu"} !p-3 `}>
          <div className="nav-menu-items mt-[50px]">
            {menu.map((item, i) => {
              return (
                <div key={i} >
                  <NavLink
                    className={`w-full flex justify-between items-center hover:bg-[#a4bcc5] px-3 p-2 text-sm lg:text-base font-semibold  h-[55px] text-[#ffffff] rounded-lg hover:text-[#fffff] mb-[20px]`}
                    to={item.url}
                  >
                    <span>{item.label}</span>
                    <img src={arrowRight} alt={`arrow`} />
                  </NavLink>
                </div>
              );
            })}
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default SideNavbar;

const menu = [
  { label: "DashBoard", url: "/dashboard", id: "" },
  { label: "Product", url: "/product", id: "" },
  { label: "Customer", url: "/customer", id: "" },
  { label: "Income", url: "/income", id: "" },
  { label: "Promote", url: "/promote", id: "" },
  { label: "Help", url: "/help", id: "" },
];
