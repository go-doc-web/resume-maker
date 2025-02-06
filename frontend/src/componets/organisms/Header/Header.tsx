"use client";
import { useQuery } from "@apollo/client";
import { GetHeaderDocument } from "@/graphql/operations";
const Header = () => {
  const { loading, error, data } = useQuery(GetHeaderDocument);
  console.log("data header", data);
  return <h1>Header</h1>;
};

export default Header;
