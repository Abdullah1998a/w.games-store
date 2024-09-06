export function Service({ title, icon, description }) {
  return (
    <div className="text-center bg-stone-200 px-6 py-8 rounded-xl shadow-md">
      <img src={icon} alt={`${title} icon`} className="w-12 mx-auto" />
      <h3 className="font-medium uppercase text-lg [letter-spacing:3px] my-4">
        {title}
      </h3>
      <p className="text-pretty">{description}</p>
    </div>
  );
}
