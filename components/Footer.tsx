const Footer = () => (
    <footer className="bg-black text-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold">Let&apos;s work together</h2>
        <p className="text-gray-400 mt-2">We build digital products that transform businesses.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
        <a
          href="mailto:info@softstructures.co"
          className="underline text-lg hover:text-green-500 transition"
        >
          inema9886@gmail.com
        </a>
        <span className="text-lg">+234 7082995663</span>
        <span className="text-lg">Lagos, Nigeria</span>
      </div>
      <div className="mt-8 text-center">
        <button className="px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition">
          Get in Touch
        </button>
      </div>
    </footer>
  );
  
  export default Footer;
  