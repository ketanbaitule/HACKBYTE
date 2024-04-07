"use client";
import React, { useState, useRef } from "react";
import {
  Heading, 
  Table,
  TableContainer,
  ListItem,
  OrderedList,
  Box,
  Badge,
  Tr,
  Th,
  Td,
  Button
} from "@chakra-ui/react";
import IncidentDetail from "./IncidentDetail";

export default function TempAdmin({authority, incidents}){
    incidents = JSON.parse(incidents);
    const [selectedItem, setSelectedItem] = useState(null); // State to store selected item details

    const handleSelectItem = (item) => {
        setSelectedItem(item);
    };

    return (
    <>
      <div className="flex h-full">
        <div className="md:w-2/5 p-4 h-screen overflow-y-auto">
          <Heading className="text-dark">{authority}</Heading>

          {incidents.map((data, index) => (
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
                    colorScheme={data.status.toLowerCase().trim() === "pending" ? "gray" : (data.status.toLowerCase().trim() === "solved" ? "green": "orange")}
                  >
                    {data.authority.status}
                  </Badge>
                </Box>

                <Box className="mt-1 font-semibold text-lg truncate">
                  {data.title}
                </Box>

                <Box>Id: {data._id}</Box>
              </Box>
            </Box>
          ))}
        </div>
        <div className="md:w-3/5 h-screen p-4 bg-gray-100 border border-gray-200 overflow-y-auto">
            <IncidentDetail incident={selectedItem} />
        </div>
      </div>
    </>
  );
};

