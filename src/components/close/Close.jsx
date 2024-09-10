export function Close({ setStatus }) {
  return (
    <button
      className="text-lg p-1.5 rounded-xl aspect-square text-white absolute top-2 right-2 bg-red-500"
      onClick={() => setStatus(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.5"
          d="m7 7l10 10M7 17L17 7"
        />
      </svg>
    </button>
  );
}
