import React from "react";
import { Container, Typography, CircularProgress, Box } from "@mui/material";
import InvestorList from "./components/InvestorList";
import InvestorCommitments from "./components/InvestorCommitments";
import { useInvestorData } from "./hooks/useInvestorData";
import CommitmentDetailsComponent from "./components/CommitmentDetails";

const App: React.FC = () => {
  const { investors, investorsWithCommitments, loading, error } =
    useInvestorData();

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container>
      <Box mb={4}>
        <Typography variant="h4" gutterBottom>
          Investors
        </Typography>
        <InvestorList investors={investors} />
      </Box>
      <Box mt={4}>
        <Typography variant="h4" gutterBottom>
          Commitment Details
        </Typography>
        <CommitmentDetailsComponent />
      </Box>
      <Box>
        <Typography variant="h4" gutterBottom>
          Investor Commitments
        </Typography>
        <InvestorCommitments
          investorsWithCommitments={investorsWithCommitments}
        />
      </Box>
    </Container>
  );
};

export default App;
