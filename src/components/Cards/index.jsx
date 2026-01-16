import { Card, Content, Description, ImageCard, SubTitle, Title } from "./style";

function Cards({ data }) {
  return (
    <Content>
      {data.map(item => (
        <Card key={item.id}>
          <ImageCard src={item.imagens[0]} alt={item.modelo} />

          <Title>{item.personagem}</Title>

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
