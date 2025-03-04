import React from "react";

const NavVarLink = ({ route }) => {
  const { path, name } = route;
  return (
    <li className="mr-3 p-3">
      <a href={path}>{name}</a>
    </li>
  );
};

export default NavVarLink;
