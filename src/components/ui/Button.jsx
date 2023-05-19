import { Button as CButton } from "@chakra-ui/react";

export const Button = ({ clickFn, ...props }) => {
  return (
    <CButton
      bg="white"
      color="blue.400"
      _hover={{ bg: "orange.400", color: "white" }}
      onClick={clickFn}
      {...props}
    >
      {props.children}
    </CButton>
  );
};
