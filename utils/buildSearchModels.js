export function buildCardsData(animes = []) {
  return animes.flatMap(anime =>
    anime.personagens.flatMap(personagem =>
      personagem.modelos.map(modelo => ({
        id: `${anime.id}-${personagem.id}-${modelo.id}`,
        anime: anime.nome,
        descricao: anime.descricao,
        personagem: personagem.nome,
        estilo: modelo.estilo,
        modelo: modelo.nome,
        imagens: modelo.imagens || []
      }))
    )
  );
}