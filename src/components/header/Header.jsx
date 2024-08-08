export function Header() {
  return (
    <header className="flex justify-between items-center">
      <h1 className="uppercase text-5xl font-medium">
        <span className="custom-line">
          <span className="w-10 h-2 absolute -left-44 top-1/2 -translate-y-1/2 bg-slate-50 rounded-lg slide-effect"></span>
          simply
        </span>
        <span>playing game</span>
      </h1>
      <div className="w-1/2 ps-10">
        <p className="text-xl mb-2 text-slate-800">
          Your ultimate destination for all <br />
          gaming stuff
        </p>
        <ul className="flex items-center gap-2 uppercase text-gray-400 text-[0.95rem]">
          <li className="[letter-spacing:5px]">Modern</li>
          <li>•</li>
          <li className="[letter-spacing:5px]">Original</li>
        </ul>
      </div>
    </header>
  );
}
