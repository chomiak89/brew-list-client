import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserNavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <Link href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </Link>
      {open && props.children}
    </li>
  );
}
