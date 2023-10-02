import styled from "styled-components"
import React from "react"

const WeatherLogo = styled.img`
width:140px;
height:140px;
margin:40px auto;
img:
`
const ChooseCityLabel = styled.span`
color:black;
font-size:18px;
font-weight:bold;
margin:10px auto;
`

const SearchBox = styled.form`
display: flex;
flex-direction: row;
border: black solid 1px;
border-radius: 2px;

&input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
    font-family: 'PT Sans', sans-serif;
}

& button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: 'PT Sans', sans-serif;
    font-weight: bold;
  }
`

const CityComponent = (props) => {
    const { updateCity, fetchWeather } = props;
    return (
        <>
            <WeatherLogo src="/Icons/weatherlogo.jpeg" alt=""/>
            <ChooseCityLabel>Enter City</ChooseCityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input placeholder="City" onChange={(e) => updateCity(e.target.value)}></input>
                <button type="submit">Search</button>
            </SearchBox>
        </>
    )
}

export default CityComponent;