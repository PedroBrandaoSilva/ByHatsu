import { InputSearch, Select, Container } from "./style";

function Search({ value, onChange, styleFilter, onStyleChange }) {
  return (
    <Container>
      <InputSearch
        type="text"
        placeholder="Buscar anime ou personagem"
        value={value}
        onChange={e => onChange(e.target.value)}
      />

      <Select
        value={styleFilter}
        onChange={e => onStyleChange(e.target.value)}
      >
        <option value="ALL">Todos</option>
        <option value="Action Figure">Action Figure</option>
        <option value="Funko Pop">Funko Pop</option>
      </Select>
    </Container>
  );
}

export default Search;
