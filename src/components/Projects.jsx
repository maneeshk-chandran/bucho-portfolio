import React, { useState, useRef,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonCircleQuestion,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";

function Projects() {
  const [listProjects] = useState([
    {
      name: "THE FIRST SPARK - BUCHO",
      des: "BUCHO was born from a chef’s passion and a shared dream. As a Continental Head Chef trained and experienced in the United Kingdom, I returned to my motherland, Kerala, with a desire to bring something unique to our food culture. Together with four partners I met by chance but bonded with through vision, we created BUCHO — a smoked food brand that blends global culinary techniques with Kerala’s rich flavours. The first spark of BUCHO came from our belief that food should be bold, soulful, and unforgettable. Every dish we craft carries the essence of international expertise, the freshness of local ingredients, and the warmth of the land we call home. BUCHO is not just a company; it is the beginning of a new smoked food experience from Kerala to the world.",
      mission: "Our own Food Company ",
      language: "HTML5, CSS3, Django,...",
      images: "/WhatsApp Image 2025-11-16 at 3.24.06 AM.jpeg",
    },
    {
      name: "OUR SOCIAL REACH",
      des: " At BUCHO, our mission has always been to take Kerala’s smoked food culture beyond borders and introduce it to a wider audience. Through consistent quality, innovative dishes, and authentic storytelling, we have built a growing community of food lovers across the country. Our social platforms have become a space where people discover the art of smoked cuisine, learn about our process, and connect with our journey. From engaging videos to behind-the-scenes kitchen moments and customer experiences, BUCHO has successfully sparked a nationwide interest in smoked continental flavours. Today, our reach extends far beyond our hometown—spreading awareness, inspiring curiosity, and bringing a new culinary trend into the hearts of food enthusiasts across India. .",
      mission: "To Make Our Food Quality Spread Across The World",
      language: "HTML5, CSS3, React JS, Node Js,...",
      images: "/WhatsApp Image 2025-11-16 at 3.27.33 AM.jpeg",
    },
    {
      name: "OUR VISION",
      des: "Our vision at BUCHO is to redefine the smoked food experience and build a culinary movement that starts in Kerala and reaches the world. We aim to innovate continuously—introducing new techniques, bold flavours, and premium smoked dishes that set new standards in the food industry. As we grow, we see BUCHO expanding into dedicated smokehouses, nationwide delivery, and exclusive dining concepts that celebrate the authenticity of our craft. Our future goal is to inspire a new generation of chefs, educate customers about the beauty of smoked cuisine, and establish BUCHO as a trusted, iconic brand in global continental cooking. With passion as our fuel and quality as our promise, we are shaping a future where BUCHO becomes a name known for creativity, excellence, and unforgettable flavour.",
      mission: "Expanding Our Ventures",
      language: "HTML5, CSS3, React JS, Node Js,...",
      images: "/WhatsApp Image 2025-11-16 at 3.37.10 AM.jpeg",
    },
    {
      name: "CUSTOMER FOCUS",
      des: "At BUCHO, our customers are at the heart of everything we create. We believe that great food begins with understanding the people we serve—their tastes, their expectations, and their desire for quality. Every dish we craft is designed to deliver a memorable experience, combining authentic flavours with consistent excellence. We listen closely to feedback, adapt our menus to evolving preferences, and ensure that every interaction reflects warmth, honesty, and professionalism. Our goal is simple: to make every customer feel valued and to serve smoked food that inspires trust, satisfaction, and a lasting connection with BUCHO.",
      mission: "People's Attention",
      language: "HTML5, CSS3, React JS, Node Js,...",
      images: "/WhatsApp Image 2025-11-16 at 11.53.56 PM.jpeg",
    },
    {
      name: "ESSENTIALS NEEDED FOR THE CONCEPT",
      des: "A Perfect space for indoor as well as for a outdoor cafe , which includes smoker chambers , A good spacious kitchen with needed machines and equipments , Experienced chefs , A good interactive service team , A good inventory system etc",
      mission: " ",
      language: "HTML5, CSS3, React JS, Node Js,...",
      images: "/WhatsApp Image 2025-11-16 at 1.47.09 AM.jpeg",
    },
  ]);
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
  const slideshowImages = [
    "/WhatsApp Image 2025-11-16 at 3.24.06 AM.jpeg",
    "/WhatsApp Image 2025-11-16 at 3.27.33 AM.jpeg",
    "/WhatsApp Image 2025-11-16 at 3.37.10 AM.jpeg",
    "/WhatsApp Image 2025-11-16 at 11.53.56 PM.jpeg",
    "/WhatsApp Image 2025-11-16 at 1.47.09 AM.jpeg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 3000);

    return () => clearInterval(autoSlide);
  }, []);

  const nextSlide = () =>
    setIndex((prev) => (prev + 1) % slideshowImages.length);

  const prevSlide = () =>
    setIndex((prev) =>
      prev === 0 ? slideshowImages.length - 1 : prev - 1
    );


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
              <div className="mission">
                <div>
                  <FontAwesomeIcon icon={faEarthAmericas} />
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>
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

      {/* -------------------- GLASSMORPHIC 3D SLIDESHOW -------------------- */}
      <div className="carousel-header">
        <h2 className="carousel-title">Gallery Showcase</h2>
        <p className="carousel-description">
          Explore our culinary journey through these captivating images showcasing the essence of BUCHO's smoked food experience.
        </p>
      </div>
      <section className="glass-3d-container">
        <div className="glass-3d-wrapper">
          
          <div
            className="glass-3d"
            style={{
              transform: `translateZ(-250px) rotateY(-${index * 72}deg)`,
            }}
          >
            {slideshowImages.map((img, i) => (
              <div
                key={i}
                className="glass-slide"
                style={{
                  backgroundImage: `url(${encodeURI(img)})`,
                  transform: `rotateY(${i * 72}deg) translateZ(250px)`,
                }}
              />
            ))}
          </div>
        </div>

        <button className="glass-nav prev" onClick={prevSlide}>
          ❮
        </button>
        <button className="glass-nav next" onClick={nextSlide}>
          ❯
        </button>
      </section>

    </section>

    
  );
}
export default Projects;
