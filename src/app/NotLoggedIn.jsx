"use client";
import React from "react";
import {
  Box,
  Spacer, 
  Heading,
  Flex,
  Image,
  Highlight,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";


export default function NotLoggedIn() {
  return (
    <>
        <section className="page-1 container-fluid mx-5 mt-5 border-b-2">
            <Flex>
                <Box>
                    <Spacer height={20} className="mt-6"/>
                    <Heading size="xl" className="text-blue-800 font-bold"><i>Shhh...</i></Heading>
                    <p size="xs" className="text-gray-500">Someone&apos;s listening!</p>  
                    <br />
                    <Heading size="lg">What is whistleblowing?</Heading>
                    <Text as="i">Whistleblowing is when someone raises a concern about a wrong doing, usually within a work context, in public, private or governmental organisation.</Text>
                </Box>
                <Spacer />
                <Image 
                    src="https://files.catbox.moe/77s3wg.svg"
                    alt="Whistle blower"
                    width={400}
                    height={400}
                    className="mt-4"
                />
            </Flex>
        </section>  
        <Spacer />
        <section className="page-2 bg-zinc-800 flex flex-col items-center rounded p-5">
            <div className="border-b-2 my-2">
                <Image 
                    src="https://files.catbox.moe/vmmbhb.png"
                    alt="Logo"
                    width={300}
                    height="auto"
                    className="p-3 my-3"
                />
            </div>
            <div className="flex flex-row text-white items-center text-center mt-3">
                <Box>
                    <p><strong>AnonymousAID</strong> is our way of helping whistleblowers protect themselves and their families.</p>
                    <p>We help whistleblowers find the <i>right people</i> and file their concerns in a standardised and secured manner. </p>
                </Box>
            </div>
        </section>
        <Spacer height={10} />
        <section className="p-3 my-2 border text-black rounded">
            <Flex className="justify-middle">
                <div>
                    <Heading>
                    <Highlight query='safe' styles={{ px: '1', py: '1', bg: 'blue.400', color: 'white' }} className="text-large">
                        Your identity is safe with us.
                    </Highlight>
                    </Heading>
                    <br />
                    <Text as="i">
                        <Highlight query='security of blockchain' styles={{ px: '1', py: '1', bg: 'blue.300' }}>
                        Using the security of blockchain, we ensure that no personal data is collected from the whistleblower.
                        </Highlight>
                    </Text>
                    <br />
                    <br />
                    <Heading size="l">We do not collect: </Heading>
                    <UnorderedList>
                        <ListItem>Email Addresses</ListItem>
                        <ListItem>Name</ListItem>
                        <ListItem>Phone Numbers</ListItem>
                    </UnorderedList>
                </div>
                <Image 
                    src="https://files.catbox.moe/d1ahhp.png"
                    alt="privacy"
                    width={800}
                    height={530}
                    />
            </Flex>
        </section>
    </>
  )
}
