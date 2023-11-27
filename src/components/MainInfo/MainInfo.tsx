import { Avatar, Badge } from '@mui/material';
import style from './MainInfo.module.scss';
import avatar from '../../assets/images/smallAvatar.png';
import {
  ChromeReaderMode,
  Edit,
  People,
  RecordVoiceOver,
  SettingsOutlined,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import NavLinkText from './UI/NavLinkText';
import UserName from './UI/UserName';
import CaptionText from './UI/CaptionText';
import UserProfession from './UI/UserProfession';
import { PropsWithChildren, memo, useEffect } from 'react';
import {
  INSTRUCTORS,
  SKI_PASSES,
  USERS,
} from '../../constants/navigationConstants';
import AdminToolbar from '../AdminToolbar/AdminToolbar';
import axios from 'axios';

const MainInfo = memo(({ children }: PropsWithChildren) => {
  useEffect(() => {
    axios.get(
      'http://192.168.236.16:8484/auth/realms/Spring_boot_realm/protocol/openid-connect/token',
    );
  }, []);

  return (
    <main className={style.main}>
      <div className={style.blueBg}>
        <div className={style.cover}>
          <div className={style.userInfo}>
            <Badge
              className={style.badge}
              overlap="circular"
              badgeContent={<Edit className={style.icon} />}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            >
              <Avatar src={avatar} className={style.avatar} />
            </Badge>
            <UserName>Ольга Терентьева</UserName>
            <UserProfession>Администратор</UserProfession>
          </div>
        </div>
      </div>
      <div className={style.greyBg}>
        <div className={style.contentBox}>
          <div className={style.sideBar}>
            <nav>
              <NavLink
                to={USERS}
                className={({ isActive }) =>
                  isActive
                    ? `${style.navBox} ${style.navBox_active}`
                    : style.navBox
                }
              >
                <People className={style.navIcon} />
                <NavLinkText className={style.navText}>Посетители</NavLinkText>
              </NavLink>
              <NavLink
                to={INSTRUCTORS}
                className={({ isActive }) =>
                  isActive
                    ? `${style.navBox} ${style.navBox_active}`
                    : style.navBox
                }
              >
                <RecordVoiceOver className={style.navIcon} />
                <NavLinkText className={style.navText}>Инструкторы</NavLinkText>
              </NavLink>
              <NavLink
                to={SKI_PASSES}
                className={({ isActive }) =>
                  isActive
                    ? `${style.navBox} ${style.navBox_active}`
                    : style.navBox
                }
              >
                <ChromeReaderMode className={style.navIcon} />
                <NavLinkText className={style.navText}>Ски-пассы</NavLinkText>
              </NavLink>
            </nav>
            <AdminToolbar position={style.navBox} />
            <NavLink to="/" className={style.navBox}>
              <SettingsOutlined className={style.navIcon} />
              <NavLinkText className={style.navText}>Настройки</NavLinkText>
            </NavLink>
            <CaptionText className={style.caption}>
              Все права защищены
            </CaptionText>
          </div>
          <div className={style.mainContent}>{children}</div>
        </div>
      </div>
    </main>
  );
});

export default MainInfo;
