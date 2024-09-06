import avatar from "../../assets/images/avatar-1.png";

export function Review({ review, currentReview, setCurrentReview, length }) {
  const {
    name,
    avatar: { src, alt },
    date,
    message,
    evaluation,
  } = review;
  const handleSlider = (mode) => {
    if (mode === "increase") {
      let newSlide = currentReview + 1;
      setCurrentReview(newSlide >= length ? 0 : newSlide);
    } else {
      let newSlide = currentReview - 1;
      setCurrentReview(newSlide < 0 ? length - 1 : newSlide);
    }
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <img src={src} alt={alt} className="size-12 flex-grow-0" />
        <div>
          <h4 className="text-md uppercase font-medium [letter-spacing:2px]">
            {name}
          </h4>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <span className="flex items-center gap-2 ms-auto">
          {evaluation}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="text-yellow-500"
          >
            <path
              fill="currentColor"
              d="m7.625 6.4l2.8-3.625q.3-.4.713-.587T12 2t.863.188t.712.587l2.8 3.625l4.25 1.425q.65.2 1.025.738t.375 1.187q0 .3-.088.6t-.287.575l-2.75 3.9l.1 4.1q.025.875-.575 1.475t-1.4.6q-.05 0-.55-.075L12 19.675l-4.475 1.25q-.125.05-.275.063T6.975 21q-.8 0-1.4-.6T5 18.925l.1-4.125l-2.725-3.875q-.2-.275-.288-.575T2 9.75q0-.625.363-1.162t1.012-.763z"
            />
          </svg>
        </span>
      </div>
      <p>{message}</p>
      <div className="self-end flex gap-2">
        <button
          onClick={handleSlider}
          disabled
          className="bg-stone-200 text-slate-700 hover:bg-stone-300 disabled:text-gray-500 disabled:opacity-75 disabled:pointer-events-none p-2 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13.54 18a2.06 2.06 0 0 1-1.3-.46l-5.1-4.21a1.7 1.7 0 0 1 0-2.66l5.1-4.21a2.1 2.1 0 0 1 2.21-.26a1.76 1.76 0 0 1 1.05 1.59v8.42a1.76 1.76 0 0 1-1.05 1.59a2.23 2.23 0 0 1-.91.2"
            />
          </svg>
        </button>
        <button
          onClick={() => handleSlider("increase")}
          className="bg-stone-200 text-slate-700 hover:bg-stone-300 disabled:text-gray-500 disabled:opacity-75 disabled:pointer-events-none p-2 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="rotate-180"
          >
            <path
              fill="currentColor"
              d="M13.54 18a2.06 2.06 0 0 1-1.3-.46l-5.1-4.21a1.7 1.7 0 0 1 0-2.66l5.1-4.21a2.1 2.1 0 0 1 2.21-.26a1.76 1.76 0 0 1 1.05 1.59v8.42a1.76 1.76 0 0 1-1.05 1.59a2.23 2.23 0 0 1-.91.2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
