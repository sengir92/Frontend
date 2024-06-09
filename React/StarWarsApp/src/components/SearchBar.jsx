export default function SearchBar({ value, onChange }) {
    return (
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search by name or model..."
        className="mb-4 px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none w-[16rem]"
      />
    )
}