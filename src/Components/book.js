import React, { useState } from "react";
import Info from "./Info";
import "../App.css";

export default function Book(props) {
  const [information, setInformation] = useState();
  const [visibilityHandler, setVisibliltyHandler] = useState(false);
  const [author, setAuthor] = useState("");

  const moreInformationHandler = () => {
    setInformation(props.summary);
    setAuthor(props.author);
    setVisibliltyHandler(true);
  };
  const hideInformationHandler = () => {
    setVisibliltyHandler(false);
  };

  return (
    <div>
      <section>
        Book Recommendation:
        {props.name} {<br />}
        {<br />}
        {<br />}
        <div className="bookcover">
          <img className="bookcover" src={props.coverimg} alt="Loading..." />
        </div>
      </section>
      <div className="GyanWalaDiv">
        {visibilityHandler === false ? (
          <button onClick={moreInformationHandler}>Learn more</button>
        ) : (
          <button onClick={hideInformationHandler}>Hide Information</button>
        )}
        {visibilityHandler === true ? (
          <Info genre = {props.genre} info={information} author={author} pirate_link={props.pirate_link} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
