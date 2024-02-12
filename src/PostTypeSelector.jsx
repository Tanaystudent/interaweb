import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';
import './PostTypeSelector.css';
function PostTypeSelector() {
  const [postType, setPostType] = useState(null);

  return (
    <div className='post-type-selector'>
      <button onClick={() => setPostType('question')}>Question</button>
      <button onClick={() => setPostType('article')}>Article</button>

      {postType === 'question' && <QuestionForm />}
      {postType === 'article' && <ArticleForm />}
    </div>
  );
}

export default PostTypeSelector;
