import Cookies from 'js-cookie';
import history from '../../../history';

export const toggleTheme = () => {
    const pageLayout = document.getElementById('page-layout');
    const currentTheme = Cookies.get("currentTheme") ? Cookies.get("currentTheme") : pageLayout?.classList?.toString();
    let newTheme = currentTheme.split('-')[1] === 'light' ? 'theme-dark' : 'theme-light';

    pageLayout?.classList?.remove(currentTheme);
    pageLayout?.classList.add(newTheme);
    Cookies.set("currentTheme", newTheme);
}

export const handleSession = () => {
    Cookies.remove("isLoggedIn");
    history.push('/');
}