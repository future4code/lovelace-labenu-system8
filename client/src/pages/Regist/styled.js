import styled from "styled-components"


export const Container = styled.div`
    margin: 15px;
    header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3vh;
      padding: 10px;
      .head-title{
        font-size: 1.5rem;
        margin-left: -15px;
      }
    }
    .section-title{
      font-size: 1.5rem;
      margin-bottom: 5vh;
    }
`
export const Inputs = styled.form`
    display: flex;
    flex-direction: column;
    width: 30vw;
    align-items: left;
    gap: 10px;
    margin-bottom: 5vh;
    input[type=date]{

    }
    input{
      height: 25px;
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
    font-size: 1.2rem;
`
export const Day = styled.div`
    border-right: 1px solid;
    width: 50vw;
    span{
      cursor: pointer;
    }
`
export const Night = styled.div`
    width: 60vw;
    margin-left: 30px;
    span{
      cursor: pointer;
    }
`
