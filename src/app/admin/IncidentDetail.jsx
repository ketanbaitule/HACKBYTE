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
    useDisclosure
} from "@chakra-ui/react";
import AddModal from "./AddModal";
import { useState } from "react";
import { addProgress, markSolved, sendBack } from "@/actions/action";
export default function IncidentDetail({incident}){
    const modalDisclosure = useDisclosure();
    const [textArea, setTextArea] = useState({label: "", description: "", action: null});
    if(!incident) return null;
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
                            <Th>Description</Th>
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
                        <Button onClick={async ()=>{ await markSolved(incident._id) }} variant={"solid"} colorScheme='blue'>Mark Solved</Button>
                        <Button onClick={()=>{setTextArea({title: "Add Progress", label: "Add Progress", description: "Add Action Taken...", action: addProgress}) ;modalDisclosure.onOpen()}} colorScheme='blue'>Add Progress</Button>
                        <Button onClick={()=>{setTextArea({title: "Send Back", label: "Ask More Proof", description: "What Should Be Added...", action: sendBack}) ;modalDisclosure.onOpen()}} colorScheme='red'>Send Back</Button>
                    </ButtonGroup>
                </Box>
                <AddModal id={incident._id} modalDisclosure={modalDisclosure} action={textArea.action} title={textArea.title} textAreaLabel={textArea.label} textAreaDescription={textArea.description} />
            </Box>
        </> 
    )
}