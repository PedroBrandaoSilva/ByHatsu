import { Container, Title, Content, ButtonQuestion, Answer } from "./style";
import { faqQuestions } from "../../data/faqQuestions";
import Header from "../../components/Header";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import { useState } from "react";

function Faq() {
    const [activeQuestion, setActiveQuestion] = useState(null);

    return (
        <Container>
            <Header />

            <Title>Perguntas Frequentes</Title>

            <Content>
                {faqQuestions.map((item) => (
                    <div key={item.id}>
                        <ButtonQuestion
                            onClick={() =>
                                setActiveQuestion(
                                    activeQuestion === item.id ? null : item.id
                                )
                            }
                        >
                            <span>{item.question}</span>

                            {activeQuestion === item.id ? (
                                <HiChevronDown />
                            ) : (
                                <HiChevronRight />
                            )}
                        </ButtonQuestion>

                        {activeQuestion === item.id && (
                            <div>
                                {item.answer.map((ans) => (
                                    <Answer key={ans.id}>
                                        {ans.answer}
                                    </Answer>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </Content>
        </Container>
    );
}

export default Faq;