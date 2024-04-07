import React from "react";
import {
  Heading
} from "@chakra-ui/react";
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import NotLoggedIn from "./NotLoggedIn";

export default async function Home() {
  const user = await getSession();
  if(user){
    redirect("/dashboard")
  }


  return (
    <main>
      <NotLoggedIn />
    </main>
  );
}
