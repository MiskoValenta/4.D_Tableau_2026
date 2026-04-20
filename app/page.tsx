import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import StudentCard from '../components/StudentCard/StudentCard';
import studentsData from '@/data/students.json';
import styles from './Tableau.module.css';

export default function TableauPage() {
  return (
    <main className={styles.mainContainer}>
      <Sidebar />

      <div className={styles.contentWrapper}>
        <header className={styles.pageHeader}>
          <h1 className={styles.title}>System.<span className={styles.accent}>Maturanti</span></h1>
          <p className={styles.subtitle}>// Initialize class_of_2026</p>
        </header>

        <section className={styles.gridContainer}>
          {studentsData.map((student) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              nickname={student.nickname}
              imageUrl={student.imageUrl}
            />
          ))}
        </section>
      </div>
    </main>
  );
}