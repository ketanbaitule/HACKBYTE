"use client";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Textarea,
} from "@chakra-ui/react";

function Form() {
  return (
    <>
      <FormControl>
        <FormLabel>Title</FormLabel>
        <Input type="text" name="title" required />
          <FormHelperText>
            <span className="text-white">Incident Title</span>
          </FormHelperText>
        <Input type="text" name="authority_name" required />
          <FormHelperText>
            <span className="text-white">Authority Name</span>
          </FormHelperText>
        <FormLabel as="legend">Describe Incident</FormLabel>
        <Textarea placeholder="Describe Incident" name="description" required />
        <Button type="submit" colorScheme="blue" className="mt-2">
          Add
        </Button>
      </FormControl>
    </>
  );
}
export default Form;
