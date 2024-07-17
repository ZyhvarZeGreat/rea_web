import { accountDetails } from "./../components/types/interfaces";
import axios, { AxiosError } from "axios";
const authToken = `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY}`;
// Define any additional headers if needed

const headers = {
  Authorization: authToken,
  // Add other headers if needed
};

type mainData = {
  code: string;
};
type bankDetails = {
  code: string;
  data: mainData[];
};
export async function accountVerificationHandler(
  accountDetails: accountDetails,
) {
  //   accountDetails: accountDetails,
  const bankData = await axios.get("https://api.paystack.co/bank", {
    headers: headers,
  });

  const bankDetail: bankDetails = bankData.data;
  const accountCode = bankDetail.data.find(
    (bank: any) => bank.name === accountDetails.bankName,
  );

  const params = {
    account_number: accountDetails.accountNumber,
    bank_code: accountCode?.code,
  };
  try {
    const response = await axios.get("https://api.paystack.co/bank/resolve", {
      params,
      headers: {
        Authorization: authToken,
      },
    });

    response.data["bank_code"] = accountCode?.code;

    return response.data;
  } catch (error: unknown) {
    console.error("Error:", error);
  }
}
