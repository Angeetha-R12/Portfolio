import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  // Local state to track pending status
  const [pending, setPending] = useState(false);

  const handleSubmit = () => {
    setPending(true);
    // Add your form submission logic here

    // Simulate form submission completion (remove or replace with actual logic)
    setTimeout(() => {
      setPending(false);
    }, 2000);
  };

  return (
    <button
      type="submit"
      onClick={handleSubmit}
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
