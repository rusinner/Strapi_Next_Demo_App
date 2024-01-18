export async function getFilms() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films`, {
    method: "GET",
  });
  if (!response) {
    throw new Error("Failed to fetch");
  }
  return response.json();
}
