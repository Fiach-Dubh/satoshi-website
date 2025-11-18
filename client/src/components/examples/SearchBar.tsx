import SearchBar from "../SearchBar";

export default function SearchBarExample() {
  return (
    <div className="p-8 max-w-md">
      <SearchBar
        placeholder="Search the archive..."
        onSearch={(query) => console.log("Searching for:", query)}
      />
    </div>
  );
}
