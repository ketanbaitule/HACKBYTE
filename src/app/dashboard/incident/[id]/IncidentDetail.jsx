"use client"
import {
    Heading, 
    ButtonGroup,
    Button,
    Tbody,
    Table,
    TableContainer,
    ListItem,
    OrderedList,
    Box,
    Tr,
    Th,
    Td,
    useDisclosure,
    Badge
} from "@chakra-ui/react";
import AddModal from "./AddModal";
import { useState } from "react";
import { addDiscussion, addProgress, markSolved, sendBack } from "@/actions/action";
export default function IncidentDetail({incident}){
    const modalDisclosure = useDisclosure();
    const [textArea, setTextArea] = useState({label: "", description: "", action: null});
    if(!incident) return null;
    incident = JSON.parse(incident);
    const isPending = (incident.authority.status.toLowerCase().trim() != "solved");
    
    return(
        <> 
            <Box p="6">
                <Box> {incident._id}</Box>

                <Heading className="text-lg font-semibold mb-5">
                    {incident.title}
                </Heading>
                <Table className="border-t-4 border-black" variant="simple" colorScheme="black">
                    <Tbody>
                        <Tr>
                            <Th>Authority</Th>
                            <Td>{incident.authority.name}</Td>
                        </Tr>
                        <Tr>
                            <Th>Status</Th>
                            <Td>
                                <Box display="flex" alignItems="baseline">
                                    <Badge
                                        borderRadius="full"
                                        px="2"
                                        colorScheme={incident.authority.status.toLowerCase().trim() === "pending" ? "gray" : (incident.authority.status.toLowerCase().trim() === "solved" ? "green": "orange")}
                                    >
                                        {incident.authority.status}
                                    </Badge>
                                </Box>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th>Progress</Th>
                            <Td>
                                <OrderedList>
                                    {incident.authority.comment.map((comment,index) => (
                                        <ListItem key={index}>{comment}</ListItem>
                                    ))}
                                </OrderedList>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th>Conversation</Th>
                            <Td>
                                <Table>
                                    {incident.description.map((description, index) => (
                                        <Tr key={index} bgColor={ description.from == "authority" ? "lightblue": "transparent"}>
                                            <Td> <b>{ description.from == "authority" ? "Authority": "User"}:</b> {description.data}</Td>
                                        </Tr>
                                    ))}
                                </Table>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
                <Box p={6}>
                    <ButtonGroup isDisabled={!isPending} variant='outline' spacing='6'>
                        
                        <Button onClick={()=>{setTextArea({title: "Add Discussion", label: "Add Details / Reply", description: "Add More Details...", action: addDiscussion}) ;modalDisclosure.onOpen()}} colorScheme='blue'>Discussion</Button>
                        
                    </ButtonGroup>
                </Box>
                <AddModal id={incident._id} modalDisclosure={modalDisclosure} action={textArea.action} title={textArea.title} textAreaLabel={textArea.label} textAreaDescription={textArea.description} />
            </Box>
        </> 
    )
}