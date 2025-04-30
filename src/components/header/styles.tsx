import styled from 'styled-components';
import { List, ListItem, Submenu } from '../navigation/styles';

export const Container = styled.header`
    transition: background-color 0.5s ease;

    ${List} {
        > ${ListItem} {
            color: white;
            &.current,
            &.expanded,
            &:hover {
                > a {
                    &:not(.button) {
                        color: ${props => props.theme._colors.primary.bdm1};
                    }
                }
            }
        }
        ${Submenu} {
            ${ListItem} {
                &:hover {
                    > a {
                        &:not(.button) {
                            color: black;
                        }
                    }
                }
            }
        }
    }

    .logo {
        position: relative;
        z-index: 1001;
    }

    .hamburger {
        &-wrapper {
            z-index: 1001;
            position: relative;
        }
        &-inner, &-inner::before, &-inner::after {
            border-radius: 0;
            height: 2px;
        }
        &-inner, &-inner::before, 
        &-inner::after,
        &.is-active .hamburger-inner, 
        &.is-active .hamburger-inner::before, 
        &.is-active .hamburger-inner::after {
            background-color: ${props => props.theme._colors.primary.bdm1};
        } 
    }

    .container {
        transition: all 0.5s ease;
        z-index: initial;
    }

    &.scrolled {
        background-color: rgba(0,0,0,0.8);
    }
`;