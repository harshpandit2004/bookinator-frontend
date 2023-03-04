import React, { useState } from "react";
import "./App.css";
import Book from "./Components/book";
import AddBook from "./Components/addBook";
//import Rover from "./Components/Rover";
import Navbar from "./Components/Navbar";

function App() {
  //variables
  const [genre, setGenre] = useState("");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [coverimg, setCoverimg] = useState("");
  const [pirate_link, setPirate_link] = useState("");
  const [summary, setSummary] = useState("");
  const [bookvisiblity, setbookVisiblity] = useState(false);
  const [addbookvisiblity, setaddbookVisiblity] = useState(false);

  //api caller
  const fetchDataHandler = () => {
    setbookVisiblity(true);
    fetch(
      //fetching the api via the link
      "https://dead-tan-beaver-robe.cyclic.app/getbooklist"
    )
      .then((response) => {
        //converting the data into a readable json file
        return response.json();
      })
      .then((data) => {
        //getting a random number
        var min = 1;
        var max = data.length;
        var rand = Math.trunc(min + Math.random() * (max - min));
        console.log(rand);

        console.log(data);
        //choosing the book
        var bookobj = data[rand];
        setGenre(bookobj.genre);
        setName(bookobj.name);
        setAuthor(bookobj.author);
        setCoverimg(bookobj.coverimg);
        var coverimG = bookobj.coverimg;
        console.log(coverimG);
        setPirate_link(bookobj.pirate_link);
        setSummary(bookobj.summary);
      });
  };

  const addDataHandler = () => {
    setaddbookVisiblity(true);
  };

  const revert = () => {
    setbookVisiblity(false);
    setaddbookVisiblity(false);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="App-Header">
        {bookvisiblity === false && addbookvisiblity === false ? (
          <div>
            <section>
              I am a book recommendation engine called <br />
              <br />✨ Bookinator!! ✨
            </section>
            <button onClick={fetchDataHandler}>Reccomend Me A Book</button>
            <br />
            <button onClick={addDataHandler}>Add Book to the Library</button>
          </div>
        ) : (
          <>
            {bookvisiblity === true && addbookvisiblity === false ? (
              <div>
                <Book
                  coverimg={coverimg}
                  name={name}
                  summary={summary}
                  author={author}
                  genre={genre}
                  pirate_link={pirate_link}
                />
                <button onClick={revert}>Return</button>
              </div>
            ) : (
              <div>
                <AddBook />
                <button onClick={revert}>Return</button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
