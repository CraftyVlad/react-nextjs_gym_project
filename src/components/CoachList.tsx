import { useState, useEffect } from 'react';
import CoachItem from './CoachItem';
import s from '@/styles/coachList.module.scss';
import { useSelector } from 'react-redux';

export default function CoachList() {
  const baseURL = 'http://localhost:3001/coaches';
  const [coaches, setCoaches] = useState([]);
  const update = useSelector((state) => state.favourite.update);

  const handleGetData = async () => {
    try {
      await fetch(`${baseURL}`)
        .then((res) => res.json())
        .then((res) => setCoaches(res));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    let subscribed = true;
    if (subscribed) {
      handleGetData();
    }
    return () => {
      subscribed = false;
    };
  }, [update]);

  return (
    <div className={s.coachContainer}>
      <div className={s.coach}>
        {coaches?.map((coach) => (
          <CoachItem key={coach.id} coach={coach} />
        ))}
      </div>
    </div>
  );
}
