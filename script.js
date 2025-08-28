(function(){
     emailjs.init('BFqyAhwRXqGFR1KTl')
})();

document.getElementById('contact_form').addEventListener('submit',function(event){
        event.preventDefault();
        emailjs.sendForm('service_mnoq8rh', 'template_osmq867', this)
            .then(
                function(){
                    alert("Message sent successfully");

                },
            function(error){
                alert("Message not sent" + JSON.stringify(error));
            }
            )
        }
)

const menu_btn_clicked = document.getElementById('menu_btn');
const menu_xs = document.querySelector('.menu_xs');
const main = document.getElementById('main');
const menu_links = document.querySelectorAll('.menu_xs a');
const my_menu = document.getElementById('menu_id');

menu_btn_clicked.addEventListener('click', function(){
       menu_xs.classList.toggle('menu_xs_show'); 
       if(my_menu.classList.contains('menu_xs_show')){
                main.classList.add('main_content_margin');
       }
       else{
         main.classList.remove('main_content_margin');
       }
})

menu_links.forEach((link)=>{

    link.addEventListener('click', function(){
        menu_xs.classList.remove('menu_xs_show');
        main.classList.remove('main_content_margin')
    })

});

