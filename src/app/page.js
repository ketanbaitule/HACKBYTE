import React from "react";
import {
  Heading
} from "@chakra-ui/react";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";


export default async function Home() {
  const user = await getSession();
  if(user){
    redirect("/dashboard")
  }


  return (
    <main>
      <Heading className="text-dark">Not Logged In </Heading>
    </main>
  );
}
