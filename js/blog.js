let SHEET_ID = '1e5kDWM8SbbEixkkRzbnd5ok7IDgEzpNCZqXE3Smkhag'
let SHEET_TITLE = 'BLOG'
let SHEET_RANGE = 'A2:H1000'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE)

fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0, -2));
    console.log(data)
    
    
    let main_title = document.getElementById('main-titulo');
    let main_descripcion = document.getElementById('main-descripcion');
    let main_fecha = document.getElementById('main-fecha');
    let main_tag = document.getElementById('main-tag');
    let main_blog_img = document.getElementById('main-blog-img')
    let recent_blog = document.getElementById('recent-blog')
    let main_img = document.createElement('img')
    let length = data.table.rows.length;

    main_img.src = data.table.rows[length-1].c[6].v
    main_img.setAttribute('alt', 'featured-thumb1')
    main_img.classList.add('w-100')
    main_blog_img.appendChild(main_img)
    main_title.innerHTML = data.table.rows[length-1].c[1].v
    main_descripcion.innerHTML = data.table.rows[length-1].c[2].v
    main_fecha.innerHTML = data.table.rows[length-1].c[5].f
    main_tag.innerHTML = data.table.rows[length-1].c[4].v

    for(let i = length-2;i >= 0; --i){

        console.log(i)
        let new_blog_post = document.createElement('div')
        new_blog_post.classList.add('col-lg-4', 'blog-post-new' + i)
        let article_card = document.createElement('article')
        article_card.classList.add('card', 'blog-post-card' + i)
        let div_card_img = document.createElement('div')
        let img_w_100 = document.createElement('img')
        img_w_100.src = 'images/blog/featured-thumb2.png'
        img_w_100.setAttribute('alt', 'featured-thumb1')
        img_w_100.classList.add('w-100')
        div_card_img.classList.add('card-img', 'blog-post-card-img' + i)
        let div_card_body = document.createElement('div')
        div_card_body.classList.add('card-body', 'blog-post-card-body' + i)
        let div_blog_post_meta = document.createElement('div')
        div_blog_post_meta.classList.add('blog-post-meta', 'blog-post-post-meta' + i)
        let ul_list_unstyled = document.createElement('ul')
        ul_list_unstyled.classList.add('list-unstyled', 'blog-post-list-unstyled' + i)
        let li_tag = document.createElement('li')
        li_tag.classList.add('li-tag' + i)
        let a_tag = document.createElement('a')
        a_tag.innerHTML = data.table.rows[i].c[4].v
        a_tag.classList.add('a-tag' + i)
        a_tag.setAttribute('href', '#')
        let li_fecha = document.createElement('li')
        li_fecha.classList.add('li-fecha' + i)
        let span_fecha = document.createElement('span')
        span_fecha.classList.add('ms-2', 'span-fecha')
        span_fecha.innerHTML = data.table.rows[i].c[5].f
        let div_blog_titulo = document.createElement('div')
        let a_blog_titulo = document.createElement('a')
        a_blog_titulo.setAttribute('href', data.table.rows[i].c[7].v)
        let h5_blog_titulo = document.createElement('h5')
        h5_blog_titulo.innerHTML = data.table.rows[i].c[1].v

        recent_blog.appendChild(new_blog_post)
        new_blog_post.appendChild(article_card)
        article_card.appendChild(div_card_img)
        div_card_img.appendChild(img_w_100)
        article_card.appendChild(div_card_body)
        div_card_body.appendChild(div_blog_post_meta)
        div_blog_post_meta.appendChild(ul_list_unstyled)
        ul_list_unstyled.appendChild(li_tag)
        li_tag.appendChild(a_tag)
        ul_list_unstyled.appendChild(li_fecha)
        li_fecha.appendChild(span_fecha)
        div_card_body.appendChild(div_blog_titulo)
        div_blog_titulo.appendChild(a_blog_titulo)
        a_blog_titulo.appendChild(h5_blog_titulo)
    }


})