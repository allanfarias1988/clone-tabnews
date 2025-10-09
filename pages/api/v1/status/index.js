import { database } from "../../../../infra/database.js";

export default async function status(request, response) {
  const result = await database("SELECT 1 + 1 as teste;");
  console.log(result);
  return response.status(200).json({
    message: "API no ar",
  });
}
