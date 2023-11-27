import style from './AdminToolbar.module.scss';
import AdminSwitch from './UI/AdminSwitch';
import AdminSwitcherText from './UI/AdminSwitcherText';

const AdminToolbar = ({ position }: { position: string }) => {
  return (
    <label className={`${position} ${style.adminBox}`}>
      <AdminSwitch />
      <AdminSwitcherText className={style.adminText}>
        Режим администратора
      </AdminSwitcherText>
    </label>
  );
};

export default AdminToolbar;
