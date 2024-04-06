"use client";
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
function AddModal({
  id,
  modalDisclosure,
  action,
  title,
  textAreaLabel,
  textAreaDescription,
}) {
  const { isOpen, onOpen, onClose } = modalDisclosure;
  const [loading, setLoading] = useState(false);
  const [textArea, setTextArea] = useState("");
  const [value, setValue] = useState("markdown");

  const submitForm = async () => {
    setLoading(true);
    await action(id, textArea);
    onClose();
    setLoading(false);
    setTextArea("");
  };


  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Select value={value} onChange={(e)=>{
                setValue(e.target.value)
            }} >
              <option  value="markdown">markdown</option>
              <option value="document">document</option>
            </Select>
            {value === "markdown" ? (
              <FormControl>
                <FormLabel>{textAreaLabel}</FormLabel>
                <Textarea
                  value={textArea}
                  onChange={(e) => setTextArea(e.target.value)}
                  placeholder={textAreaDescription}
                />
              </FormControl>
            ) : (
              <FormControl>
                <Input placeholder="upload files" size="sl" type="file" />
              </FormControl>
            )}
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={loading}
              colorScheme="blue"
              mr={3}
              onClick={submitForm}
            >
              Submit
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddModal;
