class AppConfig {
    constructor(){
        this.config={};
    }

    set(key, value) {
        this.config[key] = value;
    }

    get(key) {
        return this.config[key];
    }

    showAll() {
        console.log(this.config);
    }
}

const Singleton= (function(){
    let instance;

    function createInstance(){
        const appConfig=new AppConfig();
        return appConfig;
    }

    return{
        getInstance: function(){
            if(!instance){
                instance=createInstance();
            }
            return instance;
        }
    };
})();

const instance = Singleton.getInstance();
const instance2 = Singleton.getInstance();


instance1.set("apiUrl", "https://api.example.com");
instance1.set("timeout", 3000);

console.log(instance2.get("apiUrl"));
console.log(instance2.get("timeout"));  

console.log(instance===instance2); //Affiche : true