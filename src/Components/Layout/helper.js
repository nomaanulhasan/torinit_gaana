import Cookies from 'js-cookie';

export const getCurrentTheme = () => {
    const pageLayout = document.getElementById('page-layout')
    const currentTheme = Cookies.get("currentTheme") ? Cookies.get("currentTheme") : (pageLayout?.classList?.toString() || 'theme-light');
    return currentTheme;
}