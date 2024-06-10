type CepInfo = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
};

export async function getCepInfo(cep: string) {
  const url = "https://viacep.com.br/ws/";

  try {
    const response = await fetch(`${url}${cep}/json`);
    if (!response.ok) return null;

    const data = (await response.json()) as CepInfo;
    return { data: data, error: null };
  } catch (error) {
    if (error instanceof Error) {
      return { data: null, error: error.message };
    } else {
      return { data: null, error: "Erro genérico" };
    }
  }
}
