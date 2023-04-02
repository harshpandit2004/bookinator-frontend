import React from "react";

export default function BookItem(props) {
  return (
    <tr className="individual-book">
      <td>{props.srNo}</td>
      <td>{props.bookItem.name}</td>
      <td>{props.bookItem.author}</td>
      <td>{props.bookItem.genre}</td>
      <td>
        <a href="props.bookItem.pirate_link">Download</a>
      </td>
    </tr>
  );
}
