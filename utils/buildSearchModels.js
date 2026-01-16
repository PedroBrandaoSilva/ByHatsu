export function buildCardsData(models) {
  return models.flatMap(anime =>
    anime.personagens.flatMap(personagem =>
      personagem.estilos.flatMap(estilo =>
        estilo.modelos.map(modelo => ({
          id: `${anime.id}-${personagem.id}-${estilo.tipo}-${modelo.id}`,
          anime: anime.anime,
          descricao: anime.descricao,
          personagem: personagem.nome,
          estilo: estilo.tipo,
          modelo: modelo.nome,
          imagens: modelo.imagens
        }))
      )
    )
  );
}
