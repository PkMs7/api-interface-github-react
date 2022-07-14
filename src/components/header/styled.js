import styled from "styled-components";

export const WrapperHeader = styled.header`

    display: flex;
    width: 100%;
    justify-content: space-between;

    input {
        border: 1px solid #ccc;
        border-radius: 8px;
        width: 100%;
        margin: 5px;
        padding: 5px;
    }

    button {
        background-color: #0F92FF;
        border-radius: 5px;
        padding: 8px;
        margin: 8px;

        &:hover {
            box-shadow: 3px 2px 10px rgba( 0, 0, 0, 0.2 );
        }
    }


`;