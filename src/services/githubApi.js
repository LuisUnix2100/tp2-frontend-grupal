const GITHUB_API_URL = "https://api.github.com";

export async function getGithubUser(username) {
  const response = await fetch(`${GITHUB_API_URL}/users/${username}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("No se encontró el perfil de GitHub.");
    }

    if (response.status === 403) {
      throw new Error(
        "Se alcanzó temporalmente el límite de consultas de GitHub."
      );
    }

    throw new Error("No se pudo obtener la información de GitHub.");
  }

  return response.json();
}