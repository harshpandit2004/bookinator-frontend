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
      method: "Post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        genre,
        name,
        author,
        coverimg,
        pirate_link,
        summary,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    //clearing out them textboxes
    // document.getElementById("bookname").value = "";
    // document.getElementById("bookgenre").value = "";
    // document.getElementById("bookauthor").value = "";
    // document.getElementById("bookcover").value = "";
    // document.getElementById("bookpirate").value = "";
    // document.getElementById("booksummary").value = "";
  };

  return (
    <div className="AddBillsWalaDiv">
      Add a Book: <br />
      <br />
      <input
        type="text"
        name="Title"
        id="bookname"
        className="addbook"
        placeholder="Book Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="Title"
        id="bookgenre"
        className="addbook"
        placeholder="Book Genre"
        onChange={(e) => setGenre(e.target.value)}
      />
      <input
        type="text"
        name="Title"
        id="bookauthor"
        className="addbook"
        placeholder="Book Author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        name="Title"
        id="bookcover"
        className="addbook"
        placeholder="Book Cover Image (url)"
        onChange={(e) => setCoverimg(e.target.value)}
      />
      <input
        type="text"
        name="Title"
        id="bookpirate"
        className="addbook"
        placeholder="Pirate Link"
        onChange={(e) => setPirate_link(e.target.value)}
      />
      <input
        type="text"
        name="Body"
        id="booksummary"
        className="addbook"
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
