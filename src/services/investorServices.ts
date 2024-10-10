import axios from "axios";
import { CommitmentDetails, Investor, InvestorWithCommitments } from "../types";

const api = axios.create({
  baseURL: "https://localhost:7255/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const getInvestors = () => api.get<Investor[]>("/Investor");

export const getInvestorCommitments = () =>
  api.get<InvestorWithCommitments[]>(
    "/Investor/investors-with-grouped-commitments"
  );

export const getAllCommitments = () =>
  api.get<CommitmentDetails[]>("/Investor/commitments");
