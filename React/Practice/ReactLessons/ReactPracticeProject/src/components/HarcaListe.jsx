import ListItem from "./ListItem"
import Parag from "./Parag"
import React from "react"


function HarcaListe() {
  return (
    <div>
        <Parag title = "Harcama Listesi" />
        <ul>
         <ListItem />
        </ul>
    </div>
  )
}

export default HarcaListe