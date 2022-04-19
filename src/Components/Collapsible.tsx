import React, { useState } from "react";
import { BiMinusCircle, BiPlusCircle } from "react-icons/bi";


const Collapsible = ({ title, children, className }: { title: string, children: React.ReactNode, className?:string }) => {
  
  const [isCollapsed, setCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setCollapsed(!isCollapsed);
    console.log("");
  };


  return (
    <div  className={`${className} ${isCollapsed ?  "" : "w-100"}` }>
      <div className="collapsible-item">
        <div className="collapsible-title d-flex">
          <h3 className="f-1">{title}</h3>
          <button onClick={handleToggleCollapse}>
            {isCollapsed ? <BiPlusCircle /> : <BiMinusCircle />}
          </button>
        </div>
        <div className={`collapsible-content ${isCollapsed ? "collapsed" : "mt-1 pb-1"}`}>{children}</div>
      </div>
    </div>
  );
};

export default Collapsible;