import TextSkeleton from "@/components/common/Skeletons/TextSkeleton";
import { Transaction } from "@/components/types/interfaces";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// import { Receive, Transmit } from "iconsax-react";

const invoices = [
  {
    transactionId: "R0927339387D",
    mode: "Bank Transfer",
    time: "10:11 am",
    amount: "680,000",

    date: "09-Mar-2024",
  },
  {
    transactionId: "R0927339387D",
    mode: "Bank Transfer",
    time: "10:11 am",
    amount: "680,000",

    date: "09-Mar-2024",
  },
  {
    transactionId: "R0927339387D",
    mode: "Bank Transfer",
    time: "10:11 am",
    amount: "680,000",

    date: "09-Mar-2024",
  },
  {
    transactionId: "R0927339387D",
    mode: "Bank Transfer",
    time: "10:11 am",
    amount: "680,000",

    date: "09-Mar-2024",
  },
  {
    transactionId: "R0927339387D",
    mode: "Bank Transfer",
    time: "10:11 am",
    amount: "680,000",
    date: "09-Mar-2024",
  },
  {
    transactionId: "R0927339387D",
    mode: "Bank Transfer",
    time: "10:11 am",
    amount: "680,000",
    date: "09-Mar-2024",
  },
  {
    transactionId: "R0927339387D",
    mode: "Bank Transfer",
    time: "10:11 am",
    amount: "680,000",

    date: "09-Mar-2024",
  },
];

type Props = {
  error: Error | null;
  loading: boolean;
  data: any | Transaction;
};

export function TransactionTable(props: Props) {
  return (
    <>
      <Table className="hidden h-full w-full text-base font-medium text-[#6D6D6D] sm:block">
        <TableHeader className="w-full">
          <TableRow className="grid w-full grid-cols-10 ">
            <TableHead className="col-span-2">Transaction ID</TableHead>
            <TableHead className="col-span-2 text-center">Mode</TableHead>
            <TableHead className="col-span-2 text-center">Time</TableHead>
            <TableHead className="col-span-2 text-center">Amount</TableHead>
            <TableHead className="col-span-2 text-center">Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="flex w-full flex-col gap-4">
          {props.loading ? (
            <>
              {invoices?.map((invoice, i) => (
                <TableRow
                  className="grid w-full grid-cols-10  border-0"
                  key={i}
                >
                  <TableCell className="col-span-2 flex w-full gap-2 font-semibold text-black">
                    <TextSkeleton className=" h-10 w-full bg-muted" />
                  </TableCell>
                  <TableCell className="col-span-2 flex w-full gap-2 font-semibold text-black">
                    <TextSkeleton className=" h-10 w-full bg-muted" />
                  </TableCell>{" "}
                  <TableCell className="col-span-2 flex w-full gap-2 font-semibold text-black">
                    <TextSkeleton className=" h-10 w-full bg-muted" />
                  </TableCell>
                  <TableCell className="col-span-2 flex w-full gap-2 font-semibold text-black">
                    <TextSkeleton className=" h-10 w-full bg-muted" />
                  </TableCell>
                  <TableCell className="col-span-2 flex w-full gap-2 font-semibold text-black">
                    <TextSkeleton className=" h-10 w-full bg-muted" />
                  </TableCell>
                </TableRow>
              ))}
            </>
          ) : props.error ? (
            <div>Error</div>
          ) : (
            <>
              {props.data?.map((invoice: any, i: number) => (
                <TableRow key={i} className="grid grid-cols-10  border-0">
                  <TableCell className="col-span-2 flex gap-2 font-semibold text-black">
                    {/*<Transmit color="#05C75F" /> */}
                    {invoice.transactionId}
                  </TableCell>
                  <TableCell className="col-span-2 text-center">
                    {invoice.mode}
                  </TableCell>
                  <TableCell className="col-span-2 text-center">
                    {invoice.time}
                  </TableCell>
                  <TableCell className="col-span-2 text-center text-[#05C75F]">
                    {" "}
                    + {invoice.amount}
                  </TableCell>
                  <TableCell className="col-span-2 text-center">
                    {invoice.date}
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </>
  );
}
