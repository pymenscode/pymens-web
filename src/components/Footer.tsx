export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <span className="font-black text-[#5B2D8E] uppercase tracking-widest text-xs">
          PYMENS
        </span>
        <p>© {new Date().getFullYear()} PYMENS. All rights reserved.</p>
        <p className="text-xs">
          Available on{" "}
          <a
            href="https://www.amazon.com/PYMENS-Basketball-Grip-Spray-Pro/dp/B0FGSKGWFM/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F26522] hover:underline"
          >
            Amazon.com
          </a>
        </p>
      </div>
    </footer>
  );
}
