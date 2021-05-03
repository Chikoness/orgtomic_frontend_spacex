import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Moment from 'react-moment'
import Default_Rocket from '../assets/default_rocket.jpg'

const EachLaunchDetail = ({ match }) => {
    const [launch, setLaunch] = useState([]);

    useEffect(() => {
        const fetchOneLaunch = async () => {
            const res = await axios.get(`https://api.spacexdata.com/v4/launches/${match.params.id}`);
            setLaunch(res.data);
        }

        fetchOneLaunch();
    }, [match.params.id]) // To get rid of the "React Hooks useEffect has missing dependency" error

    return (
        <Container>
            <Wrapper>
                <Card>
                    <CardHeader><img src={Default_Rocket} alt="launch" /></CardHeader>
                    <CardCol>
                        <CardTitle>Launch name</CardTitle>
                        <CardInfo>{launch.name}</CardInfo>
                    </CardCol>
                    <CardCol>
                        <CardTitle>Date</CardTitle>
                        <CardInfo><Moment format="LLLL">{launch.date_local}</Moment></CardInfo>
                    </CardCol>
                    <CardCol>
                        <CardTitle>Flight Number</CardTitle>
                        <CardInfo>{launch.flight_number}</CardInfo>
                    </CardCol>
                    <CardCol>
                        <CardTitle>Success/Fail</CardTitle>
                        <CardInfo>{launch.success ? "Success" : "Fail"}</CardInfo>
                    </CardCol>
                    <CardCol>
                        <CardTitle>Details</CardTitle>
                        <CardInfo>{launch.details}</CardInfo>
                    </CardCol>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default EachLaunchDetail

export const Container = styled.div`
    margin: 0 auto;
    padding: 5rem 2rem;
    width: 80vw;
    color: #000;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding: 0 2rem;
`

export const Card = styled.div`
    line-height: 2;
    height: auto;
    border-radius: 10px;
    transition: 0.2s ease;
    margin: 1rem 0;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
    background: #fff;
    padding-bottom: 2rem;
`

export const CardHeader = styled.div`
    height: 350px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 50%;
        border-radius: 10px 10px 0 0;
    }
`

export const CardCol = styled.div`
    padding: 0.5rem 1.5rem 0 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CardTitle = styled.div`
    font-size: 24px;
    font-weight: bolder;
`

export const CardInfo = styled.span`
    font-size: 18px;
    margin-top: -10px;
`

export const LinkInfo = styled.div`
    font-size: 20px;

    a {
        text-decoration: none;
        color: navy;
    }

    a:hover {
        color: dodgerblue;
    }
`