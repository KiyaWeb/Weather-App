import { useState } from "react"

const Search = ({setCity}) => {
  const [input , setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input) {
      setCity(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        placeholder="Enter city"
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default Search;

