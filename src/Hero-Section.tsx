import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    setMessage("Thank you for joining the waitlist!");
    setEmail("");
  };

  return (<div className="flex flex-col h-screen">
    <div className="flex flex-row justify-center pt-4 ">
      <img src="/logo.png" alt="Logo" className="h-[5vh]" />
    </div>
    <div className="flex flex-col md:flex-row items-center md:mt-[16vh] justify-center text-[#494F62] md:space-x-36">
      {/* Left Content */}
      <div className="flex items-end flex-col font-sans">
        <div className="w-fit">
          <h1 className="text-[5rem] font-bold tracking-widest leading-1">
            Ignite Curiosity,
          </h1>
          <div className="flex flex-row items-start w-full">
            <div className="flex flex-col flex-1 justify-start">
              <h1 className="text-[5rem] font-bold tracking-widest leading-1">
                Engineer
              </h1>
              <h1 className="text-[5rem] font-bold tracking-widest leading-1">
                Brilliance
              </h1>
            </div>
            <img src="/arrow.png" alt="Image" className="w-48 mr-8 mt-4" />
          </div>
          <p className="mt-4 text-[1.5rem] font-public text-[#494F62] font-bold">
                Smart Learning, One-Click Efficiency
              </p>
              <p className="text-[1.35rem] font-normal text-[#889099]">
                Integrated Notes & Flashcards, Organized Tasks & Assignments
              </p>
              <form onSubmit={handleSubmit} className="mt-4 flex space-x-8">
                <Input
                  type="email"
                  placeholder="Email here"
                  className="p-2 rounded-lg text-black h-[4rem] placeholder:text-lg !text-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button className="bg-[#4DC39E] text-lg text-white px-4 py-2 rounded-lg h-[4rem]">
                  Join Waitlist for Free
                </Button>
              </form>
              {message && (
                <p className="mt-2 text-sm text-green-600">{message}</p>
              )}
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img src="/Saly-10.png" alt="Image" className="h-[30vh] md:h-[45vh] max-h-[50vh] w-auto" />
      </div>
    </div>
    </div>
  );
}
