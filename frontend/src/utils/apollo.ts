import client from "@/lib/apolloClient";

export async function makeRscQuery<T, V>(options: {
  query: any;
  variables?: V;
}) {
  try {
    const response = await client.query<T, V>({
      query: options.query,
      variables: options.variables,
      fetchPolicy: "no-cache", // Убедитесь, что нет кэширования в RSC
    });

    return response;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error;
  }
}
