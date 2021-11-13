export const getCookie = (name) => {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }
  
  export const deleteCookie = (name) => {
    const cookie = getCookie(name);
    document.cookie = `${name}=${cookie}; max-age=-1`
  }