import React from 'react'
import styled from 'styled-components'
import Default_Crew from '../assets/default_crew.jpg'
import { Link } from 'react-router-dom'

const Crew = ({ crew, launches, loading }) => {
    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <Container>
            <Wrapper>
                {crew.map(crew => (
                    <Card key={crew.id}
                        style={{
                            backgroundImage: crew.image ? `url(${crew.image})` : `url(${Default_Crew})`,
                            backgroundSize: 'cover'
                        }}>
                        <CardTitle>
                            <LaunchInfo to={`/crew/${crew.id}`}>{crew.name}</LaunchInfo>
                        </CardTitle>
                        <CardInfo>Agency: {crew.agency}</CardInfo>
                        {crew.launches.map((launch, i) => (
                            launches.map(crewLaunch => (
                                <CardInfo key={crewLaunch.id}>{(() => {
                                    if (launch === crewLaunch.id) {
                                        if (i === 0) {
                                            return (
                                                <>
                                                    <span>Launch: </span> <LaunchInfo to={`/launch/${crewLaunch.id}`}>{crewLaunch.name}</LaunchInfo>
                                                </>
                                            )
                                        }

                                    }
                                })()}
                                </CardInfo>
                            ))
                        ))}
                    </Card>
                ))}

            </Wrapper>
        </Container>
    )
}

export default Crew

export const Container = styled.div`
    margin: 0 auto;
    padding: 5rem 3rem;
    color: #000;
`

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;

    // Tablets
    @media screen and (max-width: 961px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
    }

    // Mobile devices
    @media screen and (max-width: 481px) {
        grid-template-columns: 1fr;
        grid-gap: 5px;
    }
`

export const Card = styled.div`
    color: #000;
    opacity: 0.8;
    line-height: 2;
    height: 20rem;
    border-radius: 10px;
    transition: 0.2s ease;
    margin: 1rem 0;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
    padding-bottom: 20px;
    text-decoration: none;

    &:hover {
        opacity: 1;
        background: #f3f3f3;
    }
`

export const CardTitle = styled.div`
    margin: 20px 0 0 0;
    height: auto;
    background: rgba(255, 255, 255, 0.7);
    text-align: center;
    font-size: 24px;
`

export const CardInfo = styled.div`
    margin: 5px 0 0 0;
    text-align: center;
    background: rgba(255, 255, 255, 0.7);
    font-size: 12px;
    padding: 0 2rem;
`

export const CardSpan = styled.span`
    font-size: 12px;
`

export const LaunchInfo = styled(Link)`
    text-align: center;
    font-size: 12px;
    text-decoration: none;
    color: #000;

    &:hover {
        font-weight: bold;
    }
`

export const LinkInfo = styled(Link)`
    text-decoration: none;

    &:hover {
        font-weight: bold;
    }
`