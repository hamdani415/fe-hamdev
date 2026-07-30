import { Suspense } from "react";
import Noir from "./noir";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Noir />
    </Suspense>
  );
}