"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
const tableData = [
  { Id: "1", incident: "ok", status: "ongoing" },
  { Id: "2", incident: "ok", status: "closed" },
  { Id: "3", incident: "ok", status: "ongoing" },
];

function MyTable() {
  return (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Incident Id</Th>
            <Th>Incident</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody className="text-center">
          {tableData.map((data, index) => (
            <Tr key={index}>
              <Td>{data.Id}</Td>
              <Td>{data.incident}</Td>
              <Td isNumeric>{data.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
export default MyTable;