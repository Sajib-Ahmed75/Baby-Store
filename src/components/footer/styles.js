import styled from "styled-components";
import { media } from "../../styles/responsive";

export const StyledFooter = styled.footer`

    padding: 75px 0 47px 0;
    .footer{
        display: grid;
        grid-template-columns: 1.3fr 1fr 1fr 1fr 1fr;
        ${media.down("sm")}{
            grid-template-columns: 1fr;
        }
    }
 

`