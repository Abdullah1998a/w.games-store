import { useEffect } from "react";

export function AddRemoveModel({ mode, setStatus }) {
  useEffect(() => {
    const timerID = setInterval(() => {
      setStatus({
        status: false,
        mode,
      });
    }, 1200);
    return () => clearInterval(timerID);
  }, [setStatus]);
  return (
    <div
      className={`grid place-items-center text-white fixed z-50 top-2 left-1/2 -translate-x-1/2 w-fit p-4 rounded-lg ${
        mode == "added" ? "bg-green-600" : "bg-red-600"
      }`}
    >
      The item has been {mode} successfully
    </div>
  );
}
