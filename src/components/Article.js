import React from 'react';
import { useSelector } from 'react-redux';
import { selectArticles } from '../features/articles/articlesSlice';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';


export default function Article () {
  const articles = useSelector(selectArticles)
  const { title } = useParams()
  const article = articles[title]
  

  return article ? (
    <div className='article-container'>
      <h1 className='article-title'>{article.title}</h1>
      <Link>
      </Link>
      <ReactMarkdown>
        {article.body} 
      </ReactMarkdown>
      <div className='bbp'> 
      <img src={article.img}/>
      <img src={article.img1}/>
      <img src={article.img2}/>
      </div>
    </div>
  ) : <p> No article found with that title... </p>
}


