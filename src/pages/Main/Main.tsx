import MainInfo from '../../components/MainInfo/MainInfo';
import BasicBlock from '../../components/BasicBlock/BasicBlock';

const Main = () => {
  return (
    <>
      <MainInfo>
        <BasicBlock size="small" type="users"></BasicBlock>
        <BasicBlock size="small" type="instructors"></BasicBlock>
        <BasicBlock size="small" type="ski-passes"></BasicBlock>
      </MainInfo>
    </>
  );
};

export default Main;
