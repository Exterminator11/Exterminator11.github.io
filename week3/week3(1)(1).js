const arr=['red','green','orange','magenta','yellow','brown','maroon']
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('button').onclick=function(){
        let co=Math.floor(Math.random()*arr.length);
        document.querySelector('body').style.backgroundColor=arr[co];
        document.querySelector('#color').innerHTML=arr[co];
    }
});