const api="https://rawcdn.githack.com/kmitprojectschool/sem12022/788c820e40a750fecb30433c8d346457b7859abc/employee.json"
function generateTableHead(table,data){
    let thead=table.createTHead()
    let row=thead.insertRow()
    for(let h of data){
        let th=document.createElement('th')
        let text=document.createTextNode(h)
        th.appendChild(text)
        row.appendChild(th)
        document.querySelector('th').style.textAlign='center'
    }
}
function generateTable(table,data){
    let namesForSal=[]
    let namesForMon=[]
    for(let element of data){
        let row=table.insertRow()
        for(key in element){
            let cell=row.insertCell()
            let text=document.createTextNode(element[key])
            cell.appendChild(text)
        }
        if(element['Salary']>500000){
            namesForSal.push(element['Name'])
        }
        if(element['DateOfJoining'].search('-12-')!=-1){
            namesForMon.push(element['Name'])
        }
    }
    let h=document.getElementById('sal')
    h.innerHTML='Salary greater than 500000'
    let list=document.getElementById('list')
    for(let i=0;i<namesForSal.length;i++){
        let li=document.createElement('li')
        li.innerText=namesForSal[i]
        list.appendChild(li)
    }
    let h1=document.getElementById('j')
    j.innerHTML='Employees that joined in december'
    let list2=document.getElementById('list2')
    for(let i=0;i<namesForMon.length;i++){
        let li=document.createElement('li')
        li.innerText=namesForMon[i]
        list2.appendChild(li)
    }
}
async function f1(api){
    const response=await fetch(api)
    let data=await response.json()
    data=data['Employees']
    let table=document.querySelector('table')
    let heading=Object.keys(data[0])
    generateTableHead(table,heading)
    generateTable(table,data)
}
document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('btn').onclick=function(){
        document.getElementById('btn').innerHTML='Data Retrieved'
        document.getElementById('btn').disabled=true
        f1(api)
    }
})