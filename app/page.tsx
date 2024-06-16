import CounterButton from "@/components/CounterButton";
import CountriesPage from "@/components/CountriesPage";
import FilterArray from "@/components/FilterArray";
import ToDoApp from "@/components/ToDoApp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <CountriesPage /> */}
      <FilterArray />
      {/* <CounterButton /> */}
      {/* <ToDoApp /> */}
    </main>
  );
}
