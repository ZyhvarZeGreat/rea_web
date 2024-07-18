import {
  Accounts,
  Banks,
  CreateUserAccountInterface,
  Portfolio,
  PortfolioNew,
  Property,
  purchaseAssetInterface,
  Transaction,
  User,
  Wallet
} from "@/components/types/interfaces";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";
import axiosInstance from "@/app/axiosInstance";

export const getUsers = async (): Promise<User | undefined> => {
  try {
    const response = await axiosInstance.get<User>(`/profile`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
       throw new Error(error.message)

    }
  }
};
export const getDVA = async (): Promise<any | undefined> => {
  try {
    const response = await axiosInstance.get(`/retrieve/dva`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
      throw new Error(error.message);
    }
  }
};

export const getAvailableProperties = async (): Promise<Property[] | undefined> => {
  try {
    const response = await axiosInstance.get<Property[]>(`/dashboard/property/live`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
      throw new Error(error.message);
    }
  }
};
export const getPropertyDetails = async (
  id: string | string[]
): Promise<Property | undefined> => {
  try {
    const response = await axiosInstance.get<Property>(
      `dashboard/property/${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error,typeof error)
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
      throw new Error(error.message);
    }
  }
};
export const getFundedProperties = async (): Promise<Property[] | undefined> => {
  try {
    const response = await axiosInstance.get<Property[]>(`/dashboard/property/funded`);

    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
      throw new Error(error.message);
    }
  }
};
export const getPortfolio = async (): Promise<PortfolioNew | undefined> => {
  try {
    const response = await axiosInstance.get(`/mobile/portfolio`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
      throw new Error(error.message);
    }
  }
};

export const getDashboardProperty = async (): Promise<any | undefined> => {
  try {
    const response = await axiosInstance.get(`/dashboard/property`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
      throw new Error(error.message);
    }
  }
};

export const getCost = async (id: string | string[]): Promise<any | undefined> => {
  try {
    const response = await axiosInstance.get(`admin/costs/${id}`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
      throw new Error(error.message);
    }
  }
};

export const getUnsignedProperties = async (): Promise<Property[] | undefined> => {
  try {
    const response = await axiosInstance.get(`dashboard/property`);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
      // throw new Error(error.message);
    }
  }
};
export const getRentals = async (id: string | string[]): Promise<any | undefined> => {
  try {
    const response = await axiosInstance.get(`/cost/${id}`);
    console.log(response);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
      throw new Error(error.message);
    }
  }
};
export const getPortfolioID = async (id: number) => {
  return await axiosInstance.get(`/mobile/portfolio/${id}`);
};
export const getSingleTransactions = async (id: number) => {
  return await axiosInstance.get(`/mobile/share/tranasactions/`);
};
export const getTransactions = async (): Promise<Transaction | undefined> => {
  const response = await axiosInstance.get<Transaction>(
    `/dashboard/wallet/transaction`
  );
  return response.data;
};
export const getWalletBalance = async (): Promise<Wallet | undefined> => {
  try {
    const response = await axiosInstance.get<Wallet>(`/wallet/get-balance`);
    return response.data; // Extract data from the response
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
      throw new Error(error.message);
    }
  }
};
export const getWalletTransactions = async (): Promise<Wallet | undefined> => {
  try {
    const response = await axiosInstance.get<Wallet[]>(
      "/wallet/get-transaction"
    );
    return response.data[0]; // Extract data from the response
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
      throw new Error(error.message);
    }
  }
};

export const getMetrics = async (): Promise<Portfolio | undefined> => {
  try {
    const response = await axiosInstance.get(`/mobile/metrics`);
    return response.data; // Extract data from the response
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
      throw new Error(error.message);
    }
  }
};

export const getOrders = async (): Promise<Portfolio | undefined> => {
  try {
    const response = await axiosInstance.get(`/mobile/orders`);
    return response.data; // Extract data from the response
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
      throw new Error(error.message);
    }
  }
};

export const getBankDetails = async (): Promise<Banks[] | undefined> => {
  try {
    const response = await axiosInstance.get(`https://nigerianbanks.xyz/`);
    return response.data; // Extract data from the response
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
      throw new Error(error.message);
    }
  }
};

export const getWishlist = async () => {
  return await axiosInstance.get(`/mobile/whilist`);
};

export const getVirtualAccount = async (): Promise<any | undefined> => {
  try {
    const response = await axiosInstance.get(`/retrieve/dva`);
    return response.data; // Extract data from the response
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.message, error.code);
      throw new Error(error.message);
    }
  }
};
export const getSavedAccounts = async (): Promise<Accounts[] | undefined> => {
  const response = await axiosInstance.get(`/retrieve/user/account`);
  return response.data;
};
export const verifyToken = async (token: string) => {
  return await axiosInstance.post(`/account/verify/token`, {
    token: token
  });
};
export const refreshToken = async (token: string) => {
  return await axiosInstance.post(`/account/refresh/token`, {
    token: token
  });
};

export const logout = async (token: string) => {
  return await axiosInstance.post(`/account/logout`, {
    token: token
  });
};

export const initiateTransfer = async (details: any) => {
  const response = await axiosInstance.post(`/account/refresh/token`, {
    details: details
  });

  return response;
};
export const createPin = async (pin: number) => {
  const response = await axiosInstance.post(`/create/pin`, {
    pin: pin
  });

  return response;
};

export const createUserAccount = async (
  accountDetails: CreateUserAccountInterface
) => {
  console.log(accountDetails);
  const response = await axiosInstance.post<CreateUserAccountInterface>(
    `/create/user/account`,
    accountDetails
  );

  return response;
};

export const changePassword = async (password: string) => {
  const response = await axiosInstance.post(
    `account/otp/change-password/`,
    password
  );

  return response;
};

export const addBankAccounts = async (
  accountDetails: CreateUserAccountInterface
) => {
  const response = await axiosInstance.post(`account/otp/change-password/`, {
    accountDetails
  });

  return response;
};

export const withdrawFunds = async (
  accountDetails: CreateUserAccountInterface
) => {
  const response = await axiosInstance.post(`/initate-transfer`, {
    accountDetails
  });

  return response;
};
export const purchaseAsset = async (
  assetDetails: purchaseAssetInterface
) => {
  // console.log(assetDetails)
  const response = await axiosInstance.post(`/mobile/asset/purchase`, {
    shares:Number(assetDetails.shares),
    amount:assetDetails.amount
  });

  return response;
};

export const confirmPin = async (pin: string | undefined) => {
  const response = await axiosInstance.post(`/confirm/pin`, pin);
  console.log(response);
  return response.data;
};

export const createFCMToken = async (token: string) => {
  const response = await axiosInstance.post(`/create/fcm_token`, {
    token: token
  });
  console.log(response);
  return response.data;
};
