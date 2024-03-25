import React from 'react';
import { Link } from 'react-router-dom';
import { AlcoPosts } from '../app/data';


export default  function AlcoholLists() {
    return (
      <ul>
        {Object.entries(AlcoPosts).map(([slug, { title }]) => (
          <li key={AlcoPosts.slug} style={{lineHeight: 0.5}}>
            <Link to={`/alcohol/${slug}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    );
  }