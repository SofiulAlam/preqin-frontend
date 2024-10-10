import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  CircularProgress,
} from "@mui/material";
import { getAllCommitments } from "../services/investorServices";
import { CommitmentDetails } from "../types";

const CommitmentDetailsComponent: React.FC = () => {
  const [commitments, setCommitments] = useState<CommitmentDetails[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCommitments = async () => {
      try {
        const response = await getAllCommitments();
        setCommitments(response.data);
      } catch (err) {
        setError("Failed to fetch commitment details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCommitments();
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Asset Class</TableCell>
            <TableCell>Currency</TableCell>
            <TableCell>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {commitments.map((commitment) => (
            <TableRow key={commitment.id}>
              <TableCell>{commitment.id}</TableCell>
              <TableCell>{commitment.assetClass}</TableCell>
              <TableCell>{commitment.currency}</TableCell>
              <TableCell>{commitment.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CommitmentDetailsComponent;
