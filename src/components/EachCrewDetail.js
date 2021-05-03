import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const EachCrewDetail = ({match}) => {
    const [crew, setCrew] = useState([]);

    useEffect(() => {
        const fetchOneCrew = async () => {
            const res = await axios.get(`https://api.spacexdata.com/v4/crew/${match.params.id}`);
            setCrew(res.data);
        }

        fetchOneCrew();
    }, [match.params.id]) // To get rid of the "React Hooks useEffect has missing dependency" error

    return (
        <Container>
            <Wrapper>
                <Card>
                    <CardHeader style={{
                            backgroundImage: `url(${crew.image})`,
                            backgroundSize: 'cover'
                        }}></CardHeader>
                    <CardDetails>
                        <CardCol>
                            <CardTitle>Name</CardTitle>
                            <CardInfo>{crew.name}</CardInfo>
                        </CardCol>
                        <CardCol>
                            <CardTitle>Agency</CardTitle>
                            <CardInfo>{crew.agency}</CardInfo>
                        </CardCol>
                        <CardCol>
                            <CardTitle>Status</CardTitle>
                            <CardInfo>{crew.status === 'active' ? 'Active' : 'Inactive'}</CardInfo>
                        </CardCol>
                        <CardCol>
                            <LinkInfo>For more information, visit their <a href={`${crew.wikipedia}`} target="_blank" rel="noreferrer">Wikipedia</a>.</LinkInfo>
                        </CardCol>
                    </CardDetails>

                </Card>
            </Wrapper>
        </Container>
    )
}

export default EachCrewDetail

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
    padding: 3.8rem 2rem;
`

export const Card = styled.div`
    line-height: 2;
    height: auto;
    border-radius: 10px;
    transition: 0.2s ease;
    margin: 1rem 0;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
    background: #fff;
    display: flex;
    flex-direction: row;
`

export const CardHeader = styled.div`
    height: 500px;
    width: 30rem;
    overflow: hidden;
    border-radius: 10px 0 0 10px;
`

export const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
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