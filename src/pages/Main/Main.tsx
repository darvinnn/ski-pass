import MainInfo from '../../components/MainInfo/MainInfo';
import BasicBlock from '../../components/BasicBlock/BasicBlock';
import { useEffect, useState } from 'react';
import { getGuests } from '../../API/guests';

const Main = ({ token }: { token: string }) => {
  // Тоже перепишу на RTK на этой неделе
  const [guests, setGuests] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // TODO: добавить во всех запросах catch()
    getGuests(token)
      .then((res) => setGuests(res.data))
      .then(() => setIsLoading(false));
  }, []);
  console.log('BAMBAM');
  if (isLoading) return <p>Loading</p>;
  return (
    <MainInfo>
      <BasicBlock size="small" type="users" data={guests} />
      <BasicBlock size="small" type="instructors" data={guests} />
      <BasicBlock size="small" type="ski-passes" data={guests} />
    </MainInfo>
  );
};

export default Main;
