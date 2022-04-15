import React from "react";

export default function Item(props) {
//   console.log(props.value);
//   console.log('asdas');
  return (

    <>
      {props.value.map((e) => {
        return (
          <div className="item" key={e} onClick={() => props.func(e)}>
            {e}
          </div>
        );
      })}
    </>
  );
}
