import Link from "next/link";
import React from "react";
import IncidentTable from "./IncidentTable";
import { Heading, Button } from "@/utils/chakraui";
import { clientPromise } from "@/utils/mongodb";
export default async function Home() {
  const client = await clientPromise;
  const incidentCollection = client.db("whistleblower").collection("incidents");
  const incidentsData = await incidentCollection.find({}).toArray();
  return (
    <main>
      <Heading className="text-dark">My Dashboard</Heading>

      <Button colorScheme="red" className="my-3 mx-1">
        <Link href="/new">Report Incident</Link>
      </Button>

      <IncidentTable incidents={incidentsData} />
    </main>
  );
}
