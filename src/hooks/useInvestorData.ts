import { useState, useEffect } from "react";
import {
  getInvestors,
  getInvestorCommitments,
} from "../services/investorServices";
import { Investor, InvestorWithCommitments } from "../types";

export const useInvestorData = () => {
  const [investors, setInvestors] = useState<Investor[]>([]);
  const [investorsWithCommitments, setInvestorsWithCommitments] = useState<
    InvestorWithCommitments[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchInvestors = async () => {
    setLoading(true);
    try {
      const response = await getInvestors();
      setInvestors(response.data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while fetching investors"
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchInvestorCommitments = async () => {
    setLoading(true);
    try {
      const response = await getInvestorCommitments();
      setInvestorsWithCommitments(response.data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred while fetching investor commitments"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvestors();
    fetchInvestorCommitments();
  }, []);

  return { investors, investorsWithCommitments, loading, error };
};
