import Cookies from 'js-cookie';

export const handleAutoPlay = (e, setIsAutoplayOn) => {
    const isAutoplayOn = e.target.checked;
    Cookies.set('autoplayState', isAutoplayOn);
    setIsAutoplayOn(isAutoplayOn);
}
