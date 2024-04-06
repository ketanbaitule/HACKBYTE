import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@/utils/chakraui";

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
              <Td>{incident["_id"]}</Td>
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