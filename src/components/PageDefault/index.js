import React from 'react';
import styled, { css } from "styled-components";
import Menu from "./../Menu";
import Footer from "./../Footer";
// import PropTypes from "prop-types";

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 50px;
    padding-right: 5%;
    ${({ paddingAll }) => css`
        padding: ${paddingAll};
    `}
`;

function PageDefault({ children, paddindAll }) {
    return (
        <>
            <Menu />
                <Main paddindAll={paddindAll}>
                    {children}
                </Main>
            <Footer />
        </>
    );
}

// PageDefault.defaultProps = {
//     paddindAll: 0,
// };

// PageDefault.propTypes = {
//     children: PropTypes.any.isRequired,
//     paddindAll: PropTypes.number,
// };

export default PageDefault;