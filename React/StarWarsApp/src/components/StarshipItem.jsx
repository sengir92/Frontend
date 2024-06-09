export default function StarshipItem({ starship, onClick,idx }) {
    return (
      <div>
        <li
          className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md cursor-pointer w-[20rem] h-[20rem]"
          onClick={() => onClick(starship)}
        >
          {' '}
          <img
            src={`./images/${starship.name}.png`}
            alt=""
            className="w-[12rem] h-[12rem] opacity-100 "
          />
          <h2 className="text-2xl font-bold mb-2">{starship.name}</h2>
          <p>Model: {starship.model}</p>
        </li>
      </div>
    )
  }