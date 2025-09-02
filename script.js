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

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const track = document.querySelector('.carosel_track');


let index = 0;

function updateTrack() {

    console.log("Index",index)

    track.style.transform = `translateX(-${index * 100}%)`;

    if(index == 0){
        prevBtn.classList.add('inactive');
    }
    else{
        prevBtn.classList.remove('inactive');
    }

    if(index > track.children.length - 2){
        nextBtn.classList.add('inactive');
    }
    else{
        nextBtn.classList.remove('inactive');
    }
}

prevBtn.addEventListener('click',function () {
    if(index > 0){
        index--;
        updateTrack();
    }
})

nextBtn.addEventListener('click', function () {
    if(index < track.children.length - 1){
        index++;
        updateTrack();
    }
})

updateTrack();



