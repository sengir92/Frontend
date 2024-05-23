import React from "react";
import { useContext } from 'react';
import GeneralContext from '../context/GeneralContext';

function ListItem() {
  const {harca} = useContext(GeneralContext);
  return (
    <div>
        {harca.map((item) =>(
        <li key = {item.id}>
        {item.name} : {item.amount} TL
    </li>
        ))}
    </div>
  );
}

export default ListItem