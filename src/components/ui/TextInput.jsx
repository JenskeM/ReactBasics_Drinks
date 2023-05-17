import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      variant={"filled"}
      focusBorderColor="blue.600"
      placeholder="Put your search here"
      _placeholder={{ opacity: 1, color: "blue.200" }}
      onChange={changeFn}
      {...props}
    ></Input>
  );
};
