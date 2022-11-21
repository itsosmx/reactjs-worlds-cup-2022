import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div``
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`
export const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
  color: var(--primary);
`
export const Card = styled(motion.div)`
  width: 90vw;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardWrapper = styled.div`
  height: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  gap: .1rem;
`
export const Team = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  flex: 0 0 50%;
  background:linear-gradient(-121deg, #a30e36 0%, #1b0009 100%);
  border-radius: 2rem 0 0 2rem;
  :last-child {
    border-radius: 0 2rem 2rem 0;
    background:linear-gradient(121deg, #a30e36 0%, #1b0009 100%);
  }
  padding: 1rem;
`

export const Name = styled.div`
  font-size: 1.5rem;
  color: var(--white);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1rem;
  :first-child {
    flex: 1;
  }
`
export const Score = styled.div`
  font-size: 3rem;
  color: var(--white);
  display: flex;
  align-items: center;
  gap: 1rem;
  font-weight: 600;
  :first-child {
    flex: 1;
  }


`