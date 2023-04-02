import React from "react";
import BookItem from "./BookItem";

export default function LibraryIteration(props) {
  return props.bookList.map((bookItem) => {
    return (
      <BookItem key={bookItem._id} bookItem={bookItem} srNo={props.bookList.indexOf(bookItem)} />
    );
  });
}
