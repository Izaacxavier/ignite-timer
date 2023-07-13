import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.625rem;

    > nav{
        display: flex;
        gap: 1rem;
        > a{
            width: 3rem;
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: ${props => props.theme.white};
            border-top: solid 1px transparent;
            border-bottom: solid 1px transparent;
    
            &:hover{
                border-bottom: solid 1px ${props => props.theme['green-300']};
            }

            &.active{
                color: ${props => props.theme['green-300']};
            }
        }
    }
`