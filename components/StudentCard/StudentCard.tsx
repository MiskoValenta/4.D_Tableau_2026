"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './StudentCard.module.css';
import { StudentCardProps } from "@/types/student";

const StudentCard: React.FC<StudentCardProps> = ({ id, name, nickname, imageUrl }) => {
    const [randomTilt, setRandomTilt] = useState("");

    useEffect(() => {
        const tiltVariants = [
            styles.tilt1, styles.tilt2, styles.tilt3, styles.tilt4, styles.tilt5,
            styles.tilt6, styles.tilt7, styles.tilt8, styles.tilt9, styles.tilt10
        ];
        const selected = tiltVariants[Math.floor(Math.random() * tiltVariants.length)];
        setRandomTilt(selected);
    }, []);

    return (
        <Link href={`/student/${id}`} className={styles.cardLink}>
            <div className={`${styles.cardWrapper} ${randomTilt}`}>
                <div className={styles.card}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={imageUrl}
                            alt={name}
                            fill
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, 250px"
                            priority={id === "1"}
                        />
                    </div>
                    <div className={styles.infoContainer}>
                        <h2 className={styles.name}>{name}</h2>
                        <p className={styles.nickname}>// {nickname}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default StudentCard;