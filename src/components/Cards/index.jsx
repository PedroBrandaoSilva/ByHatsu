import { Card, Price, Content, ImageCard, SubTitle, Title } from "./style";

function Cards({ data, onSelect }) {
  return (
    <Content>
      {data.map(item => (
        <Card key={item.id} onClick={() => onSelect(item)}>
          <ImageCard src={item.imagens[0]} alt={item.modelo} />

          <Title>{item.personagem}</Title>
          <SubTitle>
            {item.anime}
          </SubTitle>
          <Price>
            {item.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}
          </Price>
          

          
        </Card>
      ))}
    </Content>
  );
}

export default Cards;
