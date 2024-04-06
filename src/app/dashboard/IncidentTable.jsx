"use client";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@/utils/chakraui";
import Link from "next/link";



function IncidentTable({ incidents }) {

  return (
    <TableContainer>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Incident Id</Th>
            <Th>Incident</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody className="text-center">
          {incidents.map((incident) => (
            <Tr key={incident["_id"]}>
              <Td> <Link href={`/dashboard/incident/${incident._id}`}>{incident["_id"]}</Link></Td>
              <Td>{incident.title}</Td>
              <Td>{incident.authority.status}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
export default IncidentTable;