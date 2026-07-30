import { Suspense } from "react";
import Sakura from "./sakura";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Sakura />
    </Suspense>
  );
}