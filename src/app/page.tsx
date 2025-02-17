import Nondashboard from "@/components/Nondashboard";
import Landing from "./(nondashboard)/landing/page";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Nondashboard />
      <main className="flex flex-grow items-center justify-center w-full h-full">
        <Landing />
      </main>
    </div>
  );
}
