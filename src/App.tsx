import React from "react";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Welcome to the App</h1>
        <p>This is the body of your app.</p>
      </main>
    </div>
  );
};

export default App;