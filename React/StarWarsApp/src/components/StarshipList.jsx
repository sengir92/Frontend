import React, { useState, useEffect } from "react";
import axios from "axios";
import StarshipItem from "./StarshipItem";
import StarshipDetails from "./StarshipDetails";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import Loading from "./Loading";

function StarshipList() {
  const [starships, setStarships] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [selectedStarship, setSelectedStarship] = useState(null);

  useEffect(() => {
    fetchStarships();
  }, [page, searchTerm]);

  const fetchStarships = async () => {
    try {
      const response = await axios.get(
        `https://swapi.dev/api/starships/?page=${page}&search=${searchTerm}`
      );

      setStarships(response.data.results);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    console.log(page);
  };

  const handleStarshipClick = (starship) => {
    setSelectedStarship(starship);
    console.log(starship);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <SearchBar value={searchTerm} onChange={handleSearch} />
      {starships.length == 0 && <Loading />}
      <div className="flex flex-row">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-16 pb-4 ">
          {starships.map((starship, idx) => (
            <StarshipItem
              key={idx}
              starship={starship}
              onClick={handleStarshipClick}
              idx={idx}
            />
          ))}
        </ul>
      </div>

      <Pagination
        page={page}
        setPage={setPage}
        totalPages={4}
        handleLoadMore={handleLoadMore}
        starships={starships}
        setStarships={setStarships}
      />
      {selectedStarship && (
        <StarshipDetails
          starship={selectedStarship}
          onClose={() => setSelectedStarship(null)}
          idx={selectedStarship.idx} 
        />
      )}
    </div>
  );
}

export default StarshipList;