import React from "react";
import Form from "./Form";
import { clientPromise } from "@/utils/mongodb";
import { redirect } from "next/navigation";
import { getSession } from "@auth0/nextjs-auth0";

export default function New () {
  const addIncident = async (formData) => {
    "use server"
    try{
      const user = await getSession();

      const client = await clientPromise;
      const db = await client.db("whistleblower");

      const incidentCollection = await db.collection("incidents");

      const incident = {
        "title": formData.get("title"),
        "authority": {
          "name": formData.get("authority_name"),
          "status": "Pending",
          "comment": [
            
          ]
        },
        "description": [
          {
            "type": "markdown",
            "data": formData.get("description")
          }
        ]
      }

      incidentCollection.insertOne(incident);
    }catch(e){
      console.log(e)
    }

    redirect("/dashboard")

  };
  return (
    <div>
      <form action={addIncident}>
        <Form />
      </form>
    </div>
  );
  
};
