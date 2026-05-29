export function buildCardsData(models) {
  return models.flatMap((anime) =>
    anime.personagens.flatMap((personagem) =>
      personagem.modelos.map((modelo, index) => ({
        // Gera uma chave única, ignorando modelo.id
        id: `${anime.nome}-${personagem.nome}-${modelo.nome}-${index}`,

        anime: anime.nome,
        personagem: personagem.nome,
        modelo: modelo.nome,
        estilo: modelo.estilo,
        imagens: modelo.imagens,

        preco:
          modelo.preco ??
          Math.floor(Math.random() * (700 - 80) + 80),
      }))
    )
  );
}