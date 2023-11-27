import MainInfo from '../../components/MainInfo/MainInfo';
import BasicBlock from '../../components/BasicBlock/BasicBlock';
import { useEffect, useState } from 'react';
import { getGuests } from '../../API/guests';

const Main = ({ token }: { token: string }) => {
  // Тоже перепишу на RTK на этой неделе
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    // TODO: добавить во всех запросах catch()
    getGuests(token).then((res) => setGuests(res.data));
  }, []);

  return (
    <MainInfo>
      <BasicBlock size="small" type="users" data={guests} />
      <BasicBlock size="small" type="instructors" />
      <BasicBlock size="small" type="ski-passes" />
    </MainInfo>
  );
};

export default Main;
