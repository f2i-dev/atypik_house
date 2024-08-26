'use client';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique pour gérer l'inscription à la newsletter
    console.log('Inscription à la newsletter avec:', email);
    setEmail(''); // Réinitialiser le champ email après inscription
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Atypik House. Tous droits réservés.</p>

        {/* Réseaux Sociaux */}
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-white hover:text-blue-500" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-blue-400" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-pink-500" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-white hover:text-blue-600" />
          </a>
        </div>

        {/* Informations de Contact */}
        <div className="mt-6">
          <p>Contactez-nous :</p>
          <p>Email : <a href="mailto:f2i.dev03.sg.sd.uf@gmail.com" className="text-blue-400 hover:underline">f2i.dev03.sg.sd.uf@gmail.com</a></p>
          <p>Téléphone : +33 1 23 45 67 89</p>
        </div>

        {/* Formulaire d'Inscription à la Newsletter */}
        <div className="mt-6">
          <form onSubmit={handleNewsletterSignup}>
            <label htmlFor="email" className="block mb-2 text-sm">
              Inscrivez-vous à notre newsletter :
            </label>
            <div className="flex justify-center gap-2">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
                className="p-2 rounded-md text-black"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                S&apos;inscrire
              </button>
            </div>
          </form>
        </div>

        {/* Liens vers les pages légales */}
        <div className="mt-6">
          <a href="/cgv" className="text-white hover:underline mx-2">CGV</a>
          <a href="/cgu" className="text-white hover:underline mx-2">CGU</a>
          <a href="/messages" className="text-white hover:underline mx-2">Mes messages</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
