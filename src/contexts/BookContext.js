import React, { createContext, useReducer } from 'react';
import { bookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();

export default function BookContextProvider(props) {
  const [books, dispatch] = useReducer(bookReducer, []);

  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}
