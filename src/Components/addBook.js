import React, { useState } from "react";

export default function AddBook(props) {
  const [genre, setGenre] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [coverimg, setCoverimg] = useState("");
  const [pirate_link, setPirate_link] = useState("");
  const [summary, setSummary] = useState("");

  const addBillHandler = () => {
    //adding shit to the bill list
    fetch("https://dead-tan-beaver-robe.cyclic.app/addbook", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        genre: genre,
        name: name,
        author: author,
        coverimg: coverimg,
        pirate_link: pirate_link,
        summary: summary,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    //updating the bill list
    setTimeout(() => {
      fetch("https://dead-tan-beaver-robe.cyclic.app/getbooklist", {
        method: "get",
        mode: "cors",
      })
        .then((res) => res.json())
        .then((data) => {
          data = data.reverse();
          props.setBillist(data);
        });
    }, 2000);

    //clearing out them textboxes
    document.getElementById("billtitle").value = "";
    document.getElementById("billbody").value = "";
  };

  return (
    <div className="AddBillsWalaDiv">
      Add a Book: <br />
      <br />
      <input
        type="text"
        name="Title"
        id="billtitle"
        className="addbill-title"
        placeholder="Book Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="Title"
        id="billtitle"
        className="addbill-title"
        placeholder="Book Genre"
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="text"
        name="Title"
        id="billtitle"
        className="addbill-title"
        placeholder="Book Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        name="Title"
        id="billtitle"
        className="addbill-title"
        placeholder="Book Cover Image (url)"
        onChange={(e) => setCoverimg(e.target.value)}
      />
      <input
        type="text"
        name="Title"
        id="billtitle"
        className="addbill-title"
        placeholder="Pirate Link"
        onChange={(e) => setPirate_link(e.target.value)}
      />
      <input
        type="text"
        name="Body"
        id="billbody"
        className="addbill-title"
        placeholder="Summary"
        onChange={(e) => setSummary(e.target.value)}
      />
      <br />
      <button className="addbillhandler" onClick={addBillHandler}>
        Add
      </button>
    </div>
  );
}
