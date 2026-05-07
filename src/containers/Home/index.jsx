import { useState, useMemo } from "react";
import Header from "../../components/Header";
import Search from "../../components/Search";
import Cards from "../../components/Cards";
import CarouselModal from "../../components/CarouselModal";
import Feedbacks from "../../components/Feedbacks"
import { models } from "../../data/models";
import { buildCardsData } from "../../../utils/buildSearchModels";

import { BoxInput, CardContainer, Container, Content, Video } from "./styles";
import About from "../../components/About/About";

function Home() {
  const [search, setSearch] = useState("");
  const [styleFilter, setStyleFilter] = useState("ALL");
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = item => setSelectedItem(item);
  const closeModal = () => setSelectedItem(null);

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
      <Video autoPlay loop muted
      src="https://res.cloudinary.com/dfozzfg3u/video/upload/v1778118474/07f82425-86c3-4abb-be0b-48dff9052fb5_hxnepi.mov"></Video>
      <Content>
        <About/>
        <Feedbacks/>
        <BoxInput>
          <Search
            value={search}
            onChange={setSearch}
            styleFilter={styleFilter}
            onStyleChange={setStyleFilter}
          />
        </BoxInput>

        <CardContainer>
          <Cards data={filteredData} onSelect={openModal} />
        </CardContainer>
      </Content>
      {selectedItem && (
      <CarouselModal item={selectedItem} onClose={closeModal} />
      )}
    </Container>
      
  )
}

export default Home;
