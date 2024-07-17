import { Accounts } from "@/components/types/interfaces";
import { getBankDetails } from "@/lib/queryFunctions";

export const appendLogo = async (data: Accounts[]) => {
  const banks = await getBankDetails();
  return await Promise.all(
    data.map(async (account) => {
      const logo = banks?.find((bank) => {
        return bank.name === account.bank_name;
      })?.logo;
      console.log(logo);
      return {
        ...account,
        logo
      };
    })
  );
};