export default function status(request, response) {
  console.log(response);
  return response.status(200).json({
    message: "API no ar",
  });
}
