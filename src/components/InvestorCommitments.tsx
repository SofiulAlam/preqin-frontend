import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Box,
} from "@mui/material";
import { InvestorWithCommitments } from "../types";

interface Props {
  investorsWithCommitments: InvestorWithCommitments[];
}

const InvestorCommitments: React.FC<Props> = ({ investorsWithCommitments }) => {
  const [assetClassFilter, setAssetClassFilter] = useState("");

  const filteredInvestors = investorsWithCommitments
    .map((investor) => ({
      ...investor,
      commitmentsByAssetClass: investor.commitmentsByAssetClass.filter(
        (commitment) =>
          commitment.assetClass
            .toLowerCase()
            .includes(assetClassFilter.toLowerCase())
      ),
    }))
    .filter((investor) => investor.commitmentsByAssetClass.length > 0);

  return (
    <>
      <Box mb={2}>
        <TextField
          label="Filter by Asset Class"
          value={assetClassFilter}
          onChange={(e) => setAssetClassFilter(e.target.value)}
        />
      </Box>
      {filteredInvestors.map((investor) => (
        <TableContainer
          component={Paper}
          key={investor.id}
          style={{ marginBottom: "20px" }}
        >
          <h3>{investor.name}</h3>
          {investor.commitmentsByAssetClass.map((assetClass) => (
            <Table key={assetClass.assetClass}>
              <TableHead>
                <TableRow>
                  <TableCell colSpan={4}>
                    {assetClass.assetClass} - Total: {assetClass.totalAmount}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Asset Class</TableCell>
                  <TableCell>Currency</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {assetClass.commitments.map((commitment) => (
                  <TableRow key={commitment.id}>
                    <TableCell>{commitment.id}</TableCell>
                    <TableCell>{commitment.assetClass}</TableCell>
                    <TableCell>{commitment.currency}</TableCell>
                    <TableCell>{commitment.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          ))}
        </TableContainer>
      ))}
    </>
  );
};

export default InvestorCommitments;
