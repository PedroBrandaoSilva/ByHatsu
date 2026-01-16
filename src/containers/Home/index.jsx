import { useState, useMemo } from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Cards from "../../components/Cards";

import { models } from "../../data/models";
import { buildCardsData } from "../../../utils/buildSearchModels";

import { BoxInput, CardContainer, Container, Content } from "./styles";

function Home() {
  const [search, setSearch] = useState("");
  const [styleFilter, setStyleFilter] = useState("ALL");

  const cardsData = useMemo(
    () => buildCardsData(models),
    []
  );

  const filteredData = cardsData.filter(item => {
    const matchText =
      item.anime.toLowerCase().includes(search.toLowerCase()) ||
      item.personagem.toLowerCase().includes(search.toLowerCase()) ||
      item.modelo.toLowerCase().includes(search.toLowerCase());

    const matchStyle =
      styleFilter === "ALL" || item.estilo === styleFilter;

    return matchText && matchStyle;
  });

  return (
    <Container>
      <Header setSearch={setSearch} />

      <Content>
        <BoxInput>
          <Search
            value={search}
            onChange={setSearch}
            styleFilter={styleFilter}
            onStyleChange={setStyleFilter}
          />
        </BoxInput>

        <CardContainer>
          <Cards data={filteredData} />
        </CardContainer>
      </Content>
    </Container>
  );
}

export default Home;
