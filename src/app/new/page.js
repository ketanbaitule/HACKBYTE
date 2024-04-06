import React from "react";
import Form from "./Form";
import { clientPromise } from "@/utils/mongodb";


export default function New () {
  const addIncident = async (formData) => {
    "use server"
    try{
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

  };
  return (
    <div>
      <form action={addIncident}>
        <Form />
      </form>
    </div>
  );
  
};
