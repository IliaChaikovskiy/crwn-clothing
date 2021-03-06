import React from 'react';
import './menu-item.styles.scss';

// higher order component, function that gives u back a powered up component
// u get access to router props
import { withRouter } from 'react-router-dom';

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => (
    <div 
        className={`${size} menu-item`} 
        onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className='background-image'
            style={{
                backgroundImage:`url(${imageUrl})`
            }}>
        </div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);