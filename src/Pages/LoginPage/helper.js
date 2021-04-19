import Cookies from 'js-cookie';
import history from '../../history';

export const handleFakeLogin = () => {
    Cookies.set('isLoggedIn', true);
    history.push('/home');
}