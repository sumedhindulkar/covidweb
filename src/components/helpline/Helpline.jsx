import axios from 'axios';
import React, {useEffect, useState} from 'react'
import {Container, Row, Col} from "react-grid"
// import axios from "axios"

function Helpline() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchNumbers = async(e)=>{
                const res = await axios.get("https://api.rootnet.in/covid19-in/contacts")
                setData(res.data.data.contacts.regional)
            }
        fetchNumbers();
    }, [])
    return (
        <div>
        <div style={{backgroundColor:"#af3c3c", padding:"220px 0"}}>
            <Container className="main-heading" style={{textAlign:"center"}}>
                <h1>Helpline Number</h1>
                <input type="text" placeholder="State..."/>
            </Container>
        </div>
            <Container style={{margin:"80px auto"}}>
                <Row>
                    {data && data.map(item =>{
                        return (
                            <Col style={{padding:"22px",backgroundColor:"#FF6276", margin:"20px", borderRadius:"20px" }}>
                                <h2 style={{width:"250px", margin:"15px 0", color:"white"}}>{item.loc}</h2>
                                <h3 style={{margin:"15px 0"}}>Helpline {item.number}</h3>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
export default Helpline;