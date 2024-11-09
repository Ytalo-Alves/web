import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import SummaryCards from "./(home)/_components/summary-cards";
import TimeSelect from "./(home)/_components/time-select";
import { isMatch } from "date-fns";
import TransactionPieChart from "./(home)/_components/transaction-pie-chart";
import Navbar from "./_components/navbar";
import ExpensePerCategory from "./(home)/_components/expenes-per-category";
import { Dashboard } from "./_data/get-dashboard";

interface HomeProps {
  searchParams: { month: string };
}

const Home = async ({ searchParams: { month } }: HomeProps) => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  const monthIsInvalid = !month || !isMatch(month, "MM");
    if(monthIsInvalid){
      redirect('?month=01');
    }

    const dashboard = await Dashboard(month)

  return (
    <>
      <Navbar />
      <div className="flex flex-col space-y-6 overflow-hidden p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>
        <div className="grid h-full grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <div className="flex flex-col gap-6 overflow-hidden">
            <SummaryCards month={month} {...dashboard}/>
            <div className="grid h-full grid-cols-3 grid-rows-1 gap-6 overflow-hidden">
              <TransactionPieChart {...dashboard} />
              <ExpensePerCategory expensesPerCategory={dashboard.totalExpensePerCategory}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
