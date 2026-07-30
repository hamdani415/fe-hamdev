import { Suspense } from "react";
import Aurora from "./aurora";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Aurora />
    </Suspense>
  );
}