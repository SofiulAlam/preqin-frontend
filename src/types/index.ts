export interface Investor {
  id: number;
  name: string;
  type: string;
  dateAdded: string;
  country: string;
  totalCommitments: number;
}

export interface Commitment {
  id: number;
  assetClass: string;
  currency: string;
  amount: number;
}

export interface AssetClassCommitment {
  assetClass: string;
  totalAmount: number;
  commitments: Commitment[];
}

export interface InvestorWithCommitments {
  id: number;
  name: string;
  type: string;
  country: string;
  dateAdded: string;
  commitmentsByAssetClass: AssetClassCommitment[];
  totalCommitments: number;
}

export interface CommitmentDetails {
  id: number;
  assetClass: string;
  currency: string;
  amount: number;
}
