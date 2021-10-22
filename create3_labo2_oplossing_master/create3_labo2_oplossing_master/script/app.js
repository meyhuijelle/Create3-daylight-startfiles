// Twee opmerkingen hierbij; ten eerste, het is niet ideaal om zomaar variabelen bij te houden over de hele scope van je bestand. Ik verwijs je graag naar de module frontend om dit wel correct te doen. Voor deze (kleine) oefening maakt dat niet zo veel uit.
// Ten tweede; de { } notatie staat voor een leeg object. Straks splitsen we onze input-velden op in hun verschillende onderdelen. Dan wordt het een item met een input-veld, de parent en de error-message.
let email = {}, password = {}, signInButton;

function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    //  #1 Haal in deze functie de password-input en de password-toggle op. Doe dit met .js- prefixed classnames.
    const passwordInput =  document.querySelector('.js-password');
    const passwordToggle = document.querySelector('.js-toggle-password');
    // #2 We gaan luisteren of er geklikt wordt op de checkbox.
    // Het change-event zou ook wel werken, dit is voor alle soorten inputs.
    //click gaat ook!
    passwordToggle.addEventListener('change', function(){
        console.log(passwordToggle.checked);
        
        //const toggleOptions = ['text', 'password']
        //passwordInput.type = toggleOptions[+this.checked]; --> dit gaat ook 
        // --> dit zal een true of false weergeven!

        if (passwordToggle.checked){
            passwordInput.type = 'text';
        }else{
            passwordInput.type = 'password';
        }
    })
    // #3 Als er geklikt wordt, veranderen we het type van de input van 'password' naar 'text' en vice versa.
}

function getDOMElements() {
    const itemEmail = document.querySelector('.js-email');
    email = itemEmail.value;
    console.log(email);
    const itemPassword = document.querySelector('.js-password');
    password = itemPassword.value;
    console.log(password);
}

// const handlePasswordSwitcher = function(){

// }

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();

    const itemEmail = document.querySelector('.js-email')
    itemEmail.addEventListener('blur',function(){
        // blur is als je eruit gaat dat het getriggerd wordt
        getDOMElements();
    })
    const itemPassword = document.querySelector('.js-password')
    itemPassword.addEventListener('blur',function(){
        // blur is als je eruit gaat dat het getriggerd wordt
        getDOMElements();
    })
});