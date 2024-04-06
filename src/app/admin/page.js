"use client";
import { Heading, Tab, Table, TableContainer } from "@chakra-ui/react";
import React, { useState, useEffect, useRef } from "react";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
  Flex,
  Text,
  Stack,
  Button,
  StarIcon,
  Badge,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tag,
} from "@chakra-ui/react";
const tableData = [
  {
    _id: "6610c7d00a7c52810de95652",
    title: "Tesla is Releasing an unsafe AI",
    authority: {
      name: "Road Transportation",
      status: "Pending",
      comment: [
        "We have started investigating",
        "Investigation Report sent to police",
      ],
    },
    description: [{ type: "markdown", data: "Tesla is releasing unsafe ai" }],
  },
];
const Admin = () => {
  const [selectedItem, setSelectedItem] = useState(null); // State to store selected item details

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  

 


  return (
    <>
      <div className="flex h-full">
        <div className=" w-2/5 p-4">
          <Heading className="text-dark">{tableData[0].authority.name}</Heading>

          {tableData.map((data, index) => (
            <Box
              key={index}
              maxW="sm"
              className="max-w-sm border-2 border-gray-200 rounded-lg overflow-hidden m-4 cursor-pointer"
              onClick={() => handleSelectItem(data)}
            >
              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge
                    borderRadius="full"
                    px="2"
                    colorScheme={data.status === "pending" ? "gray" : "red"}
                  >
                    {data.authority.status}
                  </Badge>
                </Box>

                <Box className="mt-1 font-semibold text-lg truncate">
                  {data._id}
                </Box>

                <Box>{data.title}</Box>
              </Box>
            </Box>
          ))}
        </div>
        <div className="flex-1 w-3/5 h-screen p-4 bg-gray-100 border border-gray-200">
          {selectedItem && (
            <Box p="6">
              <TableContainer>
                <Box> {selectedItem._id}</Box>

                <Heading className="text-lg font-semibold mb-5">
                  {selectedItem.title}
                </Heading>
                <Table className="border-t-4 border-black" variant="simple" colorScheme="black">
                  <Tr>
                    <Th>Authority:</Th>
                    <Td>{selectedItem.authority.name}</Td>
                  </Tr>

                  <Tr>
                    <Th>Progress</Th>
                    <Td>
                      <OrderedList>
                        {selectedItem.authority.comment.map((selectedItem,index) => (
                            <ListItem key={index}>{selectedItem}</ListItem>
                        ))}
                      </OrderedList>
                    </Td>
                  </Tr>
                  <Tr>
                    <Th>Description</Th>
                    <Td>
                      <Table>
                        {selectedItem.description.map((selectedItem) => (
                          <Tr key={selectedItem["_id"]}>
                            <Td>{selectedItem.data}</Td>
                          </Tr>
                        ))}
                      </Table>
                    </Td>
                  </Tr>
                </Table>
              </TableContainer>
            </Box>
          )}
        </div>
      </div>
    </>
  );
};

export default Admin;
