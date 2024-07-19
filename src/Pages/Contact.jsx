
const Contact = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <p className="text-gray-700 leading-relaxed">
          Puedes contactarnos a través de los siguientes medios:
        </p>
        <ul className="mt-4">
          <li className="flex items-center text-gray-700 leading-relaxed">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.999 2A2 2 0 002 4v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm0 2h12v12H4V4z" clipRule="evenodd" />
            </svg>
            e-fake-shop@gmail.com
          </li>
          <li className="flex items-center text-gray-700 leading-relaxed mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 13.618V15a1 1 0 102 0v-1.382A3.5 3.5 0 0115.382 11H17a1 1 0 100-2h-1.618A3.5 3.5 0 0111 4.618V6a1 1 0 102 0V4.382A3.5 3.5 0 016.618 9H5a1 1 0 100 2h1.618A3.5 3.5 0 019 13.618z" clipRule="evenodd" />
            </svg>
            +123 456 789
          </li>
          <li className="flex items-center text-gray-700 leading-relaxed mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 10a2 2 0 114 0 2 2 0 01-4 0z" clipRule="evenodd" />
            </svg>
            Web
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
