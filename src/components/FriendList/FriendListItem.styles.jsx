import styled from "styled-components";

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  margin: 20px;
  width: 300px;
  border: 1px solid rgb(227, 227, 227);
  background-color: rgb(253, 253, 253);
  border-radius: 50px;
`
export const Name = styled.p`
 margin-right: 20px;
  font-size: 30px;
  font-weight: 700;
  `

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 20px;
`

export const Status = styled.span`
display: inline-block;
  margin-left: auto;
  margin-right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: green;
`