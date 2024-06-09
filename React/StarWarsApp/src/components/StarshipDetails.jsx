export default function StarshipDetails({ starship, onClose, idx }) {
    console.log(idx)
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <img
            src={`./images/${starship.name}.png`} // Doğru resim yolunu oluşturuyoruz
            alt=""
            className="w-[12rem] h-[12rem]"
          />
          <h2 className="text-2xl font-bold mb-4">{starship.name}</h2>
          <p>Model: {starship.model}</p>
          <p>Passengers: {starship.passengers}</p>
          <p>Max Atmosphering Speed: {starship.max_atmosphering_speed}</p>
          <p>Manufacturer: {starship.manufacturer}</p>
          <p>Crew: {starship.crew}</p>
          <p>Cargo Capacity: {starship.cargo_capacity}</p>
          <button
            className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    )
  }