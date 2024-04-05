import Link from "next/link";
import React from "react";
import MyTable from "./Table";
import {
  Heading,
  Button,
} from "@chakra-ui/react";


export default function Home() {


  return (
    <main>
      <nav className="bg-dark" width="100%"><h2>Hello world!</h2></nav>
      <Heading className="text-dark">Home Page</Heading>
      <MyTable />
      <Button  colorScheme="blue" className="mt-2">
        <Link href="/new" >
        Report Incident</Link>
      </Button>

    </main>
  );
}
