export function Details({ features }) {
  return (
    <div className="w-1/2 pe-8 py-2 border-e-[1px]">
      <h3 className="text-xl uppercase font-medium [letter-spacing:2px] mb-2">
        Features
      </h3>
      <div className="grid gap-4">
        {features.map((feature, ind) => (
          <p key={feature}>
            <span className="text-lg font-semibold">{ind + 1}</span>. {feature}
          </p>
        ))}
      </div>
    </div>
  );
}
