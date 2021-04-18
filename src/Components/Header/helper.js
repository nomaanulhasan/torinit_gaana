import Cookies from 'js-cookie';
import history from '../../history';

export const handleLogoClick = () => {
    const gotoUrl = Cookies.get('isLoggedIn') ? '/home' : '/';
    history.push(gotoUrl);
}