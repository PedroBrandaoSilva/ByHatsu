import Header from "../../components/Header";
import Cards from "../../components/Cards";
import CarouselModal from "../../components/CarouselModal";
import { PageContainer } from "../../components/PagesLayout/layouts";
import { useState, useMemo, useEffect, use } from "react";
import { newModels } from "../../data/newModels";
import { buildCardsData } from "../../../utils/buildSearchModels";
import { Banner, CardsContainer, Title } from "./style";
import BannerImg from "../../assets/feedbacks/Banner.jpg";

function NewProducts() {
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => setSelectedItem(item);
    const closeModal = () => setSelectedItem(null);

    const cardsData = useMemo(
        () => buildCardsData(newModels),
        []
    );
    
     useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
   

    return (
        <PageContainer>
            <Header />
            <Banner 
                src={BannerImg}
                alt="Banner"
            />
            <CardsContainer>
                <Cards
                    data={cardsData}
                    onSelect={openModal}
                />
            </CardsContainer>

            {selectedItem && (
                <CarouselModal
                    item={selectedItem}
                    onClose={closeModal}
                />
            )}
        </PageContainer>
    );
}

export default NewProducts;