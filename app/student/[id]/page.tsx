import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Sidebar from '@/components/Sidebar/Sidebar';
import studentsData from '@/data/students.json';
import styles from './StudentProfile.module.css';
import { IoArrowBackOutline, IoFlashOutline, IoTerminalOutline, IoLayersOutline, IoChatbubblesOutline } from 'react-icons/io5';

export default async function StudentProfile({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const student = studentsData.find(s => s.id === id);

    if (!student) {
        notFound();
    }

    return (
        <main className={styles.container}>
            <div className={styles.content}>
                <Link href="/" className={styles.backButton}>
                    <IoArrowBackOutline /> BACK_TO_DATABASE
                </Link>

                <div className={styles.profileGrid}>
                    <aside className={`${styles.glassCard} ${styles.identitySection}`}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={student.imageUrl}
                                alt={student.name}
                                fill
                                className={styles.mainImage}
                                sizes="350px"
                                priority
                            />
                            <div className={styles.neonRing}></div>
                        </div>
                        <div className={styles.textDetails}>
                            <p className={styles.role}>{student.role}</p>
                            <h1 className={styles.name}>{student.name}</h1>
                            <p className={styles.nickname}>// {student.nickname}</p>
                            <blockquote className={styles.motto}>&quot;{student.quote}&quot;</blockquote>
                            <div className={styles.interests}>
                                {student.interests.map(i => <span key={i} className={styles.tag}>#{i}</span>)}
                            </div>
                        </div>
                    </aside>

                    <section className={styles.statsSection}>
                        <div className={styles.glassCard}>
                            <h3><IoTerminalOutline /> System_Metrics</h3>
                            <div className={styles.subjects}>
                                <p><span>FAVORITE_MODULE:</span> {student.subjects.best}</p>
                                <p><span>SYSTEM_ERROR_LOC:</span> {student.subjects.worst}</p>
                                <p><span>UNIQUE_VIBE:</span> {student.character}</p>
                            </div>

                            <div className={styles.skillGrid}>
                                {student.skills.map((skill) => (
                                    <div key={skill.name} className={styles.skillItem}>
                                        <div className={styles.skillLabel}>
                                            <span>{skill.name.toUpperCase()}</span>
                                            <span>{skill.level}%</span>
                                        </div>
                                        <div className={styles.progressBar}>
                                            <div
                                                className={styles.progressFill}
                                                style={{ '--width': `${skill.level}%` } as React.CSSProperties}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.glassCard}>
                            <h3><IoLayersOutline /> Internal_Data</h3>
                            <p className={styles.insideJoke}><span>INSIDE_JOKE:</span> {student.insideJoke}</p>
                            <div className={styles.randomFacts}>
                                {student.randomFacts.map((fact, i) => (
                                    <p key={i} className={styles.event}>• {fact}</p>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className={styles.logSection}>
                        <div className={styles.glassCard}>
                            <h3><IoFlashOutline /> Action_Logs</h3>
                            <div className={styles.timeline}>
                                {student.timeline.map((item, i) => (
                                    <div key={i} className={styles.timelineItem}>
                                        <span className={styles.year}>{item.year}</span>
                                        <span className={styles.event}>{item.event}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.glassCard}>
                            <h3><IoChatbubblesOutline /> Peer_Review</h3>
                            <div className={styles.quotes}>
                                {student.quotesFromOthers.map((q, i) => (
                                    <p key={i} className={styles.comment}>/* {q} */</p>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}