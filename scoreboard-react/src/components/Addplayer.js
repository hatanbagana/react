import React from "react";

function Addplayer(props) {
  return (
    <form onSubmit={props.function}>
      <input
        autoComplete="off"
        type="text"
        placeholder="Add new player"
        id="sdashunre"
      />
      <input type="submit" value={"Add Player"} />
    </form>
  );
}

export default Addplayer;
