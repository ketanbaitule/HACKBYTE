import { getSession } from "@auth0/nextjs-auth0";
import TempAdmin from "./TempAdmin";
import { clientPromise } from "@/utils/mongodb";
import { redirect } from "next/navigation";

export default async function Admin() {
  const user = await getSession();
  if(!user?.user["https://hackbyte/roles"].includes("authority")){
    redirect("/dashboard")
  }

  const client = await clientPromise;
  const incidentCollection = client.db("whistleblower").collection("incidents");
  const authority = user.user["https://hackbyte/userdata"].name;
  const incidentsData = await incidentCollection.find({"authority.name": authority}).toArray();

  return (
    <>
      <TempAdmin incidents={JSON.stringify(incidentsData)} authority={authority} />
    </>
  );
};

