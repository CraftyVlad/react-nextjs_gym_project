import CoachList from '@/components/CoachList';
import s from '@/styles/coaches.module.scss';

export default function coaches() {
  return (
    <div className={s.body}>
      <div className={s.hero}>
        <img src='hero2.jpg' width='100%' />
        <h1>OUR COACHES</h1>
        <h2>PAGES - COACHES</h2>
      </div>
      <div></div>
      <CoachList />
    </div>
  );
}
