import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import GoogleMapReact from 'google-map-react';
import NavBar from './NavBar';
import '../CSS/Contact.css'



class Contact extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  componentDidMount() {
    this.props.onHomePage(false);
  }


  render() {
    return (
      <div className='page'>
          <div className='text-center page-headers'>
            <a href="https://www.linkedin.com/in/coleclark1/" target="_blank" rel="noopener noreferrer" className='social mx-4'><i className="fa fa-linkedin fa-3x"></i></a>
            <a href="mailto:colemclark1@gmail.com" className="social mx-4"><i className="fa fa-envelope fa-3x"></i></a>
            <a href="https://github.com/colemclark1" target="_blank" rel="noopener noreferrer" className='social mx-4'><i className="fa fa-github-square fa-3x"></i></a>
          </div>
      </div>
    )
  }
}
export default Contact;
