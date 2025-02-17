import React from "react";
import StoreProvider from "@/state/redux";
export default function Providers({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}
