export const GetRequ = (url) => {
    let theRequest = {};
    if(url.indexOf('?') !== -1) {
        let str = url.substr(1);
        let strs = str.split('&');
        for(let i=0; i<strs.length; i++) {
            theRequest[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1]);
        }
    }
    return theRequest;        
}