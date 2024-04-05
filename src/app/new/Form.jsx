"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Textarea,
} from "@chakra-ui/react";
import Navbar from "../Navbar";
function Form() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";

  return (
    <>
      <Navbar status="sign out" />
      <FormControl isInvalid={isError}>
        <FormLabel>Title</FormLabel>
        <Input type="text" value={input} onChange={handleInputChange} />
        {!isError ? (
          <FormHelperText>
            <span className="text-white">Incident Title</span>
          </FormHelperText>
        ) : (
          <FormErrorMessage>
            <span className="text-red-500">Title is required.</span>
          </FormErrorMessage>
        )}
        <FormLabel as="legend">Describe Incident</FormLabel>
        <Textarea placeholder="Describe Incident" name="description" />
        <Button type="submit" colorScheme="blue" className="mt-2">
          Add
        </Button>
      </FormControl>
    </>
  );
}
export default Form;
