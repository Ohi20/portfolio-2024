"use client";
import Link from "next/link";
import React from "react";

const achievementsList = [
  {
    Medium: "Facebook",
    Link: "https://www.facebook.com/ashraf.ohi.1/",
  },
  {
    Medium: "Instagram",
    Link: "https://www.instagram.com/probaad_ahmed_/",
  },
  {
    Medium: "LinkedIn",
    Link: "https://www.linkedin.com/in/ashrafohi/",
  },
  {
    Medium: "Github",
    Link: "https://github.com/Ohi20",
  },
];

const SocialMedia = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <Link
                href={achievement.Link}
                target="_blank"
                className="text-[#ADB7BE] text-base"
              >
                <p className="text-[#ADB7BE] text-base">{achievement.Medium}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SocialMedia;
