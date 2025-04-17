class ArticleFormatter {
    format(){
        throw new Error("Un format doit etre précisé");
    }
}
class HTML extends ArticleFormatter {
    constructor(title,content){
        super();
        this.title = title;
        this.content = content;
    }
    format() {
    return `<h1>${this.title}</h1><p>${this.content}</p>`;
    }
}

class Markdown extends ArticleFormatter {
    constructor(title,content){
        super();
        this.title = title;
        this.content = content;
    }
    format() {
    return `# ${this.title}\n${this.content}`;
    }
}
   