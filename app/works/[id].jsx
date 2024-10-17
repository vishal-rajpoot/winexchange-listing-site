/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const works = [
  {
    id: 1,
    title: "AI-Powered Investment App",
    description:
      "Built an AI-powered investment platform to predict stock trends.",
    welcomeBonus: "50% Up to 50,000 INR",
    ratings: "4.8",
    logo: "/images/logo1.png", // Example logo path
    content: "This is detailed content about the AI-Powered Investment App.",
    image: "/images/investment-app.png", // Example image path
  },
  {
    id: 2,
    title: "Next-Gen Blogging Platform",
    description: "Developed a blogging platform with real-time commenting.",
    welcomeBonus: "75% Up to 30,000 INR",
    ratings: "4.9",
    logo: "/images/logo2.png",
    content: "This is detailed content about the Next-Gen Blogging Platform.",
    image: "/images/blogging-platform.png",
  },
  {
    id: 3,
    title: "Real-Time Sports Betting App",
    description: "Launched a sports betting app with real-time odds updates.",
    welcomeBonus: "100% Up to 25,000 INR",
    ratings: "5.0",
    logo: "/images/logo3.png",
    content: "This is detailed content about the Real-Time Sports Betting App.",
    image: "/images/sports-betting.png",
  },
];

export default function WorkDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Find the work that matches the dynamic id
  const work = works.find((work) => work.id === parseInt(id));

  if (!work) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />

      <div className="flex container mx-auto py-8 space-x-4">
        {/* Left Column - 30% */}
        <div className="w-3/12 bg-gray-100 p-4 flex flex-col items-center">
          <img src={work.logo} alt={work.title} className="h-20 w-20 mb-4" />
          <h2 className="text-xl font-bold mb-4">{work.title}</h2>
          <div className="card bg-white p-4 shadow-lg rounded-lg">
            <p>{work.description}</p>
          </div>
        </div>

        {/* Center Column - 60% */}
        <div className="w-6/12 bg-white p-6">
          <h1 className="text-3xl font-bold mb-4">{work.title}</h1>
          <p className="mb-4">{work.content}</p>
          <img
            src={work.image}
            alt={work.title}
            className="w-full h-auto mb-4"
          />
        </div>

        {/* Right Column - 10% */}
        <div className="w-1/12 bg-gray-100 p-4 flex flex-col items-center">
          <img src={work.logo} alt="Logo" className="h-10 w-10 mb-2" />
          <p className="text-sm">Some small text here.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
