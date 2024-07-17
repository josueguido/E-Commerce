import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <section className="flex flex-col justify-center items-center text-center h-screen bg-white shadow-md rounded-lg p-8 gap-4">
                <h2 className="text-2xl font-bold mb-4">Sobre Nosotros</h2>
                <p className="text-gray-700 leading-relaxed text-balance">
                    Bienvenido a nuestra tienda virtual. En nuestra tienda, nos esforzamos por ofrecerte los mejores productos al mejor precio. Nos encanta ayudarte a encontrar exactamente lo que necesitas.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                    ¡Gracias por visitarnos y esperamos que disfrutes de tu experiencia de compra!
                </p>
                <Link to='/' className="py-2 px-4 rounded-lg bg-yellow-500">
                    Back
                </Link>
            </section>
        </>

    );
};

export default About;
