import styled from "styled-components";

export const Container = styled.div``
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`
export const Card = styled.div`
  width: 600px;
  border-radius: 10px;
  position: relative;
`
export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.5);
  justify-content: center;
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }
  table > thead > tr > th {
    text-align: start;
    border-bottom: 1px solid #ccc;
  }
  table > tbody > tr > td {
    text-align: start;
    border-bottom: 1px solid #ccc;
    padding: .5rem;
  }
  table > tbody > tr {
    :hover {
      background-color: #ccc;
    }
  }
`
export const CardTitle = styled.div`
  background: var(--primary);
  font-size: 1.5rem;
  flex: 1;
  text-align: center;
  color: var(--white);
  padding: .5rem;
  border-radius: 1rem 1rem 0 0;
  align-self: flex-start;
  margin-bottom: 1rem;
`

export const TeamName = styled.td`
  display: flex;
  align-items: center;
  gap: 1rem;
`