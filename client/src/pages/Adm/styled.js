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
      .logout{
        margin-left: 10px;
      }
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
    select{
      height: 30px;
    }
`
