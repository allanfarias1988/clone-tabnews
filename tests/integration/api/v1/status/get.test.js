test("Get to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});
// ao subir o server, o Nextjs está dando erro devido ao nodejs não está instalado. Tentar via toolbox.
