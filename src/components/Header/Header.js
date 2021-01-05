import React from 'react';
import CardSection from '../Card/Card';
import ProfileImage from '../../assets/img/profile.jpeg';
import '../../styles/_header.scss';

function Header() {
    return (
        <CardSection fluid={true}>
            <div className="Header">
                <div className="Text">
                    <h1 className="title">Hi! I'm Jafi</h1>
                    <h4 className="sub-title">I'm a Software Engenieer</h4>
                </div>
                <img src={ProfileImage} alt="profile"/>
            </div>
        </CardSection>
    );
}

export default Header;
