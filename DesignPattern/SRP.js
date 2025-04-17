class CreateArticle{
    constructor() {
        this.articles = [];
    }
    createArticle(title, content) {
        const newArticle = { title, content };
        this.articles.push(newArticle);
        console.log('Article created:', newArticle);
    }
}

class EditArticle{
    constructor(articles){
        this.articles=articles;
    }
    editArticle(title, newContent) {
        const article = this.articles.find(article => article.title === title);
        if (article){
            article.content = newContent;
            console.log('Article updated:', article);
        }
        else {
            console.log('Article not found:', title);
        }
    }
}

class DeleteArticle{
    constructor(articles){
        this.articles=articles;
    }
    deleteArticle(title) {
        const index = this.articles.findIndex(article => article.title === title);
        if (article){
            this.articles.splice(index, 1);
            console.log('Article deleted:', title);
        }
        else {
            console.log('Article not found:', title);
        }
    }
}

class PublishArticle{
    constructor(articles){
        this.articles=articles;
    }
    publishArticle(title) {
    console.log('Article published:', title);
    }
}
