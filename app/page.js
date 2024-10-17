"use client";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";

const works = [
  {
    id: 1,
    title: "AI-Powered Investment App",
    description:
      "Built an AI-powered investment platform to predict stock trends.",
    welcomeBonus: "50% Up to 50,000 INR",
    ratings: "4.8",
  },
  {
    id: 2,
    title: "Next-Gen Blogging Platform",
    description: "Developed a blogging platform with real-time commenting.",
    welcomeBonus: "75% Up to 30,000 INR",
    ratings: "4.9",
  },
  {
    id: 3,
    title: "Real-Time Sports Betting App",
    description: "Launched a sports betting app with real-time odds updates.",
    welcomeBonus: "100% Up to 25,000 INR",
    ratings: "5.0",
  },
];

export default function Home() {
  const pathname = usePathname();

  const pageName =
    pathname === "/"
      ? "Winexch India Review"
      : pathname.slice(1).replace("-", " ");

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <Navbar />

      <div className=" space-y-2 mx-auto">
        <h1 className="text-3xl font-bold py-8 bg-gray-100 text-center">
          Best Online Casinos for Real Money in India 2024
        </h1>
        <div className="text-sm text-gray-400 mb-4 ml-4">
          <span>Home</span> &gt;&gt; <span>{pageName}</span>
        </div>
        <p className="paragraph">
          Launched in 2021, Winexch made its debut in India as a comprehensive
          casino and gaming platform, operating under a Curaçao license. This
          licensing ensures that users can engage in online sports betting, play
          a variety of games, enjoy live streams of sports like football,
          tennis, and cricket, and place bets in live casinos with confidence.
        </p>
        <p className="paragraph">
          The Curacao license legitimizes Winexch, providing users with a
          straightforward and secure betting experience.
        </p>
        <p className="paragraph">
          Catering to passionate Indian sports fans, Winexch offers coverage of
          major football and cricket events.
        </p>
        <p className="paragraph">
          In addition, Winexch lives up to its commitment to rewarding users,
          offering a generous welcome bonus of up to 175,000 rupees for sports
          and casino games, depending on the deposit amount and claim method.
        </p>
        <p className="paragraph">
          While the platform is secure and trustworthy, some potential users
          might still have reservations. To address any concerns, we’ve compiled
          a detailed review to answer all your questions about Winexch. Be sure
          to read this thorough analysis to clarify any doubts you may have.
        </p>
      </div>

      {/* Blog List */}
      <div className="container mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Our Best Projects</h1>
        <div className="grid grid-cols-1 gap-6">
          {works.map((work) => (
            <Link href={`/works/${work.id}`} key={work.id}>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition flex border border-orange-300 justify-between cursor-pointer">
                <h2 className="text-2xl font-semibold mb-2">{work.title}</h2>
                <div className="flex flex-col text-center">
                  <p className="text-gray-600 text-sm mb-2">Welcome Bonus</p>
                  <p className="text-black text-lg mb-2">{work.welcomeBonus}</p>
                </div>
                <div className="flex flex-col text-center">
                  <p className="text-gray-600 text-sm mb-2">
                    Ratings {work.ratings}
                  </p>
                </div>
                <div className="flex flex-col text-center">
                  <button className="text-white text-lg mb-2 rounded-lg bg-green-500">
                    Play Now
                  </button>
                  <p className="text-black text-md mb-2">Read Review</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
