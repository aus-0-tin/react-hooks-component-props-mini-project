import React from "react";
import Article from "./Article";

function ArticleList(props) {
    const articles = props.posts.map(article => (
        <Article key={article.id} title={article.title} date={article.date} preview={article.preview} minutes={article.minutes}/>
    ));
    return (
        <main>
            {articles}
        </main>
    );
}

export default ArticleList;