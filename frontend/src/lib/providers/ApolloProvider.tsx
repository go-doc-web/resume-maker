// app/ApolloWrapper.tsx
"use client";

import { ApolloProvider } from "@apollo/client";
import client from "../apolloClient";
import React from "react";

export default function ApolloWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
