import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { SetStateAction } from "react";

export interface User {
  first_name: string;
  last_name: string;
  email: string;
  full_name: string;
  gender: string;
}
export type accountDetails = {
  accountNumber: SetStateAction<string | null | undefined>;
  bankName: string | null | undefined;
  bankCode: string | null | undefined;
  logo?: string | StaticImport;
};

export interface Session {
  sessionToken: string;
  expiresAt: string;
  iat: number;
  exp: number;
}
export interface Wallet {
  id: number;
  currency: string;
  balance: string;
  active: boolean;
  user: number;
}
export interface Banks {
  name: string;
  slug: string;
  code: string;
  ussd: string;
  logo: string;
}
export interface purchaseAssetInterface  {
  shares:number
  amount:number
  property_id?:number
}
export interface Accounts {
  account_name: string;
  bank_name: string;
  account_number: string;
  bank_code: string;
  default_account: boolean;
  id: number;
  logo?: string;
  recipient_code: string;
  user: number;
}

export interface CompanyInfo {
  id: string;
  street: string;
  city: string;
  state: string;
  country: string;
  contact: string;
  email: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  photo: string;
  date: string;
}
export interface MintedProperty {
  property_id: number;
  nft: string;
}
export interface Document {
  docs: string;
}
export interface ContractAction {
  property: number;
  action: string;
}

export interface PropertySharesTransaction {
  id: number;
  rea_id: string;
  shares: string;
  amount: string;
  property_id: string;
}

export interface PropertySharesTransaction {
  id: number;
  rea_id: string;
  shares: string;
  amount: string;
  date: string;
  transaction_id: string;
  status: "Bought" | "Sold";
  property_id: string;
  user: number;
}

export interface Link {
  id: number;
  link: string;
  title: string;
  description: string;
  date: string;
}

export interface Portfolio {
  id: number;
  property_id: Property;
  current_portfolio_value: string;
  current_share_value: string;
  portfolio_counts: string;
  date: string;
  property_value: string;
  value_per_shares: string;
  portfolio_value: string;
  amount_bought: string;
  shares: string;
  status: "Owned";
  amount_sold: string;
  user: number;
  property: number;
}

export interface PortfolioNew {
  id: number;
  incoming_shares: string;
  invested: string;
  liquidation: string;
  outgoing_shares: string;
  portfolio: string;
  roi: string;
  user: number;
}

export interface CreateRentals {
  id: number;
  target_rent: string;
  insurance_cost: string;
  maintenance_cost: string;
  percentage_net_yield: string;
  percentage_gross_yield: string;
  property_id: number;
}

export interface Transaction {
  id: number;
  reference: string;
  currency: string;
  type: "DR" | "CR";
  amount: string;
  narration: string;
  status: string;
  created: string;
}

export interface UserProfile {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  dob: number;
  contact: number;
  gender: "Male" | "Female" | "Custom";
  country: string;
  state: string;
  created_at: string;
  update_at: string;
  kyc_verified: boolean;
  user: number;
}

export interface TransactionCost {
  id: number;
  docs: [{ docs: string }];
  rea_charges: string;
  vats: string;
  total_costs: string;
  total_costs_per_share: string;
  broker_fees: string;
  days_left: string;
  sold_shares: string;
  shares_left: string;
  total_numbers_of_investors: string;
  timeline: string;
  cost_breakdown: string;
  asset_appreciation: string;
  tax: string;
  total_units: string;
  user: number;
  property_id: string;
}

export interface PaymentTransaction {
  id: number;
  reference: string;
  transaction_id: string;
  currency: string;
  trans_type: "Withdraw" | "Deposit";
  payment_portal: "Paystack" | "Flutterwave" | "Direct Charge" | "Crypto";
  amount: number;
  status: string;
  created_at: string;
  user: number;
}

export interface LoginInterface {
  email: string;
  password: string;
  tokens: string;
}

export interface ResetEmailInterface {
  old_email: string;
  new_email: string;
  password: string;
}

export interface CreateUserAccountInterface {
  account_name: string | null | undefined;
  account_number: string | null | undefined;
  bank_name: string | null | undefined;
  bank_code: string | null | undefined;
  pin: string | undefined | null;
}

export interface withdrawFundsInterface extends CreateUserAccountInterface {
  amount: string | undefined;
}

export interface CreateProperty {
  id: number;
  images: string[];
  uploaded_images: string[];
  name: string;
  location: string;
  rooms: number;
  description: string;
  type: string;
  city: string;
  state: string;
  country: string;
  status: "Draft" | "Live" | "Sold";
  created: string;
  asset_type: number;
  company: number;
}

export interface imagesSet {
  id: number;
  blurHash: string;
  imgUrl: string;
}
export interface Property {
  id: number;
  imgUrl: any;
  user: User;
  company: CompanyInfo;
  images: { image: string }[];
  costs: TransactionCost;
  percentage_sold: string;
  name: string;
  location: string;
  rooms: number;
  description: string;
  type: string;
  city: string;
  state: string;
  country: string;
  status: "Draft" | "Live" | "Sold";
  minted: boolean;
  minted_date: string;
}
