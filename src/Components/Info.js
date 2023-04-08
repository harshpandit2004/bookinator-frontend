import React from "react";
function Info(props) {
  var lnk = props.pirate_link;
  return (
    <div>
      <div className="actualGyan">
        <p>
        Genre: {props.genre}
        </p>
        <p>
        Author: {props.author}
        </p>
        <p>
        Summary: {props.info}
        </p>
      </div>
      <a href={lnk}>
        <button className="PirateLink">(Pirate this book!)</button>
      </a>
    </div>
  );
}

export default Info;
