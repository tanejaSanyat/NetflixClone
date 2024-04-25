import React, { useEffect, useState } from 'react'
import Header from "./Header"
import "./Home.scss"
import axios from "axios"
const Row = ({Title,arr = []}) => {
    const url = "https://image.tmdb.org/t/p/original/" ;
  return (
    <div className = "row">
    <h2>{Title}</h2>
    <div>
    {
        arr.map((ele,index)=>{
            let final ;
            if(ele.hasOwnProperty('poster_path')) final  = ele.poster_path ;
            else final = ele.profile_path ;
            return <Card img = {`${url}${final}`}></Card>
        }
            
        )
    }
    </div>
    </div>
  )
}

const Card = ({img}) => {
  return (
    <div>
      <img className='card' src={img} alt="" />
    </div>
  )
}


const Home = () => {
    let [upcoming,setUpcomping] = useState([]) ; 
    let [latest,setLatest] = useState([]) ; 
    let [topRated,setTopRated] = useState([]) ; 
    const url = "https://api.themoviedb.org/3/movie/popular?api_key="
    const apiKey = "c2b57eb87200a53347f25f1237cbf9d3"
    useEffect(()=>{
        const fetchData = async()=>{
                const response = await axios.get(`${url}${apiKey}`);
                setUpcomping(response.data.results);
        }
        fetchData();
        const fetchData2 = async()=>{
            const options = {
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmI1N2ViODcyMDBhNTMzNDdmMjVmMTIzN2NiZjlkMyIsInN1YiI6IjY2MmE0ZmJjYmYzMWYyMDA5OWUzNDYxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ruUP91Wjbw0_x_pd_E0HFYOIrv5MV1_3-50-T8K4wY8'
                }
              };
              
              const response =  await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
              setLatest(response.data.results)
            }
            fetchData2()
            const fetchData3 = async ()=>{
                const options = {
                    headers: {
                      accept: 'application/json',
                      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMmI1N2ViODcyMDBhNTMzNDdmMjVmMTIzN2NiZjlkMyIsInN1YiI6IjY2MmE0ZmJjYmYzMWYyMDA5OWUzNDYxYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ruUP91Wjbw0_x_pd_E0HFYOIrv5MV1_3-50-T8K4wY8'
                    }
                  };
                  
                  const response = await axios.get('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', options)
                   setTopRated(response.data.results);
                   console.log(response.data.results)
            }
            fetchData3()
           
    },[])
  return (
    <>
    <Header/>
    <div className='Banner'>
    <Row Title={"TV Shows"} arr={upcoming}/>
    <Row Title={"Movies"} arr = {latest}/>
    <Row Title={"Top Actors/Actresses"} arr = {topRated}/>
    <Row Title={"My List"}/>
    </div>

    </>
   
  )
}

export default Home

