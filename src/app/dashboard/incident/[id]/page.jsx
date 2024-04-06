import React from 'react'
import IncidentDetail from './IncidentDetail'
import { ObjectId } from 'mongodb'
import { clientPromise } from '@/utils/mongodb'

async function Page({ params }) {
  const client = await clientPromise;
  const incidentCollection = client.db("whistleblower").collection("incidents");
  const incident = await incidentCollection.findOne({ _id: new ObjectId(params.id) });

  return (
    <div>      
      <IncidentDetail incident={JSON.stringify(incident)}/>
    </div>
  )
}

export default Page
