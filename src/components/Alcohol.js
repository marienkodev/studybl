import React from 'react';
import { useParams } from 'react-router-dom';
import { AlcoPosts } from '../app/data';
import ReactMarkdown from 'react-markdown';

export default function Alcohol() {
    const { slug } = useParams();
    const alcohol = AlcoPosts[slug];
   
    if(!alcohol) {
      return <span>The blog post you've requested doesn't exist.</span>;
    }
    
    
    const { title, body, img, img1, img2, img3, img4, img5, img6, img7, img8} = alcohol;

    return (
      <div className='bppcontainer' style={{ padding: 20 }}>
        <h3>{title}</h3>
        <ReactMarkdown>
          {body}
        </ReactMarkdown>
        <div className='bpp'>
      <img src={img}/>
      <img src={img1}/>
      <img src={img2}/>
      <img src={img3}/>
      <img src={img4}/>
      <img src={img5}/>
      <img src={img6}/>
      <img src={img7}/>
      <img src={img8}/>
      </div>
      </div>
    );
  }