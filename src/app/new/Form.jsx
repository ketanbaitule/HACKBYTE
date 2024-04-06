"use client";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Textarea,
} from "@chakra-ui/react";

import { useFormStatus } from 'react-dom'

function Form() {
  const { pending } = useFormStatus()
  return (
    <>
      <FormControl>
        <FormLabel>Title:</FormLabel>
        <Input type="text" name="title" required />
          <FormHelperText>
            <span className="text-white">Incident Title</span>
          </FormHelperText>
        <FormLabel>Authority Name:</FormLabel>
        <Input type="text" name="authority_name" required />
          <FormHelperText>
            <span className="text-white">Authority Name</span>
          </FormHelperText>
        <FormLabel as="legend">Describe Incident:</FormLabel>
        <Textarea placeholder="Describe Incident" name="description" required />
        <Button isLoading={pending}  type="submit" colorScheme="blue" className="mt-2">
          Add
        </Button>
      </FormControl>
    </>
  );
}
export default Form;
