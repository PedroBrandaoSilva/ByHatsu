import { InputSearch, Select, Container, Option, SelectContainer } from "./style";

function Search({ value, onChange, styleFilter, onStyleChange, priceFilter, onPriceChange }) {
  return (
    <Container>
      <InputSearch
        type="text"
        placeholder="Buscar anime ou personagem"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <SelectContainer>
        <Select
          value={styleFilter}
          onChange={e => onStyleChange(e.target.value)}
        >
          <Option value="ALL">Todos</Option>
          <Option value="Action Figure">Action Figure</Option>
          <Option value="Funko Pop">Funko Pop</Option>
        </Select>

        <Select
          value={priceFilter}
          onChange={(e) => onPriceChange(e.target.value)}
        >
          <option value="ALL">
            Todos os preços
          </option>

          <option value="100">
            Até R$100
          </option>

          <option value="300">
            R$100 até R$300
          </option>

          <option value="500">
            R$300 até R$500
          </option>

          <option value="500+">
            Acima de R$500
          </option>
        </Select>
      </SelectContainer>
    </Container>
  );
}

export default Search;
