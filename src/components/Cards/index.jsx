import { Card, Content, Description, ImageCard, SubTitle, Title } from "./style";

function Cards({ data, onSelect }) {
  return (
    <Content>
      {data.map(item => (
        <Card key={item.id} onClick={() => onSelect(item)}>
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