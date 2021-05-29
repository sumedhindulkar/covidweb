import React, {useState, useEffect} from "react";
import labData from "./medical"
import {Container, Row, Col} from "react-grid"
function StateL() {
    const [query, setQuery] = useState("Delhi");
    const getQuery = (props) => {
        console.log(props.target.innerHTML)
        setQuery(props.target.innerHTML)
    }
    return (
        <div>
        <div style={{backgroundColor:"#af3c3c", padding:"220px 0"}}>
            <Container className="main-heading" style={{textAlign:"center"}}>
                <h1>Govt. Private Labs</h1>
                <input type="text" placeholder="State..."/>
            </Container>
        </div>
            <Container style={{margin:"100px auto"}}>
                <Row>
                {
                        labData.map(item =>{
                            return( 
                                <Col style={{backgroundColor:"#FF6276", padding:"15px 25px", margin:"5px", borderRadius:"10px", color:"white"}} onClick={getQuery} value={item.state_or_UT}>
                                    <h4 style={{width:"150px"}}>{item.state_or_UT}</h4>
                                </Col>
                            );
                        })
                    }
                </Row>
        </Container>
        <Container>
            <Col style={{textAlign:"center", margin:"30px auto"}}>
                <h1>{query}</h1>
            </Col>
        </Container>
        <Container>
            {query && labData.map(item => {
                  return (
                    <Row>
                        {item.state_or_UT == query &&
                            <>
                                <Row style={{width:"100%", margin:"30px -15px"}}>
                                    <Col><h2>Goverment labs</h2></Col>
                                    <Col><h2>Private labs</h2></Col>
                                </Row>
                            </>
                        }
                        <Row>
                            <Col>
                                <Row>
                                    {item.state_or_UT == query && item.government_labs.map((lab, i) =>{
                                        return (
                                            <Col style={i % 2==0 ?{backgroundColor:"#A9A9A9"}: {backgroundColor:"#C8C8C8"}}>
                                                <div style={{height:"120px",width:"400px", margin:"25px 0"}}>
                                                    <h3>{lab.name}</h3>
                                                    <p style={{opacity:"0.6"}}>{lab.address}</p>
                                                </div>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Col>
                            <Col>
                                <Row>
                                    {item.state_or_UT == query && item.private_labs.map((lab, i) =>{
                                        return (
                                            <Col style={i % 2==0 ?{backgroundColor:"#C8C8C8"}: {backgroundColor:"#A9A9A9"}}>
                                                <div style={{height:"120px",width:"400px", margin:"25px 0"}}>
                                                    <h3>{lab.name}</h3>
                                                    <p style={{opacity:"0.6"}}>{lab.address}</p>
                                                </div>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                );
              })
            }
            </Container>
            
        </div>
    )
}

export default StateL;
