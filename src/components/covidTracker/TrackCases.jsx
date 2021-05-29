import React, {useState, useEffect} from "react";
import { Container, Row, Col } from 'react-grid';
function TrackCases() {
  const axios = require('axios')
    const [stData, setStData] = useState(null)
    const [query, setQuery] = useState(null);
    const [reqStates, setReqStates]= useState(null);
    useEffect(() => {
      axios.get("https://api.covid19india.org/state_district_wise.json")
        .then(res =>{
            setStData(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])
    const getStateName = (query) => {
                const arrS = Object.keys(stData);
                query = query.toLowerCase();
                var arr = [];
                for(let i = 0; i< 37; i++){
                    var value = arrS[i];
                    var valueL = value.toLowerCase();
                    valueL.includes(query) && arr.push(arrS[i])
                }
                setReqStates(arr);
                console.log(reqStates);
        }
        const alpha = async (event) => {
            setQuery(event.target.value)
            getStateName(event.target.value)
        }
        const beta = (event) =>{
            console.log(event.target.innerHTML)
            setQuery(event.target.innerHTML)
            getStateName(event.target.innerHTML)
        }
    return (
        <div className="main">
        <div style={{backgroundColor:"#af3c3c", padding:"220px 0"}}>
            <Container className="main-heading" style={{textAlign:"center"}}>
                <h1>Let's track covid-19 cases</h1>
                <input type="text" onChange={alpha} value={query} placeholder="State..."/>
            </Container>
        </div>
        <Container style={{padding:"60px 0"}}>
            <Row>
                <Col>
                    <h1 style={{textAlign:"center", margin:"0 0 40px 0"}}>Indian States</h1>
                <Row style={{maxHeight:"1250px", overflowY:"auto"}}>
                {stData && Object.keys(stData).map((keyName, i)=>{
                    return( 
                            <Col style={{backgroundColor:"#FF6276", borderRadius:"10px", margin:"5px", height:"auto", color:"#fff"}}>
                                <h3 onClick={beta} value={keyName} style={{width:"150px"}} >{keyName}</h3>
                            </Col>
                        )
                    })
                }
                </Row>
                </Col>
                <Col>
                    <h1 style={{textAlign:"center", margin:"0 0 40px 0"}}>Search Result</h1>
                    <div style={{maxHeight:"1057px", overflowY:"auto"}}>
                     {stData && Object.keys(stData).map((keyName, i)=>{
                    return( 
                            <Col key={i}>
                                <Row>
                                    { query &&  reqStates.includes(keyName) && Object.keys(stData[keyName].districtData).map(item =>{
                                        return (
                                            <Col  style={{backgroundColor:"pink", borderRadius:"10px", margin:"5px", height:"auto"}}>
                                                <h3  style={{width:"150px"}}>{item}</h3>
                                                <p style={{padding:"0 15px", margin:"0 0 10px 0" }}>Active cases: {stData[keyName].districtData[item].active}</p>
                                                <p style={{padding:"0 15px", margin:"0 0 10px 0" }}>Recovered cases: {stData[keyName].districtData[item].recovered}</p>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Col>
                        )
                    })
                }
                </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}
export default TrackCases;
