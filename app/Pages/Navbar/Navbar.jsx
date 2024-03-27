"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const [formattedDate, setFormattedDate] = useState("");
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      const formattedDateString = currentDate.toLocaleDateString(
        "en-US",
        options
      );
      setFormattedDate(formattedDateString);

      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const formattedTimeString = `${hours % 12 || 12}:${
        minutes < 10 ? "0" : ""
      }${minutes} ${hours >= 12 ? "PM" : "AM"}`;
      setFormattedTime(formattedTimeString);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex justify-between">
      <div>
        <Image src={"/icons/Logo.png"} alt="Logo" width="180" height="180" />
      </div>
      <div className="flex justify-around mx-6">
        <div className="mx-2">{formattedDate}</div>
        <div className="mx-2">{formattedTime}</div>
        <div className="mx-4">
          <IoMdNotificationsOutline className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
