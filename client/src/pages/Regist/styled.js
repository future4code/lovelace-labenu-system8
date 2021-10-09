import styled from "styled-components"


export const Container = styled.div`

    header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
    }
`
export const Subjects = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
`
export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70vw;
    margin: auto;
`
export const Day = styled.div`
    border-right: 1px solid;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 50vw;
`
export const Night = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 60vw;
    margin-left: 30px;

`
