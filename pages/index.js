import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Exercise from '../lib/Exercise';
import OneRM from '../lib/Exercise';

export default function Home() {
  return (
    <div>
      <Head title="5-3-1" />
      <h1>5-3-1</h1>

      <Exercise name="pushups" />
    </div>
  );
}
