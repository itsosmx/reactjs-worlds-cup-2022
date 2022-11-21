import styled from "styled-components";
import Background from '../../assets/pattern.png'

export const Container = styled.div`
  background-image: url(${Background});
  background-repeat: repeat;
  background-position: center;
  background-color: var(--primary);
  position: relative;
  display: flex;
  flex-direction: column;
  svg {
    fill: var(--white);
    path {
      filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, .1));
    }
  }
`
export const Wrapper = styled.div`
  height: 20vh;
  width: 100%;
`

export const Title = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: var(--white);
    text-shadow: 3px 3px 5px rgba(0, 0, 0, .1);
  }
  img {
    width: 10%;
  }
`