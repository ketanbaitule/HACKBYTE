import Link from "next/link";
import React from "react";
import MyTable from "./Table";
import {
  Heading,
  Button,
} from "@chakra-ui/react";
import Navbar from "./Navbar";


export default function Home() {


  return (
    <main>
      {/* <nav className="bg-dark" width="100%"><h2>Hello world!</h2></nav> */}
      <Navbar status="sign in" />
      <Heading className="text-dark">Not Logged In </Heading>
    </main>
  );
}
