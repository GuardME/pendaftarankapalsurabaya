"use client";

import React, { useState } from 'react'
import Link from "next/link";
import { PiLockThin } from "react-icons/pi";
import Image from "next/image";
import Status from "@/app/status/page"
import { motion } from "framer-motion";
import useDownloader from "react-use-downloader";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 11,
        ease: "linear"
      }
    }
  }
}

const projects = [
    {
      imgLink: "/img/img1.jpg",
      title: "UI/ UX Case Study: Group Food Ordering",
      subT: "Designed an solution that simplifies the decision-making process and saves time for users while ordering food in a group.",
    },
    {
      imgLink: "/img/img2.jpg",
      title:
        "UI/ UX Case Study: Enabling local stores to sell on WhatsApp for Businesses",
      subT: "Designed a feature that simplifies local store sales on WhatsApp for businesses..",
    },
    {
      imgLink: "/img/img3.jpg",
      title: "Creating Dive platform's Trivia Game",
      subT: "Designed a trivia game to enhance user engagement during sessions on Dive platform.",
    },
  ];
  
  let link = [
    {
      date: "Dec 2022 - Apr 2023",
      imgLink: "/img/img6.jpg",
      title: "Product Design Intern",
      sub: "Avalon Scenes",
      subTitle:
        "At Scenes, we were building an all-in-one community platform that enables creators to connect & manage their community better.",
      bttn: "View my work",
    },
    {
      date: "Jul 2022 - Sep 2022",
      imgLink: "/img/img3.jpg",
      title: "Designer in Residence",
      sub: "10kdesigners",
      subTitle:
        "Design cohort run by Abhinav Chikara (aka Abnux) and Jayneil Dayal, that empowers designers through mentorship and real-world projects.",
    },
  
    {
      date: "Jan 2022 - Mar 2022",
      imgLink: "/img/img2.jpg",
      title: "Product Design Intern",
      sub: "Dive",
      subTitle:
        "I built and facilitated engaging remote experiences, connecting colleagues at work. I designed various games, including 'Word Pirate,' which became one of the platform's most-played games within two weeks of launch.",
    },
    {
      date: "Sep 2021 - Dec 2021 ",
      imgLink: "/img/img2.jpg",
      title: "Product Design Intern",
      sub: "Winuall",
      subTitle:
        "I focused on visual and interaction design for the product, crafting compelling narratives. My responsibilities included creating interactive features that enriched user experiences on both the app and website.",
    },
  ];



export default function frontpage() {
  const [show, setShow] = useState(link[0])
  
 
  return (
    <div className='mt-32'>
      <div className="flex gap-x-4">
        <img src="/img/logo_psdkp.png" 
             alt=""
             className='w-16 h-16 rounded-full object-cover'
        />

        <div>
            <h2 className='font-extrabold font-InterBlack dark:text-white text-3xl'>
                Usability Testing Modul Pendaftaran Kapal Pengawas
            </h2>
            <Link href={"https://www.instagram.com/ramadanyosi"}>
                <span className="text-neutral-500">
                    Surabaya 2023
                </span>
            </Link>
            <Status isAvailable/>
        </div>
      </div>

      <Link href={"https://surprise-incorporate-mercury-supports.trycloudflare.com"} target='_blank'>
      <button className="mt-10 border border-neutral-700/30 rounded-md p-2 w-full lg:w-65 bg-neutral-800/20 text-sm dark:text-neutral-400 font-semibold">
       Sistem Informasi Pengawasan
      </button>
      </Link>

      <Link href={"      https://drive.google.com/file/d/1gL1iC2rMeDLs5XVhN88n1yjZtUpIVseY/view?usp=share_link"} target='_blank'>
    <button className="mt-10 border border-neutral-700/30 rounded-md p-2 w-full lg:w-65 bg-neutral-800/20 text-sm dark:text-neutral-400 font-semibold">
      Download Manual Book
    </button>
    </Link>



      {/* Marque text */}

    
      {/* End Marque text */}

      {/* Project */}
   
 
      {/* End Project */}


      


    </div>
  )
}
