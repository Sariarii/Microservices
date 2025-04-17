class Document {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }  
}

class Report extends Document {
    constructor(type) {
        super(title,content);
        this.type = type;
    }

    generate() {
        console.log(`Generating report: ${this.title} type : ${this.type}`);
    }
}
class Letter extends Document {
    constructor(recipient) {
        super(title,content);
        this.recipient = recipient;
    }

    send() {
        console.log(`Sending letter : ${this.title} to: ${this.recipient}`);
    }
}
class Memo extends Document{
    constructor(department) {
        super(title,content);
        this.department = department;
    }

    archive() {
        console.log(`Archiving memo : ${this.title} for department: ${this.department}`);
    }
}

function documentFactory(type) {
    switch (type) {
        case 'report':
            return new Report();
        case 'letter':
            return new Letter();
        case 'memo':
            return new Memo();
        default:
            throw new Error(`Unknown document type: ${type}`);
    }
}

const report = documentFactory('report');
report.generate();
const letter = documentFactory('letter');
letter.send();
const memo = documentFactory('memo');
memo.archive();
