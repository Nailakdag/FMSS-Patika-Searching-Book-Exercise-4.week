import { createContext, useState } from "react";

export const MainContext = createContext();

export default function MainProvider({ children }) {
  const [book, setBook] = useState("");
  const [books, setBooks] = useState("");

  const maindata = {
    book,
    setBook,
    books,
    setBooks,
  };
  return (
    <MainContext.Provider value={maindata}>{children}</MainContext.Provider>
  );
}
