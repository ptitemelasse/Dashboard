import { createLazyFileRoute } from "@tanstack/react-router";
import { ChartShallowDataShape, PieChart } from "reaviz";
import Search from "../components/search.tsx";
import { useState } from "react";

export const Route = createLazyFileRoute("/chart")({
  component: Chart,
});

export default function Chart() {
  const [data, setData] = useState<ChartShallowDataShape[] | undefined>(
    undefined,
  );

  return (
    <>
      <Search setData={setData} />
      <PieChart height={300} width={300} data={data} />
    </>
  );
}
