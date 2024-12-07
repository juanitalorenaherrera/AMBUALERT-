import Ambulancia from "../../assets/ambulancia.png";

export const Header = () => {
  return (
    <header className="bg-red-500 text-white py-2 px-5 text-center">
      {/* Título */}
      <h1 className="m-0 text-2xl font-semibold">Ambualert</h1>

      {/* Navegación */}
      <nav className="mt-2">
        <ul className="list-none p-0 flex justify-center items-center gap-4">
          <li>
            <button
              className="bg-red-500 hover:bg-red-400 text-white font-medium py-2 px-4 rounded"
              aria-label="Llamar Usuario"
            >
              LLAMAR USUARIO
            </button>
          </li>
          <li>
            <button
              className="bg-red-500 hover:bg-red-400 text-white font-medium py-2 px-4 rounded"
              aria-label="Llamar Paramédicos"
            >
              LLAMAR PARAMÉDICOS
            </button>
          </li>
          <li>
            <img
              src={Ambulancia}
              alt="Icono de ambulancia"
              className="w-12"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

