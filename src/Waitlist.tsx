import { useState } from "react";
import { supabase } from "./lib/supabaseClient";

export default function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      // Insert into Supabase waitlist table
      const { data, error } = await supabase
        .from("waitlist")
        .insert([{ email }]);

      console.log("Supabase Response:", data, error);

      if (error) {
        throw error;
      }

      setMessage(
        "Thank you for joining the waitlist! We will keep you updated!"
      );
      setEmail("");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
      console.error("Supabase Error:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center px-6">
      <h2 className="text-6xl font-semibold text-[#494F62] mb-20 text-center">
        Don’t hesitate, Join our waitlist today!
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-4">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row items-center gap-4"
        >
          <input
            type="email"
            placeholder="Email here"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64D9B4] w-[25rem] text-lg font-public text-[#6D737A]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[#4DC39E] text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-green-600 transition"
          >
            Join Waitlist for Free
          </button>
        </form>
      </div>

      {/* Message */}
      {message && <p className="mt-4 text-lg text-green-600">{message}</p>}
    </div>
  );
}
