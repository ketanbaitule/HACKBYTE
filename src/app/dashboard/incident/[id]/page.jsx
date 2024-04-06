import React from 'react'
import IncidentDetail from './IncidentDetail'
import { INSTRUMENTATION_HOOK_FILENAME } from 'next/dist/lib/constants'
function page({ params }) {
    const incident = {"_id": "6610c7d00a7c52810de95652","title":"Tesla is Releasing an unsafe AI","authority":{"name":"Substantial and specific danger to public safety/health","status":"Pending","comment":["We have started investigating","Investigation Report sent to police"]},"description":[{"type":"markdown","data":"Tesla is releasing unsafe ai"}]}
  return (
    <div>
      
      <IncidentDetail incident={incident}/>
    </div>
  )
}

export default page
