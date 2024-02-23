const cookieName = '_sp_accepted_cookies';
const cookieValue = true;
const cookies = document.cookie.split(';');
const acceptedCookies = cookies.find(cookie => cookie.includes(`${cookieName}=${cookieValue}`));

function changeScriptTypes() {
  const scriptElements = document.querySelectorAll<HTMLScriptElement>('script[data-cookie-script]');

  Array.from(scriptElements).forEach(el => {
    const scriptElement = el;
    const scriptType = 'text/javascript';

    scriptElement.type = scriptType;

    if (scriptElement.src) {
      // eslint-disable-next-line no-self-assign
      scriptElement.src = scriptElement.src;
    } else if (scriptElement.textContent) {
      // eslint-disable-next-line no-new-func
      const fn = new Function(scriptElement.textContent);
      fn();
    }
  });
}

function acceptCookies(cookieBanner: HTMLElement | null) {
  if (!cookieBanner) {
    return;
  }
  cookieBanner.hidden = true;
  changeScriptTypes();
  const expires = new Date(Date.now() + 360 * 864e5).toUTCString();
  document.cookie = `${cookieName}=${cookieValue}; expires=${expires}; path=/`;
}

function testCookies() {
  const cookieBanner = document.getElementById('cookie-banner');
  if (acceptedCookies) {
    acceptCookies(cookieBanner);
  } else {
    if (!cookieBanner) {
      return;
    }
    cookieBanner.hidden = false;
    const cookieAction = document.getElementById('cookies-action');
    if (cookieAction) {
      cookieAction.addEventListener('click', event => {
        event.preventDefault();
        acceptCookies(cookieBanner);
      });
    }
  }
}

document.addEventListener('DOMContentLoaded', testCookies);
