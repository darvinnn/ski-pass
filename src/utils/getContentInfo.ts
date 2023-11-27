import { ContentType } from '../types/BasicBlockTypes';

const getContentInfo = (
  type: ContentType,
): { title: string; buttonText: string } => {
  if (type === 'users')
    return { title: 'Посетители', buttonText: 'Добавить нового' };
  if (type === 'instructors')
    return { title: 'Инструкторы', buttonText: 'Добавить нового' };
  if (type === 'ski-passes')
    return { title: 'Ски-пассы', buttonText: 'Добавить новый' };
  return { title: '', buttonText: '' };
};

export default getContentInfo;
