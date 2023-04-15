// **Context
import { useContext } from "react";
import { MainContext } from "../context/MainContext";

// **Router
import { Link } from "react-router-dom";

// **Chakra
import {
  Grid,
  Card,
  CardBody,
  Image,
  CardHeader,
  Text,
  GridItem,
  CardFooter,
} from "@chakra-ui/react";

function SearchPrev() {
  const { books } = useContext(MainContext);

  return (
    <>
      {books ? (
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3,1fr)",
          }}
          bgColor="transparent"
          placeItems="center"
        >
          {books?.map((data) => {
            return (
              <GridItem key={data?.id}>
                <Link
                  to={`/${data?.volumeInfo?.title
                    .toLowerCase()
                    .replaceAll(" ", "-")}`}
                >
                  <Card
                    mt="4"
                    border="2px"
                    borderStyle="solid"
                    borderRadius="6px"
                    width={{ base: "250px", sm: "330px" }}
                    bgColor="transparent"
                    height={{ base: "350px", sm: "425px" }}
                  >
                    <CardHeader
                      minHeight="50px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      p="3"
                      borderBottom="1px solid"
                      height="auto"
                    >
                      <Text
                        as="h2"
                        size="md"
                        textAlign="center"
                        fontWeight="500"
                      >
                        {data?.volumeInfo?.title}
                      </Text>
                    </CardHeader>
                    <CardBody
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      borderBottom="1px solid"
                      h="full"
                    >
                      <Image
                        src={data?.volumeInfo?.imageLinks?.thumbnail}
                        borderRadius="lg"
                        maxWidth={{ base: "200px", md: "300px" }}
                        maxHeight={{ base: "200px", md: "300px" }}
                        objectFit="contain"
                        mb="1"
                      />
                    </CardBody>

                    <CardFooter
                      display="flex"
                      justify="center"
                      flexDirection="column"
                      alignItems="center"
                      height="auto"
                      minHeight="60px"
                      padding="4"
                    >
                      {data?.volumeInfo?.authors?.map((data, index) => (
                        <Text fontWeight="500" key={index}>
                          {data}
                        </Text>
                      ))}
                    </CardFooter>
                  </Card>
                </Link>
              </GridItem>
            );
          })}
        </Grid>
      ) : null}
    </>
  );
}

export default SearchPrev;
