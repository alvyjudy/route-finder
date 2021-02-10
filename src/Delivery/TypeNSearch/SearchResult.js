import React, {useContext} from "react";

import $s from "./SearchResult.scss";

const SearchResult = (props) => {
  const items = props.results.slice(0, 4);

  const {setShow, setTyped, setSelected} = props.setters;
  const whenClicked = (item) => () => {
    setShow(false);
    setTyped(item);
    setSelected(true);
  }

  return (
    <div className={$s.Entries} data-cy={props['data-cy']}>
    {items.map((item, i)=>(
      <div className={$s.Entry} key={i} 
        onClick={whenClicked(item)}

      ><p>{item}</p></div>
    
    ))}
    </div>
  )
}

export default SearchResult;