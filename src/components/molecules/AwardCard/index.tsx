import React from "react";
import AwardButton from "@/components/atoms/AwardButton";
import styles from "./AwardCard.module.css";

interface AwardCardProps {
  title: string;
  subtitle: string;
  link: string;
  image?: string;
}

const AwardCard: React.FC<AwardCardProps> = ({ title, subtitle, link, image }) => (
  <div className={styles.card}>
    <div className={styles["award-image"]} style={{ backgroundImage: `url(${image || "/trophy.svg"})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">{title}</h3>
    <p className="text-slate-600 mb-4 text-center">{subtitle}</p>
    {/* <AwardButton href={link}>Ver mais</AwardButton> */}
  </div>
);

export default AwardCard;
