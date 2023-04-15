import React, { useContext } from "react";

// **Context
import { MainContext } from "../context/MainContext";

// **Chakra
import { Input, Box } from "@chakra-ui/react";

// **Axios
import axios from "axios";

function Search() {
  const { book, setBook, setBooks } = useContext(MainContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${book
          .toLowerCase()
          .replaceAll(" ", "-")}&key=AIzaSyB4N7z6rqF2cwz6nn5rfrShSSqQnFbQqYY`
      )
      .then((res) => setBooks(res.data.items));
  };

  return (
    <Box w={{ base: "50%", sm: "60%", md: "600px" }}>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          placeholder="Search..."
          variant="unstyled"
          w="100%"
          textAlign="center"
          borderRadius="15px"
        />
      </form>
    </Box>
  );
}

export default Search;
