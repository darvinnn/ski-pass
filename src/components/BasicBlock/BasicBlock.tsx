import AddButton from '../../UI/Buttons/AddButton';
import ContentTitle from '../../UI/Texts/ContentTitle';
import getContentInfo from '../../utils/getTitle/getContentInfo';
import style from './BasicBlock.module.scss';

interface Props {
  type: 'users' | 'instructors' | 'ski-passes';
  size: 'small' | 'big';
  //TODO Типизировать согласно апи
  data?: any;
}

const BasicBlock = ({ type, size, data }: Props) => {
  const { title, buttonText } = getContentInfo(type);
  return (
    <section className={style.section}>
      <div className={style.topContent}>
        <ContentTitle>{title}</ContentTitle>
        <AddButton>{buttonText}</AddButton>
      </div>
    </section>
  );
};

export default BasicBlock;
