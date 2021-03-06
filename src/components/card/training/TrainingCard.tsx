import { ITraining } from "@/lib/training/Training";
import { motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";
import styles from "./TrainingCard.module.scss";

interface TrainingCardProps {
    menuIdx: number;
    training: ITraining;
    selected: boolean;
    handleSetMenu: (menuIdx: number) => void;
}

const TrainingCard: React.VFC<TrainingCardProps> = ({
    menuIdx,
    training,
    selected,
    handleSetMenu,
}) => (
    <motion.div
        className={`${styles.training} ${selected && `${styles.selected}`}`}
        exit={{
            opacity: 0,
            x: 60,
            transition: {
                duration: 0.2,
            },
        }}
        initial={{
            opacity: 0,
            x: 60,
        }}
        animate={{
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.2,
            },
        }}
        onClick={() => handleSetMenu(menuIdx)}
    >
        <div className={styles.title}>{training.name}</div>
        <Image
            src={training.src}
            width="150"
            height="150"
            className={styles.image}
            alt={training.name}
        />
    </motion.div>
);

export default TrainingCard;
