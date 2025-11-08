import React from "react";

function NewsLetterBox() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full bg-gradient-to-l from-[#141414] to-[#0c2025] flex flex-col items-center justify-center py-10 px-4 text-center gap-4">
      <p className="text-xl md:text-3xl text-[#a5faf7] font-semibold">
        Subscribe now & get 20% off
      </p>
      <p className="text-sm md:text-lg text-blue-100 max-w-[600px]">
        Subscribe now and enjoy exclusive savings, special deals, and early
        access to new collections.
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-[600px]"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 min-w-[250px] w-full md:w-auto bg-slate-300 px-4 py-2 rounded-lg text-black placeholder:text-gray-600"
          required
        />
        <button
          type="submit"
          className="bg-[#2e3030c9] text-white px-6 py-2 rounded-lg hover:bg-slate-500 transition-all"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsLetterBox;
