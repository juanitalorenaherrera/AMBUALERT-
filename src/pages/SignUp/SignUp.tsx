import { Link } from "react-router";

export const Register = () => {
  return (
    <section className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mt-10">
      <h2 className="text-center text-red-500 text-2xl font-semibold mb-4">
        Registro
      </h2>
      <form className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="nombre"
            className="block text-gray-700 font-medium"
          >
            Nombre Completo:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label
            htmlFor="correo-electronico"
            className="block text-gray-700 font-medium"
          >
            Correo electrónico:
          </label>
          <input
            type="email"
            id="correo-electronico"
            name="correo-electronico"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label
            htmlFor="contrasena"
            className="block text-gray-700 font-medium"
          >
            Contraseña:
          </label>
          <input
            type="password"
            id="contrasena"
            name="contrasena"
            required
            className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-400 text-white font-medium py-2 rounded-lg text-center"
        >
          Registrarse
        </button>
      </form>
      <div className="block text-center mt-4 text-red-500 hover:underline">
        ¿Ya tienes una cuenta? <Link to={"/login"}>Inicia sesión</Link>
      </div>
    </section>
  );
};

