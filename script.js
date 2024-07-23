const color=['red','blue','purple','pink','orange','yellow','brown','gray','green'];
let colorindex=0;
document.getElementById('btn').addEventListener('click',function(){
    colorindex++;
    if(colorindex==color.length)
        colorindex=0;
    document.body.style.backgroundColor=color[colorindex];
    document.getElementById('c').innerHTML=color[colorindex].charAt(0).toUpperCase() + color[colorindex].slice(1);
});