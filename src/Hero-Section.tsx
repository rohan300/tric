import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "./lib/supabaseClient";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      const { error } = await supabase.from("waitlist").insert([{ email }]);

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
    <div className="flex flex-col h-screen">
      <div className="flex flex-row justify-center pt-4 ">
        <img src="/logo.png" alt="Logo" className="h-[5vh]" />
      </div>
      <div className="flex flex-col md:flex-row items-center md:mt-[18vh] justify-center text-[#494F62] md:space-x-36">
        {/* Left Content */}
        <div className="flex items-end flex-col font-sans">
          <div className="w-fit">
            <h1 className="text-[9vh] font-bold tracking-widest leading-[1.1]">
              Ignite Curiosity,
            </h1>
            <div className="flex flex-row items-start w-full">
              <div className="flex flex-col flex-1 justify-start">
                <h1 className="text-[9vh] font-bold tracking-widest leading-[1.1]">
                  Engineer
                </h1>
                <h1 className="text-[9vh] font-bold tracking-widest leading-[1.1]">
                  Brilliance
                </h1>
              </div>
              <img
                src="/arrow.png"
                alt="Image"
                className="w-[16vh] mr-[2vh] mt-[2vh]"
              />
            </div>

            <p className="mt-[2.75vh] text-[2.5vh] font-public text-[#494F62] font-bold">
              Smart Learning, One-Click Efficiency
            </p>
            <p className="text-[2.2vh] font-normal text-[#889099]">
              Integrated Notes & Flashcards, Organized Tasks & Assignments
            </p>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-[2vh] flex space-x-[2vh]"
            >
              <Input
                type="email"
                placeholder="Email here"
                className="p-[1vh] rounded-lg text-black h-[6vh] placeholder:text-[2vh] !text-[2vh]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button className="bg-[#4DC39E] text-[2vh] text-white px-[2vh] py-[1vh] rounded-lg h-[6vh]">
                Join Waitlist for Free
              </Button>
            </form>

            {/* Message */}
            {message && (
              <p className="mt-[1vh] text-[2vh] text-green-600">{message}</p>
            )}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="/Saly-10.png"
            alt="Image"
            className="h-[30vh] md:h-[45vh] max-h-[50vh] w-auto"
          />
        </div>
      </div>
    </div>
  );
}
