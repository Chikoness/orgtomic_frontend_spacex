import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <PaginateContainer>
            <PaginateWrapper>
                <PageRow>
                    {pageNumbers.map(number => (
                        <PageItem key={number} onClick={() => paginate(number)} to={'#' + number}>
                            {number}
                        </PageItem>
                    ))}
                </PageRow>
            </PaginateWrapper>
        </PaginateContainer>
    )
}

export default Pagination

export const PaginateContainer = styled.nav`
    margin: 0 auto;
`

export const PaginateWrapper = styled.div`
    display: flex;
    justify-content: center;
    `

export const PageRow = styled.div`
    padding: 0 2rem;
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const PageItem = styled(Link)`
    text-align: center;
    vertical-align: middle;
    background: #fff;
    border-radius: 5px;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 2px;
    cursor: pointer;
    color: navy;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
    font-size: 12px;
    line-height: 1.5rem;
    opacity: 0.6;
    text-decoration: none;

    &:hover {
        background: navy;
        color: #fff;
        opacity: 1;
    }
`