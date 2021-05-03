import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Default_Ship from '../assets/default_ship.jpg'
import axios from 'axios'

const EachShipDetail = ({ match }) => {
    const [ship, setShip] = useState([]);

    useEffect(() => {
        const fetchOneShip = async () => {
            const res = await axios.get(`https://api.spacexdata.com/v4/ships/${match.params.id}`);
            setShip(res.data);
        }

        fetchOneShip();
    }, [match.params.id]) // To get rid of the "React Hooks useEffect has missing dependency" error

    return (
        <Container>
            <Wrapper>
                <Card>
                    <CardHeader><img src={ship.image ? ship.image : Default_Ship} alt="launch" /></CardHeader>
                    <CardCol>
                        <CardTitle>Ship name</CardTitle>
                        <CardInfo>{ship.name}</CardInfo>
                    </CardCol>
                    {(() => {
                        if (ship.year_built) {
                            return (
                                <CardCol>
                                    <CardTitle>Year built</CardTitle>
                                    <CardInfo>{ship.year_built}</CardInfo>
                                </CardCol>
                            )
                        }
                    })()}

                    {(() => {
                        if (ship.mass_kg && ship.mass_lbs) {
                            return (
                                <CardCol>
                                    <CardTitle>Mass</CardTitle>
                                    <CardInfo>{ship.mass_kg} kg / {ship.mass_lbs} lbs</CardInfo>
                                </CardCol>
                            )
                        } else if (ship.mass_kg) {
                            return (
                                <CardCol>
                                    <CardTitle>Mass</CardTitle>
                                    <CardInfo>{ship.mass_kg} kg</CardInfo>
                                </CardCol>
                            )
                        } else if (ship.mass_lbs) {
                            return (
                                <CardCol>
                                    <CardTitle>Mass</CardTitle>
                                    <CardInfo>{ship.mass_lbs} lbs</CardInfo>
                                </CardCol>
                            )
                        } else {
                            return (
                                <CardCol>
                                    <CardTitle>Mass</CardTitle>
                                    <CardInfo>No mass (kg, lbs) information available</CardInfo>
                                </CardCol>
                            )
                        }
                    })()}
                    <CardCol>
                        <LinkInfo>For more information, visit <a href={`${ship.link}`} target="_blank" rel="noreferrer">this link</a>.</LinkInfo>
                    </CardCol>
                </Card>
            </Wrapper>
        </Container>
    )
}

export default EachShipDetail

export const Container = styled.div`
    margin: auto;
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
    padding-bottom: 5rem;
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