import React, { useState } from 'react';
import './ArticleForm.css';

function ArticleForm() {
  const [title, setTitle] = useState('');
  const [abstract, setAbstract] = useState('');
  const [articletext, setArticletext] = useState('');
  const [tags, setTags] = useState('');

  return (
    <div className="article-form">
      <h2>What do you want to share?</h2>
      <label htmlFor="articleTitle">Title</label>
<input
  id="articleTitle"
  type="text"
  placeholder="Enter a descriptive title"
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
<label htmlFor="abstract">Abstract</label>
<textarea
  id="abstract"
  value={abstract}
  onChange={(e) => setAbstract(e.target.value)}
  rows={3} 
/>
<label htmlFor="articleText">Article Text</label>
<textarea
  id="articleText"
  value={articletext}
  onChange={(e) => setArticletext(e.target.value)}
  rows={7} 
/>
<label htmlFor="articleTags">Tags</label>
<input
  id="articleTags"
  type="text"
  placeholder="Please add up to 3 tags"
  value={tags}
  onChange={(e) => setTags(e.target.value)}
/>
      <button>Post</button>
    </div>
  );
}

export default ArticleForm;
