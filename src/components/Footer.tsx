export default function Footer() {
  return (
    <footer className="bg-[#060309] border-t border-[#5B2D8E]/20 py-8 px-6">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <span className="font-black text-[#7B3FBE] uppercase tracking-widest text-xs">
            PYMENS
          </span>
          <span>·</span>
          <span>Grip Spray Pro</span>
        </div>
        <p>© {new Date().getFullYear()} PYMENS. All rights reserved.</p>
        <p className="text-xs">
          Product available exclusively on{" "}
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
