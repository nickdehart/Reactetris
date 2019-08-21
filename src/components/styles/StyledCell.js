import styled from 'styled-components';

export const StyledCell = styled.div`
   width: auto;
   background: rgb(${props => props.color}, 0.8);
   border: ${props => (props.type === 0 ? '0px' : '4px solid')};
   border-bottom-color: rgb(${props => props.color}, 0.1);
   border-right-color: rgb(${props => props.color}, 1);
   border-top-color: rgb(${props => props.color}, 1);
   border-left-color: rgb(${props => props.color}, 0.3);
`