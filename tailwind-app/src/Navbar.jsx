function Navbar({ children }) {
    return (
      <div className="flex flex-col min-h-screen">
        <nav className="bg-blue-600 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="text-white font-bold text-xl">
              MiSitio
            </div>
  
            {/* Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">Inicio</a>
              <a href="#" className="text-white hover:text-gray-300">Servicios</a>
              <a href="#" className="text-white hover:text-gray-300">Contacto</a>
            </div>
          </div>
        </nav>
  
        {/* Aquí va el contenido debajo del Navbar */}
        <main className="flex-grow">
          {children}
        </main>
      </div>
    );
  }
  
  export default Navbar;
  