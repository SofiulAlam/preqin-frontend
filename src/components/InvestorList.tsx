import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Investor } from "../types";

interface Props {
  investors: Investor[];
}

const InvestorList: React.FC<Props> = ({ investors }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Date Added</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Total Commitments</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {investors.map((investor) => (
            <TableRow key={investor.id}>
              <TableCell>{investor.id}</TableCell>
              <TableCell>{investor.name}</TableCell>
              <TableCell>{investor.type}</TableCell>
              <TableCell>{investor.dateAdded}</TableCell>
              <TableCell>{investor.country}</TableCell>
              <TableCell>{investor.totalCommitments}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default InvestorList;
