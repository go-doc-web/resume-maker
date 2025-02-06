import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://127.0.0.1:1337/graphql", // Адрес вашего GraphQL API
  documents: [
    "src/graphql/operations/**/*.graphql", // Путь для запросов
    "src/graphql/fragments/**/*.graphql", // Путь для фрагментов
  ],
  generates: {
    "src/graphql/fragments/index.ts": {
      documents: ["src/graphql/fragments/**/*.graphql"],
      plugins: ["typescript", "typescript-operations"], // Генерация типов для фрагментов
    },
    "src/graphql/operations/index.ts": {
      documents: ["src/graphql/operations/**/*.graphql"],
      plugins: [
        "typescript", // Генерация типов для запросов
        "typescript-operations", // Операции
        "typescript-react-apollo", // Генерация хуков React Apollo (если нужно)
      ],
      config: {
        withHooks: true, // Генерация хуков useQuery, useMutation
      },
    },
    "src/graphql/index.ts": {
      plugins: ["typescript", "typescript-operations"], // Общие типы для схемы
    },
  },
};

export default config;
