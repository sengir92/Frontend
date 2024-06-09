export default function Pagination({
    page,
    totalPages,
    handleLoadMore,
    setPage,
    starships,
    setStarships,
  }) {
    const handleLoadMoreClick = (e) => {
      e.preventDefault()
      setStarships([])
      if (page < totalPages) {
        const newPage = page + 1 // Yeni sayfa değerini al
        setPage(newPage) // State'i güncelle
      }
    }
  
    return (
      <div>
        <button
          onClick={handleLoadMoreClick}
          className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 w-[20rem] "
          disabled={page >= totalPages}
        >
          More
        </button>
      </div>
    )
  }