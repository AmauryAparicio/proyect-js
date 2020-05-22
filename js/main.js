$(document).ready(function() {

    /* --------------------------------- Slider --------------------------------- */

    $('.galeria').bxSlider({
        auto: true,
        responsive: true,
        infiniteLoop: true,
        speed: 1000,
        mode: 'fade',
        captions: true,
        slideWidth: 1200
    });

    /* ---------------------------------- Posts --------------------------------- */

    var posts = [{
            title: 'Prueba de titulo 1',
            date: 'Publicado el dia ' + moment().locale('es-us').format("LL"),
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita laboriosam itaque, quaerat at fuga minima tempore? Odio temporibus, consectetur fugiat commodi amet perferendis quos similique accusantium? Pariatur cum veniam doloribus architecto, vel numquam obcaecati dolores, quo, earum dicta debitis sed quis!Sint tempore quidem natus omnis mollitia exercitationem praesentium minima blanditiis laboriosam voluptatem.Laborum facere accusantium, iusto commodi dolore dicta ex illum voluptatum quas a minima obcaecati recusandae temporibus totam ullam in amet sequi quia illo!Recusandae necessitatibus minima explicabo!Ipsum repellat, repellendus non voluptatem quis iste perferendis nobis ad saepe adipisci repudiandae sed, exercitationem error alias id cupiditate sunt!'
        },
        {
            title: 'Prueba de titulo 2',
            date: 'Publicado el dia ' + moment().locale('es-us').format("LL"),
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita laboriosam itaque, quaerat at fuga minima tempore? Odio temporibus, consectetur fugiat commodi amet perferendis quos similique accusantium? Pariatur cum veniam doloribus architecto, vel numquam obcaecati dolores, quo, earum dicta debitis sed quis!Sint tempore quidem natus omnis mollitia exercitationem praesentium minima blanditiis laboriosam voluptatem.Laborum facere accusantium, iusto commodi dolore dicta ex illum voluptatum quas a minima obcaecati recusandae temporibus totam ullam in amet sequi quia illo!Recusandae necessitatibus minima explicabo!Ipsum repellat, repellendus non voluptatem quis iste perferendis nobis ad saepe adipisci repudiandae sed, exercitationem error alias id cupiditate sunt!'
        },
        {
            title: 'Prueba de titulo 3',
            date: 'Publicado el dia ' + moment().locale('es-us').format("LL"),
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita laboriosam itaque, quaerat at fuga minima tempore? Odio temporibus, consectetur fugiat commodi amet perferendis quos similique accusantium? Pariatur cum veniam doloribus architecto, vel numquam obcaecati dolores, quo, earum dicta debitis sed quis!Sint tempore quidem natus omnis mollitia exercitationem praesentium minima blanditiis laboriosam voluptatem.Laborum facere accusantium, iusto commodi dolore dicta ex illum voluptatum quas a minima obcaecati recusandae temporibus totam ullam in amet sequi quia illo!Recusandae necessitatibus minima explicabo!Ipsum repellat, repellendus non voluptatem quis iste perferendis nobis ad saepe adipisci repudiandae sed, exercitationem error alias id cupiditate sunt!'
        },
        {
            title: 'Prueba de titulo 4',
            date: 'Publicado el dia ' + moment().locale('es-us').format("LL"),
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita laboriosam itaque, quaerat at fuga minima tempore? Odio temporibus, consectetur fugiat commodi amet perferendis quos similique accusantium? Pariatur cum veniam doloribus architecto, vel numquam obcaecati dolores, quo, earum dicta debitis sed quis!Sint tempore quidem natus omnis mollitia exercitationem praesentium minima blanditiis laboriosam voluptatem.Laborum facere accusantium, iusto commodi dolore dicta ex illum voluptatum quas a minima obcaecati recusandae temporibus totam ullam in amet sequi quia illo!Recusandae necessitatibus minima explicabo!Ipsum repellat, repellendus non voluptatem quis iste perferendis nobis ad saepe adipisci repudiandae sed, exercitationem error alias id cupiditate sunt!'
        },
        {
            title: 'Prueba de titulo 5',
            date: 'Publicado el dia ' + moment().locale('es-us').format("LL"),
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita laboriosam itaque, quaerat at fuga minima tempore? Odio temporibus, consectetur fugiat commodi amet perferendis quos similique accusantium? Pariatur cum veniam doloribus architecto, vel numquam obcaecati dolores, quo, earum dicta debitis sed quis!Sint tempore quidem natus omnis mollitia exercitationem praesentium minima blanditiis laboriosam voluptatem.Laborum facere accusantium, iusto commodi dolore dicta ex illum voluptatum quas a minima obcaecati recusandae temporibus totam ullam in amet sequi quia illo!Recusandae necessitatibus minima explicabo!Ipsum repellat, repellendus non voluptatem quis iste perferendis nobis ad saepe adipisci repudiandae sed, exercitationem error alias id cupiditate sunt!'
        },
    ];
    posts.forEach((item, index) => {
        var post = `
        <article class="post">
            <h2>${item.title}</h2>
            <span class="date">${item.date}</span>
            <p>${item.content}</p>
            <a href="#" class="button-more">Leer más...</a>
        </article>
        `;
        $("#posts").append(post);
    });

    /* ---------------------------- Selector de tema ---------------------------- */

    var theme = $('#theme')
    $('#toGreen').click(function() {
        theme.attr("href", "css/green.css");
    });
    $('#toRed').click(function() {
        theme.attr("href", "css/red.css");
    });
    $('#toBlue').click(function() {
        theme.attr("href", "css/blue.css");
    });
});