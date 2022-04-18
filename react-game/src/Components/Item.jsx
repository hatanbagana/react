import React from "react";

export default function Item(props) {


  return (
    <div className="item" key={props.data} onClick={() => props.func(props.data,props.rowIndex,props.colIndex)}>
      {props.data}
    </div>
  );
}
