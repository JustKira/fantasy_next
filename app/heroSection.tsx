"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const champions: string[] = [
  "Jinx",
  "LeeSin",
  "Vladimir",
  "Thresh",
  "Ahri",
  "Akali",
  "Zed",
  "Darius",
  "Annie",
  "Vayne",
  "Katarina",
  "Ezreal",
  "Ashe",
  "Garen",
  "MissFortune",
  "Riven",
  "Teemo",
  "Nasus",
  "Jhin",
  "Pyke",
  "Fiora",
  "AurelionSol",
  "Kassadin",
  "Yone",
  "Varus",
  "Galio",
  "Nidalee",
  "Renekton",
  "Janna",
  "Azir",
];
const HeroSection = () => {
  const [champion, setChampion] = useState<String>("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * champions.length);
    const randomChampion = champions[randomIndex];
    setChampion(randomChampion);
  }, []);
  return (
    <section className="relative flex justify-center items-center h-screen">
      <div className="relative flex justify-center items-center border border-gray-900 w-[80vw] h-[80vh] bg-center bg-cover drop-shadow-md overflow-hidden">
        <div className="relative ">
          <div className="relative flex flex-col items-center justify-center text-white z-40 py-60 px-96  bg-center rounded-md border border-white transition-all duration-300">
            <div className="flex flex-col h-[80%]">
              <h1 className="font-bold text-6xl drop-shadow-sm ">FANTASY</h1>
              <h2 className="font-light text-6xl drop-shadow-sm ">
                {" "}
                ARABIAN LEAGUE
              </h2>
              <div className="mt-2 uppercase">Join Now</div>
            </div>
          </div>
          {/* <div className="absolute bg-[rgba(255,255,255,0.6)] backdrop-blur-sm w-[300vw] h-44 -translate-x-[100vw] z-30 top-0 -translate-y-4"></div> */}
        </div>

        <Link className="rounded-lg" href={"/fantasy"}>
          <img
            className="absolute top-0 left-0 w-[110vw] hover:scale-110 blur-sm hover:blur-0 transition-all duration-300 ease-in-out "
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`}
          />
        </Link>
      </div>
      <img src="" />
    </section>
  );
};

export default HeroSection;
