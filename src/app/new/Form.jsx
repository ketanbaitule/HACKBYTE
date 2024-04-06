"use client";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Textarea,
  Select
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
        <Select type="text" name="authority_name" required >
          <option value='Abuse of Authority'>Abuse of Authority</option>
          <option value='Substantial and specific danger to public safety/health'>Substantial and specific danger to public safety/health</option>
          <option value='Theft/Abuse of Government resources'>Theft/Abuse of Government resources</option>
        </Select>
        <FormLabel as="legend">Describe Incident:</FormLabel>
        <Textarea placeholder="Describe Incident" name="description" required />
        <Button isLoading={pending} type="submit" colorScheme="blue" className="mt-2">
          Add
        </Button>
      </FormControl>
    </>
  );
}
export default Form;
