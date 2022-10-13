import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function UserNavItem(props) {
  const [open, setOpen] = useState(false);
  const { url } = props;

  return (
    <li className="nav-item">
      {url && (
        <a className="icon-button" href={url} target={url && "_blank"}>
          {props.icon}
        </a>
      )}

      {!url && (
        <Link className="icon-button" onClick={() => setOpen(!open)}>
          {props.icon}
        </Link>
      )}
      {open && props.children}
    </li>
  );
}
