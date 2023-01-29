import React from "react"
import SampleData from './sample.json'
function GetInfo(){
    return(
        <div>
            <h1>Hello</h1>
            <table className="table">
            <thed>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Latitude</th>
                    <th scope="col">Longitude</th>
                </tr>
            </thed>
            <tbody>
            {
                SampleData.map((data)=>{
                        let id=data.id
                        let name=data.name
                        let lat=data.lati
                        let long=data.lon
                        return (<tr><td>{id}</td><td>{name}</td><td>{lat}</td><td>{long}</td></tr>)
                    }
                )
            }
            </tbody>
            </table>
        </div>
    )
}
export default GetInfo;