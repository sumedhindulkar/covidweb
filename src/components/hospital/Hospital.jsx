import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-grid';
import axios from "axios";
function Hospital() {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async (e) =>{
            const req = await axios.get("https://api.rootnet.in/covid19-in/hospitals/medical-colleges")
                .catch(e =>{
                    return <h1>OOPS, Error {e}</h1>
                })
            setData(req.data.data.medicalColleges)
        }
        fetchData();
    }, [])
    return (
        <div>
        <div style={{backgroundColor:"#af3c3c", padding:"220px 0"}}>
            <Container className="main-heading" style={{textAlign:"center"}}>
                <h1>Hospitals with bed Capacity</h1>
                <input type="text" placeholder="State..."/>
            </Container>
        </div>
            <Container style={{margin:"100px auto"}}>
                <Row>
            {data && data.map(item =>{
                return (
                    <Col style={{ backgroundColor:"#FF6276", padding:"25px", margin:"20px", borderRadius:"25px"}}>
                        <div style={{color:"#FFF", width:"450px", height:"250px", display:"flex", justifyContent:"space-evenly", alignItems:"center", flexDirection:"column"}}>
                            <h1 style={{color:"#313656"}}>{item.city}</h1>
                            <h3 style={{textAlign:"center"}}>{item.name}</h3>
                            <p >Owned by:<span style={{fontWeight:"1200", fontSize:"1.3em", color:"#313656"}}> {item.ownership == "Govt."?"Goverment":item.ownership}</span></p>
                            <p>Capacity: {item.admissionCapacity}</p>
                            <p>Total Hospital Beds: {item.hospitalBeds}</p>
                        </div>
                    </Col>
                )
            })}
            </Row>
            </Container>
        </div>
    )
}

export default Hospital;