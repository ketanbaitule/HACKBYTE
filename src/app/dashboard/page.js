import Link from "next/link";
import React from "react";
import MyTable from "./Table";
import { Heading, Button } from "@chakra-ui/react";
export default function Home() {
  return (
    <main>
      <Heading className="text-dark">My Dashboard</Heading>

      <Button colorScheme="red" className="my-3 mx-1">
        <Link href="/new">Report Incident</Link>
      </Button>

      <MyTable />
    </main>
  );
}
