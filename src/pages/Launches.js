import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'
import Pagination from '../components/Pagination'
import Default_Rocket from '../assets/default_rocket.jpg'
import { Link } from 'react-router-dom'

const Launches = ({ launches, lengthOfLaunches, ships, crew, loading, itemsPerPage, paginate }) => {
    if (loading) {
        return <h1>Loading...</h1>
    }

    const DisplayCards = (date) => {
        return (
            launches.map((launch) => (
                <CardBody key={launch.id}>
                    <CardHeader>
                        <img src={launch.links.flickr.original[0] ? launch.links.flickr.original[0] : Default_Rocket} alt="launch" />
                    </CardHeader>
                    <CardItem>
                        <CardTitle>{launch.name}</CardTitle>
                        <CardTime><Moment format="LLLL">{launch.date_local}</Moment></CardTime>
                        <CardInfo>Launch detail: {(() => {
                            if (launch.success === true) {
                                return (
                                    <SuccessInfo>Success</SuccessInfo>
                                )
                            } else if (launch.success === false) {
                                return (
                                    <FailInfo>Fail</FailInfo>
                                )
                            } else {
                                return (
                                    <span>Unknown / Yet to launch</span>
                                )
                            }
                        })()}
                        </CardInfo>
                        <CardInfo>{launch.details ? launch.details : "<No details available>"}</CardInfo>
                        <CardInfo>
                            {launch.ships.map((launchShip, i) => (
                                ships.map(innerShip => (
                                    <span key={innerShip.id}>{(() => {
                                        if (launchShip === innerShip.id) {
                                            if (i === 0) {
                                                return (
                                                    <>
                                                        <CardDetailTitle>Ships</CardDetailTitle>
                                                        <CardShipDetails to={`/ships/${innerShip.id}`}>{innerShip.name}</CardShipDetails>
                                                    </>
                                                )
                                            } else {
                                                return (
                                                    <>
                                                        <CardShipDetails to={`/ships/${innerShip.id}`}>{innerShip.name}</CardShipDetails>
                                                    </>
                                                )
                                            }

                                        }
                                    })()}
                                    </span>
                                ))
                            ))}
                        </CardInfo>

                        <CardInfo>
                            {launch.crew.map((shipCrew, i) => (
                                crew.map(innerCrew => (
                                    <span key={innerCrew.id}>{(() => {
                                        if (shipCrew === innerCrew.id) {
                                            if (i === 0) {
                                                return (
                                                    <>
                                                        <CardDetailTitle>Crew</CardDetailTitle>
                                                        <CardCrewDetails to={`/crew/${innerCrew.id}`}>{innerCrew.name}</CardCrewDetails>
                                                    </>
                                                )
                                            }
                                            return (
                                                <CardCrewDetails to={`/crew/${innerCrew.id}`}>{innerCrew.name}</CardCrewDetails>
                                            )
                                        }
                                    })()}
                                    </span>
                                ))
                            ))}
                        </CardInfo>
                    </CardItem>
                </CardBody>
            ))
        )
    }

    return (
        <>
            <Container>
                <Wrapper>
                    {DisplayCards()}
                </Wrapper>
                <Pagination itemsPerPage={itemsPerPage} totalItems={lengthOfLaunches} paginate={paginate} />
            </Container>
        </>
    )
}

export default Launches

export const Container = styled.div`
    margin: 0 auto;
    padding: 5rem 3rem;
    color: #000;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    padding: 0 2rem;
`

export const CardBody = styled.div`
    opacity: 0.8;
    line-height: 2;
    height: auto;
    border-radius: 10px;
    transition: 0.2s ease;
    margin: 1rem 0;
    text-align: justify;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
    background: #fff;
    padding-bottom: 20px;

    &:hover {
        opacity: 1;
        background: #f3f3f3;
    }
`

export const CardHeader = styled.div`
    height: 350px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50% 70%;
        border-radius: 10px 10px 0 0;
    }
`

export const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CardTitle = styled.h2`
    font-weight: bolder;
    font-size: 1.5rem;
`

export const CardTime = styled.div`
    align-items: center;
    text-align: justify;
    margin-top: -20px;
    font-size: 0.3rem;
`

export const CardInfo = styled.div`
    font-size: 12px;
    padding: 0.5rem 2rem;
`

export const SuccessInfo = styled.span`
    color: green;
`

export const FailInfo = styled.span`
    color: red;
`

export const CardDetailTitle = styled.div`
    font-size: 18px;
    font-weight: bolder;
    text-align: center;
`

export const CardShipDetails = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    color: navy;
    padding: 0 1rem;

    &:hover {
        border-bottom: 3px solid navy;
    }
`

export const CardCrewDetails = styled(Link)`
    text-decoration: none;
    font-size: 16px;
    color: dodgerblue;
    padding: 0.2rem 1rem;

    &:hover {
        border-bottom: 3px solid dodgerblue;
    }
`