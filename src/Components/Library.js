import React from "react";
import LibraryIteration from "./LibraryIteration";

export default function Library(props) {
  return (
    <table className="bookList">
      <tr className="individual-bookHead">
        <th className="individual-bookHead">Serial Number</th>
        <th className="individual-bookHead">Name</th>
        <th className="individual-bookHead">Author</th>
        <th className="individual-bookHead">Genre</th>
        <th className="individual-bookHead">Pirate Link</th>
      </tr>
      <LibraryIteration bookList={props.bookList} />
    </table>
  );
}
