import Logo from "../../assets/logo_small_icon_only.png";
export const Panel = () => {
  return (
    <aside className="bg-red-500 h-screen w-64 p-5 flex flex-col">
      {/* Logo */}
      <div className="logo mb-8 flex justify-center">
        <img
          src={Logo}
          alt="Ambualert"
          className="w-20 h-20"
        />
      </div>

      {/* Menú */}
      <nav className="menu">
        <ul className="menu__items list-none p-0 flex flex-col gap-4">
          <li>
            <a
              href="#"
              className="block bg-red-400 hover:bg-red-600 text-white text-center font-semibold py-2 rounded-lg"
            >
              Incendio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block bg-red-400 hover:bg-red-600 text-white text-center font-semibold py-2 rounded-lg"
            >
              Accidente
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block bg-red-400 hover:bg-red-600 text-white text-center font-semibold py-2 rounded-lg"
            >
              Rescate
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block bg-red-400 hover:bg-red-600 text-white text-center font-semibold py-2 rounded-lg"
            >
              Auxilio
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block bg-red-400 hover:bg-red-600 text-white text-center font-semibold py-2 rounded-lg"
            >
              Otro
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
