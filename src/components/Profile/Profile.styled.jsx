import styled from "styled-components";

export const ProfileUser = styled.div`
  margin: 50px;
  border: 1px solid rgb(227, 227, 227);
  border-radius: 10px;
`
export const Description = styled.div`
  text-align: center;
  width: 300px;
  padding: 30px;
`  
export const Avatar = styled.img`
  width: 250px;
  border-radius: 50%;
`
export const Name = styled.p`
 font-size: 24px;
  font-weight: 500;
  margin: 16px;
`
export const Tag = styled.p`
 color: rgb(141, 141, 141);
`
    
export const Location = styled.p`
 color: rgb(141, 141, 141);
`
export const Stats = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #f3f6f9;
  border-top: 1px solid rgb(227, 227, 227);
`

export const Item = styled.li`
 text-align: center;
  padding: 20px;
  border-right: 1px solid rgb(227, 227, 227);
  width: 100%;
`


export const Label = styled.span`
  display: block;
  color: rgb(123, 123, 123);
  font-weight: 500;
  margin-bottom: 5px;
`


export const Quantity = styled.span`
 font-size: 18px;
  font-weight: 700;
  display: block;
`