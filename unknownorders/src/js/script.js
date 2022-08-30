var ul = document.querySelector('ul');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}

function formToggle(){
    $('#add').click(function(){
        $('.section-form').slideToggle();
    })
}

function styleRandom(){
    $('#style').click(function(){
        $('link[href="src/css/style.css"]').attr('href','src/css/style2.css');
        $('#style').addClass('button-style2');
        $('link[href="src/css/style.css"]').attr('href','src/css/style2.css');
    });
    
}

formToggle();
styleRandom();