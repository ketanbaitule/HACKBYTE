"use client";
import Link from "next/link";
import React, { useState } from "react";
import Form from "./Form"
import {

  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,

  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function AddIncident() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>+</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Incident</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <input type="text"/>
            <Form />
          </ModalBody>

          <ModalFooter>
            <Button type="submit" colorScheme="blue">Add</Button>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
