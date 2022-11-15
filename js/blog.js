let SHEET_ID = '1e5kDWM8SbbEixkkRzbnd5ok7IDgEzpNCZqXE3Smkhag'
let SHEET_TITLE = 'BLOG'
let SHEET_RANGE = 'A2:G1000'

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
    let blog_title = document.getElementById('blog-titulo');
    let blog_fecha = document.getElementById('blog-fecha');
    let blog_tag = document.getElementById('blog-tag');
    let recent_blog = document.getElementsByClassName('recent-blog')
    let length = data.table.rows.length;

    main_title.innerHTML = data.table.rows[length-1].c[1].v
    main_descripcion.innerHTML = data.table.rows[length-1].c[2].v
    main_fecha.innerHTML = data.table.rows[length-1].c[5].f
    main_tag.innerHTML = data.table.rows[length-1].c[4].v

    for(let i = length-2;i >= 0; --i){

        console.log(i)
        /* let new_blog_post = document.createElement('div').className('col-lg-4')
        let article_card = document.createElement('article').className('card')
        let div_card_img = document.createElement('div').className('card-img')
        let div_card_body = document.createElement('div').className('card-body')
        let div_blog_post_meta = document.createElement('div').className('blog-post-meta')
        let ul_list_unstyled = document.createElement('ul').className('list-unstyled')
        let li_tag = document.createElement('li')
        let a_tag = document.createElement('a')
        a_tag.innerHTML = data.table.rows[length-i].c[4].v
        recent_blog.appendChild(new_blog_post)
        new_blog_post.appendChild(article_card)
        article_card.appendChild(div_card_img)
        article_card.appendChild(div_card_body)
        div_card_body.appendChild(div_blog_post_meta)
        div_blog_post_meta.appendChild(ul_list_unstyled)
        ul_list_unstyled.appendChild(li)
        li_tag.appendChild(a_tag) */
    }


})

/* <div class="col-lg-4">
        <article class="card ">
          <div class="card-img">
            <img src="images/blog/featured-thumb10.png" alt="featured-thumb1" class="w-100">
          </div>
          <div class="card-body">
            <div class="blog-post-meta ">
              <ul class="list-unstyled">
                <li class="">
                  <a href="taxonomy.html">Technology</a>
                </li>
                <li class="">
                  <span class="ms-2">15 April 2021</span>
                </li>
              </ul>
            </div>
            <a href="blog-details.html" class="">
              <h5>Usable Templates and Blocks for Jamstack</h5>
            </a>
          </div>
        </article>
      </div> */