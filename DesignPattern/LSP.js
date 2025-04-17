class User {
    accessContent() {
    console.log("Accès au contenu général.");
    }
   }
   class PremiumUser extends User {
    accessContent(){
        super.accessContent();
        console.log("Accès au contenu premium.");
    }
   }

   const user = new User();
   const premiumUser = new PremiumUser();
   accessContent(user);
   accessContent(premiumUser);
   