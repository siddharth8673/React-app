import React,{ useState,useEffect} from "react";
import styled from "styled-components";
import { Button } from "../styles/Button";
import axios from "axios";
import Header from "../componets/Header";

const API =
  "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=48ab2a1e7981442d8a63293e1c4ed780";
const Services = () => {
  const [services, setservices] = useState([]);
 
  useEffect(() => {
    try {
      async function getdata(){
      const res = await axios.get(API);
      setservices(res.data.articles);
       console.log(res.data.articles)
      }
       getdata();
    } catch (error) {
      console.log(error);
    }
    
  }, []);
 
  return (
    <>
    <Header/>
    <Wrapper className="section">
      <h2 className="common-heading"> News</h2>
      <div className="container grid grid-three-column">
       
        {services.map((curElem,i) => {
          const { title, urlToImage, description, url, id } = curElem;
          return (
            <a href={url} target="_blank" key={i}>
            <div className="card" >
              <a href={url} target="_blank">
                <figure>
                  <img src={urlToImage} alt="error" />
                </figure>
              </a>

              <div className="card-data">
                <h3>{title}</h3>
                <p>{description}</p>

                <a href={url} target="_blank">
                  <Button>Read More</Button>
                </a>
              </div>
            </div>
            </a>
          );
        })}
      </div>
    </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 180rem;
  }
  .grid {
    display: grid;
    gap: 4rem;
  }
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      max-width: 500px;
    }
    p {
      color: #18181d;
      opacity: 0.7;
      font-size: 1.65rem;
      line-height: 1.5;
      margin-top: 1rem;
      font-weight: 400;
      min-height: 160px;
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
      font-size: 1.4rem;
      &:hover {
        background-color: rgb(98 84 243);
        color: #fff;
        margin: 3rem 0;
      }
    }
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.4s linear;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-two-column,
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;
export default Services;
