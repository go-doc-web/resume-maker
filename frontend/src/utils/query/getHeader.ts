import { GetHeaderQuery, GetHeaderQueryVariables } from "@/graphql";
import { GetHeaderDocument } from "@/graphql/operations";
import { makeRscQuery } from "@/utils/apollo";
import { ApolloQueryResult } from "@apollo/client";

export async function getHeader(): Promise<
  ApolloQueryResult<GetHeaderQuery | undefined>
> {
  return makeRscQuery<GetHeaderQuery, GetHeaderQueryVariables>({
    query: GetHeaderDocument,
  });
}
