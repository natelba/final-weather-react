import React from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on"/>
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary w-100" />
                    </div>
                </div>
            </form>
            
            <h1>New York, NY</h1>
            <ul>
                <li>Thursday June 11, 2021 08:00pm</li>
                <li>Partly Cloudy</li>
            </ul>
            
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="Partly Cloudy" className="float-left"/>
                        <span className="temperature">6</span><span className="unit">ºC</span> 
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 20% </li>
                        <li>Humidity: 72%</li>
                        <li>Wind: 13 mph</li>
                    </ul>
                </div>
            </div>
            
        </div>
    );
}