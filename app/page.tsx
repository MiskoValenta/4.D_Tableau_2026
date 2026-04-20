import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import StudentCard from '../components/StudentCard/StudentCard';
import styles from './Tableau.module.css';

const MOCK_STUDENTS = [
  { id: '1', name: 'Tobiáš Barteska', nickname: 'binary_boy', imageUrl: "/StudentPoltraits/1.pgn" },
  { id: '2', name: 'Jakub Bittner', nickname: 'syntax_error', imageUrl: "/StudentPoltraits/3.pgn" },
  { id: '3', name: 'Matěj Bortlík', nickname: 'null_ptr', imageUrl: "/StudentPoltraits/2.pgn" },
  { id: '4', name: 'Marián Demel', nickname: 'css_wizard', imageUrl: "/StudentPoltraits/6.pgn" },
  { id: '5', name: 'Alexander Dimitriu', nickname: 'kernel_panic', imageUrl: '/StudentPoltraits/4.pgn' },
  { id: '6', name: 'Lukáš Dzida', nickname: 'sudo_su', imageUrl: "/StudentPoltraits/5.pgn" },
  { id: '7', name: 'Daniel Hladík', nickname: 'binary_boy', imageUrl: "/StudentPoltraits/1.pgn" },
  { id: '8', name: 'Lukáš Chalupa', nickname: 'syntax_error', imageUrl: "/StudentPoltraits/3.pgn" },
  { id: '9', name: 'Matěj Janeček', nickname: 'null_ptr', imageUrl: "/StudentPoltraits/2.pgn" },
  { id: '10', name: 'Štěpán Kiedroň', nickname: 'css_wizard', imageUrl: "/StudentPoltraits/6.pgn" },
  { id: '11', name: 'Artem Kozynets', nickname: 'kernel_panic', imageUrl: '/StudentPoltraits/4.pgn' },
  { id: '12', name: 'Lukáš Krajíček', nickname: 'sudo_su', imageUrl: "/StudentPoltraits/5.pgn" },
  { id: '13', name: 'Lukáš Král', nickname: 'binary_boy', imageUrl: "/StudentPoltraits/1.pgn" },
  { id: '14', name: 'Matěj Kupka', nickname: 'syntax_error', imageUrl: "/StudentPoltraits/3.pgn" },
  { id: '15', name: 'Adam Macháč', nickname: 'null_ptr', imageUrl: "/StudentPoltraits/2.pgn" },
  { id: '16', name: 'Danilo Mattei', nickname: 'css_wizard', imageUrl: "/StudentPoltraits/6.pgn" },
  { id: '17', name: 'Jakub Moravec', nickname: 'kernel_panic', imageUrl: '/StudentPoltraits/4.pgn' },
  { id: '18', name: 'Adam Moša', nickname: 'sudo_su', imageUrl: "/StudentPoltraits/5.pgn" },
  { id: '19', name: 'Lukáš Plepla', nickname: 'binary_boy', imageUrl: "/StudentPoltraits/1.pgn" },
  { id: '20', name: 'Vojtěch Rašťák', nickname: 'syntax_error', imageUrl: "/StudentPoltraits/3.pgn" },
  { id: '21', name: 'Alex', nickname: 'null_ptr', imageUrl: "/StudentPoltraits/2.pgn" },
  { id: '22', name: 'Vojtěch Šilhánek', nickname: 'css_wizard', imageUrl: "/StudentPoltraits/6.pgn" },
  { id: '23', name: 'Adam Šrek', nickname: 'kernel_panic', imageUrl: '/StudentPoltraits/4.pgn' },
  { id: '24', name: 'Michael Valenta', nickname: 'sudo_su', imageUrl: "/StudentPoltraits/5.pgn" },
  { id: '25', name: 'Jakub Večerka', nickname: 'binary_boy', imageUrl: "/StudentPoltraits/1.pgn" },
  { id: '26', name: 'Adam Vehovský', nickname: 'syntax_error', imageUrl: "/StudentPoltraits/3.pgn" },
  { id: '27', name: 'Michal Vystrk', nickname: 'null_ptr', imageUrl: "/StudentPoltraits/2.pgn" },
  { id: '28', name: 'Oskar Wollný', nickname: 'css_wizard', imageUrl: "/StudentPoltraits/6.pgn" },
  { id: '29', name: 'Tereza Žáčková', nickname: 'kernel_panic', imageUrl: '/StudentPoltraits/4.pgn' },
];

export default function TableauPage() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.contentWrapper}>
        <header className={styles.pageHeader}>
          <h1 className={styles.title}>System.<span className={styles.accent}>Maturanti</span></h1>
          <p className={styles.subtitle}>// Initialize class_of_2026</p>
        </header>

        <section className={styles.gridContainer}>
          {MOCK_STUDENTS.map((student, index) => (
            <StudentCard
              key={student.id}
              id={student.id}
              name={student.name}
              nickname={student.nickname}
              imageUrl={student.imageUrl}
              index={index}
            />
          ))}
        </section>
      </div>
    </main>
  );
}