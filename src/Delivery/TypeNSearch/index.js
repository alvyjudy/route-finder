import React, {useState, useRef} from "react";

import useEffect from "./useEffectSkipFirst";
import searchAddress from "./searchAddress";
import SearchingForResult from "./SearchingForResult";
import SearchResult from "./SearchResult";

import $s from "./index.scss";

const TypeNSearch = (props) => {
  //this allows me to grab the text value from its parent 
  //by passing it the returned object from a useRef
  const valueRef = props.valueRef || {} 

  const [typed, setTyped] = useState("");
  const [searching, setSearching] = useState(false);
  const [results, setResults] = useState([]);
  const [showResult, setShow] = useState(false);
  const [selected, setSelected] = useState(false);



  const focusOnInput = e => {
    if (typed) {
      setShow(false);
    }
  }

  const startTyping = e => {
    setSelected(false);
    setTyped(e.target.value);
  }

  const clickDelete = e => {
    setShow(false);
    setTyped("");
  }

  useEffect(()=>{//modified useEffect, does not run initial render
    if (selected) {
      valueRef.current = typed;
    }
  }, [selected])

  useEffect(()=>{ //this is a modified useEffect hook that does not run on initial render check import
    if (!typed || selected) {
      setResults([]);
      setSearching(false);
      setShow(false);
      return undefined;
    }

    const timeoutId = setTimeout(()=>{
      console.log("this should not explode");
      setSearching(true);
      setShow(true);
      searchAddress(typed)
        .then((res)=>{
          setResults(res);
          setSearching(false);
        })
        .catch(e=>{
          console.log("Something's wrong", e);
          setSearching(false);
        })
    }, 500);
    return () => {
      clearTimeout(timeoutId);
      setSearching(false);
      setResults([]);
    };
  }, [typed])

  return (
    <div className={props.className} data-cy={props["data-cy"]}>

      <div className={$s.InputFieldBox}>

        <input className={$s.InputField} 
          onChange={startTyping} value={typed}
          onFocus={focusOnInput}
          placeholder={props.whatToType || "Don't forget to specify label"}/>
        
        {typed && <button className={$s.Delete} onClick={clickDelete}>X</button>}
      </div>

      <div className={$s.ResultBoxAnchor}>
          {showResult && 
          
          <div className={$s.ResultBox}>
            {searching && <SearchingForResult/>}
            
            {results.length === 0 || (
              <SearchResult results={results} setters={{setTyped, setShow, setSelected}} />
            )}

          </div>}
        
        
      </div>

    </div>
   
  )
}

export default TypeNSearch;