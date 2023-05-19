import { Button } from "./ui/Button";
import {
  Box,
  Heading,
  Image,
  Text,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

export const DrinkChoice = ({ drink, clickFn }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      size={["full", "md"]}
      boxShadow={["", "xl"]}
      rounded="md"
      bg={["white", "blue.200"]}
      p={20}
      mt={[20, 0]}
      borderRadius="50%"
      borderWidth={[0, 2]}
      display="grid"
      alignItems="center"
      justifyItems="center"
      alignContent="center"
    >
      <Heading color={["blue.200", "White"]} mb={4} mt={[20, 0]}>
        Your choice: {drink.name}
      </Heading>
      <Image
        src={drink.imgUrl}
        height="100px"
        width="100px"
        alt={drink.alt}
      ></Image>
      <Text
        fontWeight="semibold"
        fontSize="lg"
        color={["blue.200", "White"]}
        my={6}
        align="center"
      >
        Just a second... Your {drink.name.toLowerCase()} will quickly be
        ready...{" "}
      </Text>
      <Flex justifyContent="space-evenly" gap={4}>
        <Button onClick={onOpen}>Confirm order</Button>
        <Button clickFn={() => clickFn()}>Change order</Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size={["full", "md"]}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight={"semibold"} color="blue.600">
            Please confirm your choice
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            height={["full", "fit-content"]}
            display="flex"
            justifyContent="center"
            alignItems={["center", "flex-start"]}
          >
            <Text fontWeight={"semibold"} color="blue.400">
              Drink of your choice: {drink.name.toLowerCase()}
            </Text>
          </ModalBody>

          <ModalFooter>
            <Button bg="blue.400" color="white" p={3} mx={2}>
              Confirm
            </Button>
            <Button bg="blue.400" color="white" p={3} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

// import {Button} from './ui/Button'

// export const DrinkChoice = ({ drink, clickFn}) => {

//     return (
//       <>
//         <h2>Your choice: {drink.name}</h2>
//         <img src={drink.imgUrl} height='100px' width='100px' alt={drink.alt}></img>
//         <p>Just a second... Your {drink.name.toLowerCase()} will quickly be ready... </p>
//         <Button text={'Sorry, changed my mind'} clickFn={() => clickFn()} />
//       </>
//     );
// };
