import React, { useState, useRef,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import CustomHook from "./CustomHook";
import { div } from "framer-motion/client";

function Projects() {
  const [listProjects] = useState([
    {
      name: "THE FIRST SPARK - BUCHO",
      des: "BUCHO was born from a chef’s passion and a shared dream. As a Continental Head Chef trained and experienced in the United Kingdom, I returned to my motherland, Kerala, with a desire to bring something unique to our food culture. Together with four partners I met by chance but bonded with through vision, we created BUCHO — a smoked food brand that blends global culinary techniques with Kerala’s rich flavours. The first spark of BUCHO came from our belief that food should be bold, soulful, and unforgettable. Every dish we craft carries the essence of international expertise, the freshness of local ingredients, and the warmth of the land we call home. BUCHO is not just a company; it is the beginning of a new smoked food experience from Kerala to the world.",
      mission: "Our own Food Company ",
      images: "/WhatsApp Image 2025-11-16 at 3.27.33 AM.jpeg",
    },
    {
      name: "OUR SOCIAL REACH",
      des: " At BUCHO, our mission has always been to take Kerala’s smoked food culture beyond borders and introduce it to a wider audience. Through consistent quality, innovative dishes, and authentic storytelling, we have built a growing community of food lovers across the country. Our social platforms have become a space where people discover the art of smoked cuisine, learn about our process, and connect with our journey. From engaging videos to behind-the-scenes kitchen moments and customer experiences, BUCHO has successfully sparked a nationwide interest in smoked continental flavours. Today, our reach extends far beyond our hometown—spreading awareness, inspiring curiosity, and bringing a new culinary trend into the hearts of food enthusiasts across India. .",
      mission: "To Make Our Food Quality Spread Across The World",
      images: "/WhatsApp Image 2025-11-25 at 2.16.18 AM.jpeg",
    },
    {
      name: "MY VISION",
      des: "My vision is to celebrate and revive the timeless art of traditional smoking, creating a dining experience that honours heritage while embracing innovation. I aim to elevate smoked cuisine by blending age-old methods with modern culinary creativity—crafting bold flavours, authentic dishes, and premium preparations that set new standards in the food industry.As the smokehouse grows, I envision expanding into dedicated smoking facilities, curated dining spaces, and wider delivery services that bring the essence of true traditional flavours to more people. I hope to inspire future chefs, educate guests about the beauty and depth of traditional smoking techniques, and establish my smokehouse as a trusted, iconic name in rustic and refined culinary craftsmanship.With passion guiding every dish and quality at the heart of every experience, I am shaping a future where my smokehouse and restaurant stand as symbols of authenticity, artistry, and unforgettable flavour.",
      mission: "Expanding Our Ventures",
      images: "/c2bd900d-8baf-40d5-a5ff-8ac556565267.jpeg",
    },
    {
      name: "CUSTOMER FOCUS",
      des: "My customers are at the heart of everything I create. I believe that great food begins with truly understanding the people I serve—their tastes, their expectations, and their desire for quality. Every dish I craft is designed to deliver a memorable experience, combining authentic flavours with consistent excellence. I listen closely to feedback, adapt my menus to evolving preferences, and ensure that every interaction reflects warmth, honesty, and professionalism. My goal is simple: to make every customer feel valued and to serve smoked food that inspires trust, satisfaction, and a lasting connection.",
      mission: "People's Attention",
      images: "/WhatsApp Image 2025-11-16 at 11.53.56 PM.jpeg",
    },
    {
      name: "ESSENTIALS NEEDED FOR THE CONCEPT",
      des: "A Perfect space for indoor as well as for a outdoor cafe , which includes smoker chambers , A good spacious kitchen with needed machines and equipments , Experienced chefs , A good interactive service team , A good inventory system etc",
      mission: " ",
      images: "/WhatsApp Image 2025-11-16 at 1.47.09 AM.jpeg",
      
    },
   
   
  ]);
  
 
  
  const slideshowImages = [
    // "/WhatsApp Image 2025-11-16 at 1.47.07 AM (1).jpeg",
    "/WhatsApp Image 2025-11-16 at 3.27.33 AM.jpeg",
    "/WhatsApp Image 2025-11-16 at 3.37.10 AM.jpeg",
    "/WhatsApp Image 2025-11-16 at 11.53.56 PM.jpeg",
    "/WhatsApp Image 2025-11-16 at 1.47.09 AM.jpeg",
    // "/WhatsApp Image 2025-11-16 at 1.47.05 AM.jpeg",
   " /WhatsApp Image 2025-11-25 at 2.16.17 AM.jpeg",
  ];

  const [index, setIndex] = useState(0);

  const prevVariants = {
    initial: { x: "-100%", scale: 0.8, opacity: 0, rotateY: -15 },
    animate: { x: "-100%", scale: 0.8, opacity: 0.5, rotateY: -15, zIndex: 1 },
    exit: { x: "-100%", scale: 0.6, opacity: 0, rotateY: -20 },
  };

  const currentVariants = {
    initial: { x: "0%", scale: 0.9, opacity: 0, rotateY: 0 },
    animate: { x: "0%", scale: 1, opacity: 1, rotateY: 0, zIndex: 3 },
    exit: { x: "0%", scale: 1.1, opacity: 0, rotateY: 0 },
  };

  const nextVariants = {
    initial: { x: "100%", scale: 0.8, opacity: 0, rotateY: 15 },
    animate: { x: "100%", scale: 0.8, opacity: 0.5, rotateY: 15, zIndex: 1 },
    exit: { x: "100%", scale: 0.6, opacity: 0, rotateY: 20 },
  };

  const imageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 1.2, ease: "easeInOut" },
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);

    return () => clearInterval(autoSlide);
  }, []);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % slideshowImages.length);

  const prevSlide = () =>
    setIndex((prev) =>
      prev === 0 ? slideshowImages.length - 1 : prev - 1
    );
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);


  // const slideshowImages = [
  //   "/WhatsApp Image 2025-11-13 at 16.57.52_1caf4634.jpg",
  //   "/WhatsApp Image 2025-11-17 at 12.32.00 AM.jpeg",
  //   "/WhatsApp Image 2025-11-16 at 3.37.10 AM.jpeg",
  //   "/WhatsApp Image 2025-11-16 at 11.53.56 PM.jpeg",
  //   "/WhatsApp Image 2025-11-16 at 1.47.09 AM.jpeg",
  // ];

  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const autoSlide = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % slideshowImages.length);
  //   }, 3000);

  //   return () => clearInterval(autoSlide);
  // }, []);

  // const nextSlide = () =>
  //   setIndex((prev) => (prev + 1) % slideshowImages.length);

  // const prevSlide = () =>
  //   setIndex((prev) =>
  //     prev === 0 ? slideshowImages.length - 1 : prev - 1
  //   );


  return (
    <section className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Business Proposal - Traditional Smoke house and Restaurant
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}At our Traditional Smoke House & Restaurant, I believe great food brings people together. That’s why i prepare every dish using familiar, old-style smoking techniques that fill the air with rich aromas and the heart with comfort. The menu celebrates traditional flavors, hearty meals, and the joy of sharing food with family and friends. Warm hospitality, cozy ambience, and authentic smokehouse cooking—everything a guest need for a perfect meal.
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <div className="images">
              {value.images ? (
                <img
                  src={value.images}
                  alt={value.name}
                  onError={(e) => (e.target.style.display = "none")}
                />
              ) : (
                <div className="no-image">No Image Available</div>
              )}
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faPersonCircleQuestion} />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              {key === listProjects.length - 1 && (
                <a
                  href="/lay out - Copy (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                  style={{ marginTop: "20px", display: "inline-block" }}
                >
                  LAYOUT FOR THE CONCEPT
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

       {/* ------------- PREMIUM 3D SLIDESHOW --------------- */}
       {/* <section className="premium-slideshow-container">
        <div className="slideshow-wrapper">
          <div
            className="slideshow-3d"
            style={{
              transform: `translateZ(-200px) rotateY(-${index * 72}deg)`,
            }}
          >
            {slideshowImages.map((img, i) => (
              <div
                key={i}
                className="slide-3d"
                style={{
                  backgroundImage: `url(${img})`,
                  transform: `rotateY(${i * 72}deg) translateZ(200px)`,
                }}
              />
            ))}
          </div>
        </div>

        <button className="nav-btn prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="nav-btn next" onClick={nextSlide}>
          ❯
        </button>
      </section> */}

      {/* -------------------- SIMPLE IMAGE SLIDESHOW -------------------- */}
      <div className="carousel-header">
        <h2 className="carousel-title">GALLERY SHOWCASE</h2>
        <p className="carousel-description">
          Explore our culinary journey through these captivating images showcasing the essence of My Smoked food experience.
        </p>
      </div>
      <section className="simple-slideshow-container">
        <AnimatePresence mode="wait">
          <div className="slideshow-image">
            <motion.div
              key={`prev-${(index - 1 + slideshowImages.length) % slideshowImages.length}`}
              className="slide prev"
              variants={prevVariants}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <motion.img
                src={slideshowImages[(index - 1 + slideshowImages.length) % slideshowImages.length]}
                alt="Previous"
                variants={imageVariants}
              />
            </motion.div>
            <motion.div
              key={`current-${index}`}
              className="slide current"
              variants={currentVariants}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.img
                src={slideshowImages[index]}
                alt="Current"
                variants={imageVariants}
              />
            </motion.div>
            <motion.div
              key={`next-${(index + 1) % slideshowImages.length}`}
              className="slide next"
              variants={nextVariants}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <motion.img
                src={slideshowImages[(index + 1) % slideshowImages.length]}
                alt="Next"
                variants={imageVariants}
              />
            </motion.div>
          </div>
        </AnimatePresence>

        <button className="nav-btn prev" onClick={prevSlide}>❮</button>
        <button className="nav-btn next" onClick={nextSlide}>❯</button>
      </section>

    </section>

    
  );
}
export default Projects;
