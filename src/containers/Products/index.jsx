import Header from "../../components/Header";
import Search from "../../components/Search";
import Cards from "../../components/Cards";
import CarouselModal from "../../components/CarouselModal";
import { PageContainer } from "../../components/PagesLayout/layouts";
import { useState, useMemo } from "react";
import { models } from "../../data/models";
import { buildCardsData } from "../../../utils/buildSearchModels";
import { BoxInput, CardContainer } from "./style";

function Products() {

    const [search, setSearch] = useState("");
    const [styleFilter, setStyleFilter] = useState("ALL");
    const [priceFilter, setPriceFilter] = useState("ALL");
    const [selectedItem, setSelectedItem] = useState(null);
    const openModal = item => setSelectedItem(item);
    const closeModal = () => setSelectedItem(null);

    const cardsData = useMemo(
        () => buildCardsData(models),
        []
    );

    const filteredData = cardsData.filter(item => {

        const normalizedSearch = search.toLowerCase();

        const matchText =
            item.anime?.toLowerCase().includes(normalizedSearch) ||
            item.personagem?.toLowerCase().includes(normalizedSearch) ||
            item.modelo?.toLowerCase().includes(normalizedSearch);

        const matchStyle =
            styleFilter === "ALL" ||
            item.estilo === styleFilter;

        let matchPrice = true;

        if (priceFilter === "100") {
            matchPrice = item.preco <= 100;
        }

        if (priceFilter === "300") {
            matchPrice =
                item.preco > 100 &&
                item.preco <= 300;
        }

        if (priceFilter === "500") {
            matchPrice =
                item.preco > 300 &&
                item.preco <= 500;
        }

        if (priceFilter === "500+") {
            matchPrice = item.preco > 500;
        }

        return (
            matchText &&
            matchStyle &&
            matchPrice
        );
    });

    return (
        <PageContainer>

            <Header />

            <BoxInput>
                <Search
                    value={search}
                    onChange={setSearch}
                    styleFilter={styleFilter}
                    priceFilter={priceFilter}
                    onPriceChange={setPriceFilter}
                    onStyleChange={setStyleFilter}
                />
            </BoxInput>

            <CardContainer>
                <Cards
                    data={filteredData}
                    onSelect={openModal}
                />
            </CardContainer>

            {selectedItem && (
                <CarouselModal
                    item={selectedItem}
                    onClose={closeModal}
                />
            )}

        </PageContainer>
    );
}

export default Products;