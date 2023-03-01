import React from "react";
function Info(props) {
  var lnk = props.pirate_link;
  return (
    <div className="actualGyan">
      Genre: {props.genre}
      {<br />}
      Author: {props.author}
      {<br />}
      Summary: {props.info}
      {<br />}
      <a href={lnk}>
      <button>Pirate this Book!</button></a>
    </div>
  );
}

export default Info;
