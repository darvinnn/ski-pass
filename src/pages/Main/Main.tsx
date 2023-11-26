import MainInfo from '../../components/MainInfo/MainInfo';
import BasicBlock from '../../components/BasicBlock/BasicBlock';

const Main = () => {
  return (
    <MainInfo>
      <BasicBlock size="small" type="users" />
      <BasicBlock size="small" type="instructors" />
      <BasicBlock size="small" type="ski-passes" />
    </MainInfo>
  );
};

export default Main;
