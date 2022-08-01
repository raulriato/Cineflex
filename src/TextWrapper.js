import styled from "styled-components";

export default function TextWrapper({ children, height, color }){
    return (
        <Text height={height} color={color}>{children}</Text>
    )
}

const Text = styled.div`
    width: 100%;
    height: ${({ height }) => height ? height : '110px'};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: ${({ color }) => color ? color : 'inherit'};
    font-weight: ${({ color }) => color ? '700' : 'inherit'};
`;