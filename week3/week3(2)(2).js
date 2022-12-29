const names=[
    {Sno:1,Name:"Anakin Skywalker"},{Sno:2,name:"Obiwan-Kenobi"},{Sno:3,name:"Leia"},{Sno:4,name:"Chewbacca"}
    ,{Sno:5,name:"Andor"}
];
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('button').onclick=function(){
        document.querySelector('body').style.backgroundImage="url('war2.png')";
        document.querySelector('button').innerHTML='This is star wars';
        function generateTableHead(table,data){
            let thead=table.createTHead();
            let row=thead.insertRow();
            for(let key of data){
                let th=document.createElement('th');
                let text=document.createTextNode(key);
                th.appendChild(text);
                row.appendChild(th);
                document.querySelector('th').style.textAlign="center";
            }
        }
        function generateTable(table,data){
            for(let element of data){
                let row=table.insertRow();
                for(let key in element){
                    let cell=row.insertCell();
                    let text=document.createTextNode(element[key]);
                    cell.appendChild(text)
                }
            }
        }
        let table=document.querySelector("table");
        let data=Object.keys(names[0]);
        generateTableHead(table,data);
        generateTable(table,names)
        document.querySelector('button').disabled=true;
    }
});