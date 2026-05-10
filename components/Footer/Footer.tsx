export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-gray-500 text-sm">
          © 2026 Copyright. All rights reserved.
        </p>
        <h4 className="text-gray-500">A Tradition of Excellence</h4>
        <div className="flex space-x-6">
          <a
            target="_blank"
            href="https://www.facebook.com/people/Ophiris-Madagascar/61587187803977/"
            className="text-gray-400 hover:text-[#C5A059] transition-colors"
            title="Follow Ophiris on Facebook"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/ophirismadagascar?igsh=MW5qNHR4bXFsdTd6NA=="
            className="text-gray-400 hover:text-[#C5A059] transition-colors"
            title="Follow Ophiris on Instagram"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
