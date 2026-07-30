import { Suspense } from "react";
import Ocean from "./ocean";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Ocean />
    </Suspense>
  );
}