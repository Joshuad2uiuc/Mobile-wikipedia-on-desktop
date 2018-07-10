url = window.location.href 
if(url.includes(".wikipedia") && !url.includes(".m.wikipedia")){
    var position = url.indexOf("wikipedia");
    mobile_url = [url.slice(0, position), "m.", url.slice(position)].join('');
    window.open(mobile_url,"_self")
}
