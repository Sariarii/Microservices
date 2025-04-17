class ArticleStorage {
    save(article) {
    console.log("Article saved in local storage:", article);
    }
}
class ArticlePublisher {
    constructor(articleStorage) {
        this.articleStorage = articleStorage;
    }
    publish(article) {
        return this.articleStorage.save(article);
    }
}

const articleStorage = new ArticleStorage();
const articlePublisher = new ArticlePublisher(articleStorage);

articlePublisher.publish("Article 1");
   