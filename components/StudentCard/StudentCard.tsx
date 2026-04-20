import React from 'react';
import Image from 'next/image';
import styles from './StudentCard.module.css';
import { StudentCardProps } from "@/types/student";

const StudentCard: React.FC<StudentCardProps> = ({ id, name, nickname, imageUrl, index }) => {
    const rotationClasses = [
        styles.rotM5, styles.rotM3, styles.rotM1,
        styles.rot1, styles.rot3, styles.rot5
    ];
    const assignedRotation = rotationClasses[index % rotationClasses.length];

    return (
        <div className={`${styles.cardWrapper} ${assignedRotation}`}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <Image
                        src={imageUrl}
                        alt={`Portrait of ${name}`}
                        fill
                        className={styles.image}
                        sizes="(max-width: 768px) 100vw, 250px"
                    />
                </div>
                <div className={styles.infoContainer}>
                    <h2 className={styles.name}>{name}</h2>
                    <p className={styles.nickname}>// {nickname}</p>
                </div>
            </div>
        </div>
    );
};

export default StudentCard;