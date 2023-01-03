
import { useParams, redirect, useNavigate } from "react-router-dom";
import { URL_SHORTENER_API_ENDPOINT } from "./config";

import React, { Component } from 'react'

export default class Redirect extends Component {

    componentDidMount() { 
        this.redirectToUrl()
     }

        redirectToUrl() {
        console.log('call')
        // const response = fetch(URL_SHORTENER_API_ENDPOINT + shortKey);
        // if (response.status == 404) {
        //   console.log(response.status);
    
        //   return navigate("/404");
        // }
        // // const data = await response.json();
        // // window.location.href = data.url
        // // console.log(data)
      }
    
  render() {
    return (
      <div></div>
    )
  }
}

