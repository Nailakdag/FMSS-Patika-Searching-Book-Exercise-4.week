import { useContext } from "react";

// Taking book's name from Url and navigate is for back button
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// **Context
import { MainContext } from "../context/MainContext";

// **Chakra Components
import {
  Button,
  Image,
  Grid,
  Box,
  GridItem,
  Flex,
  Text,
} from "@chakra-ui/react";

// **Icons
import { IoArrowBackOutline } from "react-icons/io5";

function BookInfo() {
  const { books } = useContext(MainContext);
  const { title } = useParams();
  const router = useNavigate();

  // Function that takes book's name and compare it with the title in the books array

  const bookInfo = books?.find(
    (data) =>
      data?.volumeInfo?.title.toLowerCase().replaceAll(" ", "-") === title
  );

  console.log(bookInfo);
  const handleBack = () => {
    router("/");
  };

  return (
    <>
      <Flex
        display="flex"
        flexDirection="column"
        p="10px"
        justifyContent="center"
        alignItems="center"
      >
        <Box w="full" display="flex" justifyContent="center" mb="10px">
          <Button
            bgColor="black"
            p="0px 30px"
            color="white"
            borderRadius="12px"
            width="150px"
            onClick={handleBack}
          >
            <IoArrowBackOutline size="20px" />
          </Button>
        </Box>
        <Grid placeItems="center" width="100%">
          <GridItem>
            <Image
              src={bookInfo?.volumeInfo?.imageLinks?.thumbnail}
              minHeight={{ base: "350px", sm: "400px", "2xl": "600px" }}
              minWidth={{ base: "280px", sm: "400px", "2xl": "600px" }}
              maxHeight={{ base: "350px", sm: "400px", "2xl": "600px" }}
              maxWidth={{ base: "280px", sm: "400px", "2xl": "600px" }}
              objectFit="contain"
              borderRadius="15px"
              mb={{ base: "3", sm: "0" }}
              mt={{
                base: "2",
                lg: "10px",
              }}
            ></Image>
          </GridItem>
        </Grid>
        <Box
          mt="3"
          maxW="500px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text
            as="p"
            fontSize={{ base: "20px", xl: "28px" }}
            fontWeight={600}
            mb="2"
            textAlign="center"
          >
            {bookInfo?.volumeInfo?.title}
          </Text>
          <Text as="p" fontSize="16px" mb="2" textAlign="center">
            {bookInfo?.volumeInfo?.authors?.join(" - ")}
          </Text>
          <Box minW="300px" paddingX="3">
            <Box display="flex" justifyContent="space-between" mt="5">
              <Text as="p" fontSize="13px" fontWeight="bold">
                Published Date:
              </Text>
              <Text as="p" fontSize="14px">
                {bookInfo?.volumeInfo.publishedDate}
              </Text>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Text as="h2" fontSize="16px" fontWeight="bold">
                Page Count:
              </Text>
              <Text as="p" fontSize="14px">
                {bookInfo?.volumeInfo.pageCount}
              </Text>
            </Box>
            <Box display="flex" justifyContent="space-between">
              <Text as="h2" fontSize="16px" fontWeight="bold">
                Sale Info:
              </Text>
              <Text as="p" fontSize="14px">
                {bookInfo?.saleInfo.saleability}
              </Text>
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default BookInfo;
