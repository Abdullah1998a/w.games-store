export function Images({ images, coverImg }) {
  return (
    <div className="grid grid-cols-6">
      <div className="p-4 col-span-4 grid place-items-center border-t-[1px] border-b-[1px] border-s-[1px]">
        <img
          src={coverImg.src}
          alt={coverImg.alt}
          className="drop-shadow-xl w-[55%]"
        />
      </div>
      <div className="col-span-2 grid justify-center border-s-[1px]">
        {images.map(({ id, src, alt }) => (
          <div
            className={`p-4 ${
              id === 1 ? "border-t-[1px]" : null
            } border-b-[1px] border-e-[1px] grid place-items-center`}
            key={id}
          >
            <img src={src} alt={alt} className="drop-shadow-xl w-3/4" />
          </div>
        ))}
      </div>
    </div>
  );
}
