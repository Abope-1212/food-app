"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import classes from "./image-slideshow.module.css";

// Image imports
import burgerImg from "@/assets/burger.jpg";
import curryImg from "@/assets/curry.jpg";
import dumplingsImg from "@/assets/dumplings.jpg";
import macncheeseImg from "@/assets/macncheese.jpg";
import pizzaImg from "@/assets/pizza.jpg";
import schnitzelImg from "@/assets/schnitzel.jpg";
import tomatoSaladImg from "@/assets/tomato-salad.jpg";

// Image data array
const images = [
  { src: burgerImg, alt: "A delicious, juicy burger" },
  { src: curryImg, alt: "A delicious, spicy curry" },
  { src: dumplingsImg, alt: "Steamed dumplings" },
  { src: macncheeseImg, alt: "Mac and cheese" },
  { src: pizzaImg, alt: "A delicious pizza" },
  { src: schnitzelImg, alt: "A delicious schnitzel" },
  { src: tomatoSaladImg, alt: "A delicious tomato salad" },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image slideshow logic with auto-rotation
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`${classes.imageContainer} ${
            index === currentImageIndex ? classes.active : ""
          }`}
        >
          <Image src={image.src} className={classes.img} alt={image.alt} />
        </div>
      ))}
    </div>
  );
}
