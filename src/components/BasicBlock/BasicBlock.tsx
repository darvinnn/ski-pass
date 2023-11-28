import AddButton from './UI/AddButton';
import ContentTitle from './UI/ContentTitle';
import getContentInfo from '../../utils/getContentInfo';
import BigBlock from '../BigBlock/BigBlock';
import SmallBlock from '../SmallBlock/SmallBlock';
import style from './BasicBlock.module.scss';
import { ContentSize, ContentType } from '../../types/BasicBlockTypes';

interface Props {
  type: ContentType;
  size: ContentSize;
  // TODO: нормально типизировать
  data?: any;
}

const BasicBlock = ({ type, size, data }: Props) => {
  const showedGuests = data.slice(0, 10);
  const { title, buttonText } = getContentInfo(type);
  return (
    <section className={style.section}>
      <div className={style.topContent}>
        <ContentTitle>{title}</ContentTitle>
        <AddButton>{buttonText}</AddButton>
      </div>
      {size === 'small' && <SmallBlock data={showedGuests} type={type} />}
      {size === 'big' && <BigBlock data={data} type={type} />}
    </section>
  );
};

export default BasicBlock;
