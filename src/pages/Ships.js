import React from 'react'
import styled from 'styled-components'
import Default_Ship from '../assets/default_ship.jpg'
import { Link } from 'react-router-dom'

const Ships = ({ ships, loading }) => {
    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <Container>
            <Wrapper>
                {ships.map(ship => (
                    <Card key={ship.id} to={`/ships/${ship.id}`}
                        style={{
                            backgroundImage: ship.image ? `url(${ship.image})` : `url(${Default_Ship})`,
                            backgroundSize: '100% 100%'
                        }}>
                        <CardTitle>
                            {ship.name}
                        </CardTitle>
                        <CardInfo>Ship detail: {(() => {
                            if (ship.active === true) {
                                return (
                                    <ActiveInfo>Active</ActiveInfo>
                                )
                            } else if (ship.active === false) {
                                return (
                                    <InactiveInfo>Inactive</InactiveInfo>
                                )
                            } else {
                                return (
                                    <span>Unknown</span>
                                )
                            }
                        })()}
                        </CardInfo>
                        <CardInfo>
                            {ship.roles.map((role, i) => (
                                <span key={i}>{(() => {
                                    if (ship.roles.length > 1) {
                                        if (ship.roles.length === i + 1) {
                                            return (
                                                <span>{role}</span>
                                            )
                                        } else if (i === 0) {
                                            return (
                                                <span>Roles: {role}, </span>
                                            )
                                        } else {
                                            return (
                                                <span>{role}, </span>
                                            )
                                        }
                                    }
                                })()}</span>
                            ))}
                        </CardInfo>
                        <CardInfo>Home port: {ship.home_port}</CardInfo>
                    </Card>
                ))}

            </Wrapper>
        </Container>
    )
}

export default Ships

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

export const Card = styled(Link)`
    text-decoration: none;
    opacity: 0.8;
    line-height: 2;
    height: 20rem;
    border-radius: 10px;
    transition: 0.2s ease;
    margin: 1rem 0;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
    padding-bottom: 20px;
    color: #000;

    &:hover {
        opacity: 1;
        background: #f3f3f3;
    }
`

export const CardTitle = styled.div`
    margin: 20px 0 0 0;
    height: auto;
    background: rgba(255, 255, 255, 0.7);
    font-size: 18px;
    font-weight: bold;
    text-align: center;
`

export const CardInfo = styled.div`
    margin: 5px 0 0 0;
    text-align: center;
    background: rgba(255, 255, 255, 0.7);;
    font-size: 12px;
    padding:0 2rem;
`

export const ActiveInfo = styled.span`
    color: green;
`

export const InactiveInfo = styled.span`
    color: red;
`