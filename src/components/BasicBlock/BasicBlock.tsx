import AddButton from './UI/AddButton';
import ContentTitle from './UI/ContentTitle';
import getContentInfo from '../../utils/getTitle/getContentInfo';
import BigBlock from '../BigBlock/BigBlock';
import SmallBlock from '../SmallBlock/SmallBlock';
import style from './BasicBlock.module.scss';

interface Props {
  type: 'users' | 'instructors' | 'ski-passes';
  size: 'small' | 'big';
}

const BasicBlock = ({ type, size }: Props) => {
  const { title, buttonText } = getContentInfo(type);
  return (
    <section className={style.section}>
      <div className={style.topContent}>
        <ContentTitle>{title}</ContentTitle>
        <AddButton>{buttonText}</AddButton>
      </div>
      {size === 'small' && <SmallBlock type={type} />}
      {size === 'big' && <BigBlock type={type} />}
    </section>
  );
};

export default BasicBlock;
