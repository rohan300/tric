export default function WaitlistSection() {
    return (
      <div className="h-screen flex flex-col items-center justify-center px-6">
        <h2 className="text-6xl font-semibold text-[#494F62] mb-20 text-center">
          Don’t hesitate, Join our waitlist today!
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Email here"
            className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#64D9B4] w-[25rem] text-lg font-public text-[#6D737A]"
          />
          <button className="bg-[#4DC39E] text-[#494F62] px-6 py-3 rounded-md text-lg font-medium hover:bg-green-600 transition">
            Join Waitlist for Free
          </button>
        </div>
      </div>
    );
  }