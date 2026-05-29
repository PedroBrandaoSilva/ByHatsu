import { Card, Price, Content, Description, ImageCard, SubTitle, Title } from "./style";

function Cards({ data, onSelect }) {
  return (
    <Content>
      {data.map(item => (
        <Card key={item.id} onClick={() => onSelect(item)}>
          <ImageCard src={item.imagens[0]} alt={item.modelo} />

          <Title>{item.personagem}</Title>

          <Price>
            {item.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}
          </Price>
          <SubTitle>
            {item.anime} • {item.estilo}
          </SubTitle>

          <Description>{item.modelo}</Description>
        </Card>
      ))}
    </Content>
  );
}

export default Cards;