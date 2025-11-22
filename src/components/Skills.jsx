import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faNode,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUtensils,
  faClipboardList,
  faMoneyBillWave,
  faBoxes,
  faShieldAlt,
  faLightbulb,
  faUsers,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import CustomHook from "./CustomHook";

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  const [listSkills] = useState([
    {
      name: "PLATING DESIGN",
      des: "Skilled in creative and visually appealing food presentation that enhances the dining experience. Proficient in balancing colors, textures, and portions to create elegant and appetizing plates. Focused on delivering dishes that not only taste exceptional but also reflect artistic precision and modern culinary trends.",
      icon: faUtensils,
    },
    {
      name: "MENU PLANNING & COSTING",
      des: " Experienced in developing seasonal and balanced menus that align with customer preferences and restaurant concepts. Skilled in ingredient selection, portion control, and cost management to maximize profitability without compromising quality. Adept at analyzing food trends and maintaining consistency across all dishes.",
      icon: faClipboardList,
    },
    {
      name: "KITCHEN BUDGET MANAGMENT",
      des: "Proficient in managing kitchen budgets through effective cost control, inventory management, and supplier negotiation. Skilled in optimizing resources, minimizing waste, and maintaining high-quality standards while ensuring profitability and operational efficiency.",
      icon: faMoneyBillWave,
    },
    {
      name: "INVENTORY MANAGMENT",
      des: "Experienced in monitoring and maintaining optimal stock levels to ensure smooth kitchen operations. Skilled in tracking supplies, reducing waste, and coordinating with vendors to maintain freshness, quality, and cost efficiency.",
      icon: faBoxes,
    },
    {
      name: "UPHOLDING FOOD SAFETY STANDARDS",
      des: "Committed to upholding the highest food safety and sanitation standards in all kitchen operations. Skilled in implementing HACCP guidelines, maintaining proper food storage, and ensuring compliance with health and hygiene regulations to deliver safe and high-quality dishes.",
      icon: faShieldAlt,
    },
    {
      name: "CULINARY CREATIVITY",
      des: "Highly skilled in developing innovative and visually appealing dishes that blend traditional continental techniques with modern trends. Passionate about experimenting with flavors, textures, and presentation to create memorable dining experiences that reflect originality and excellence.",
      icon: faLightbulb,
    },
    {
      name: "TEAM LEADERSHIP",
      des: "Experienced in leading and motivating kitchen staff to deliver high-quality dishes efficiently. Skilled in delegating tasks, maintaining clear communication, and fostering a positive, collaborative work environment that promotes teamwork, discipline, and consistent performance.",
      icon: faUsers,
    },
    {
      name: "CUSTOMER FOCUS",
      des: "Dedicated to understanding and exceeding guest expectations through exceptional food quality, presentation, and service. Skilled in tailoring dishes to customer preferences, ensuring a memorable dining experience that promotes satisfaction and loyalty.",
      icon: faHeart,
    },
  ]);
  return (
    <section className="skills" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Skills
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Highly skilled in preparing and presenting European cuisines, including French, Italian, Indian and Mediterranean dishes. Proficient in advanced cooking techniques such as grilling, roasting, sautéing, and baking. Strong expertise in flavor balancing, sauce preparation, and creative plating. Demonstrates excellent time management, menu planning, and kitchen organization, while maintaining strict hygiene and quality standards to ensure exceptional dining experiences.
      </div>
      <div className="list">
        {listSkills.map((value, key) => (
          <div
            className={"item "}
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <FontAwesomeIcon icon={value.icon} />
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
