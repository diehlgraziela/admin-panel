import Input from '../form/Input';

import SearchIcon from '@mui/icons-material/Search';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LanguageIcon from '@mui/icons-material/Language';

import './navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            <form action="" className="search-bar">
                <Input placeholder="Procurar..." />
                <button className="search-button"><SearchIcon /></button>
            </form>

            <div className="options">
                <LanguageIcon className="icon" />
                <DarkModeOutlinedIcon className="icon" />
                <FullscreenIcon className="icon" />
                <MessageOutlinedIcon className="icon" />
                <NotificationsNoneOutlinedIcon className="icon" />
                <img src="https://via.placeholder.com/40x40" alt="" />
                <SettingsOutlinedIcon className="icon" />
            </div>
        </div>
    );
}

export default Navbar;