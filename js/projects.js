let SHEET_ID = '1e5kDWM8SbbEixkkRzbnd5ok7IDgEzpNCZqXE3Smkhag'
let PROJECT_TITLE = 'CASO DE ESTUDIO'
let PROJECT_RANGE = 'A2:G1000'

let PROJECT_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + PROJECT_TITLE + '&range=' + PROJECT_RANGE)

fetch(PROJECT_URL)
    .then(res => res.text())
    .then(rep => {
        let project_data = JSON.parse(rep.substr(47).slice(0, -2));
        let length = project_data.table.rows.length;
        console.log(project_data);

        let row = document.getElementById('row-container')
        
        let div_col_lg_12_0 = document.createElement('div')
        div_col_lg_12_0.classList.add('col-lg-12')
        let div_project_item_one_0 = document.createElement('div')
        div_project_item_one_0.classList.add('project-item', 'one', 'mb-5')
        let div_project_item_content_0 = document.createElement('div')
        div_project_item_content_0.classList.add('project-item-content')
        let h2_0 = document.createElement('h2')
        h2_0.id = 'project__1-title'
        h2_0.innerHTML = project_data.table.rows[length-1].c[1].v
        let p_0 = document.createElement('p')
        p_0.innerHTML = project_data.table.rows[length-1].c[2].v
        let a_0 = document.createElement('a')
        a_0.setAttribute('href', project_data.table.rows[length-1].c[5].v)
        a_0.classList.add('btn', 'btn-secondary', 'btn-lg', 'mb-4', 'mb-sm-0')
        let span_0 = document.createElement('span')
        span_0.classList.add('position-relative')
        span_0.innerHTML = project_data.table.rows[length-1].c[3].v
        let span_hover_0 = document.createElement('span')
        span_hover_0.classList.add('position-relative')
        span_hover_0.innerHTML = project_data.table.rows[length-1].c[3].v
        let div_project_item_banner_0 = document.createElement('div')
        div_project_item_banner_0.classList.add('project-item-banner')
        let img_0 = document.createElement('img')
        img_0.src = project_data.table.rows[length - 1].c[4].v
        img_0.classList.add('w-100')
        img_0.alt = 'Imagen del proyecto'

        row.appendChild(div_col_lg_12_0)
        div_col_lg_12_0.appendChild(div_project_item_one_0)
        div_project_item_one_0.appendChild(div_project_item_content_0)
        div_project_item_content_0.appendChild(h2_0)
        div_project_item_content_0.appendChild(p_0)
        div_project_item_content_0.appendChild(a_0)
        a_0.appendChild(span_0)
        a_0.appendChild(span_hover_0)
        div_project_item_one_0.appendChild(div_project_item_banner_0)
        div_project_item_banner_0.appendChild(img_0)
        
        let div_col_lg_8_1 = document.createElement('div')
        div_col_lg_8_1.classList.add('col-lg-8')
        let div_project_item_content_mb_5_1 = document.createElement('div')
        div_project_item_content_mb_5_1.classList.add('project-item', 'mb-5')
        let div_project_item_content_1 = document.createElement('div')
        div_project_item_content_1.classList.add('project-item-content')
        let h5_1 = document.createElement('h5')
        h5_1.innerHTML = project_data.table.rows[length - 2].c[1].v
        let p_1 = document.createElement('p')
        p_1.innerHTML = project_data.table.rows[length - 2].c[2].v
        let a_1 = document.createElement('a')
        a_1.classList.add('btn', 'btn-secondary', 'btn-lg', 'mb-4', 'mb-sm-0')
        a_1.setAttribute('href', project_data.table.rows[length - 2].c[5].v)
        let span_1 = document.createElement('span')
        span_1.classList.add('position-relative')
        span_1.innerHTML = project_data.table.rows[length - 2].c[3].v
        let span_hover_1 = document.createElement('span')
        span_hover_1.classList.add('position-relative')
        span_hover_1.innerHTML = project_data.table.rows[length - 2].c[3].v
        let div_project_item_banner_1 = document.createElement('div')
        div_project_item_banner_1.classList.add('project-item-banner')
        let img_1 = document.createElement('img')
        img_1.src = project_data.table.rows[length - 2].c[4].v
        img_1.classList.add('w-100')
        img_1.alt = 'Imagen del proyecto'

        row.appendChild(div_col_lg_8_1)
        div_col_lg_8_1.appendChild(div_project_item_content_mb_5_1)
        div_project_item_content_mb_5_1.appendChild(div_project_item_content_1)
        div_project_item_content_1.appendChild(h5_1)
        div_project_item_content_1.appendChild(p_1)
        div_project_item_content_1.appendChild(a_1)
        a_1.appendChild(span_1)
        a_1.appendChild(span_hover_1)
        div_project_item_content_mb_5_1.appendChild(div_project_item_banner_1)
        div_project_item_banner_1.appendChild(img_1)

        let div_col_lg_4_2 = document.createElement('div')
        div_col_lg_4_2.classList.add('col-lg-4')
        let div_project_item_two_2 = document.createElement('div')
        div_project_item_two_2.classList.add('project-item-two')
        let div_project_item_two_content_2 = document.createElement('div')
        div_project_item_two_content_2.classList.add('project-item-two-content')
        let h5_2 = document.createElement('h5')
        h5_2.innerHTML = project_data.table.rows[length - 3].c[1].v
        let p_2 = document.createElement('p')
        p_2.innerHTML = project_data.table.rows[length - 3].c[2].v
        let a_2 = document.createElement('a')
        a_2.classList.add('btn', 'btn-white', 'btn-sm', 'w-80', 'mx-auto', 'w-sm-35', 'w-md-25', 'w-lg-60', 'w-xxl-40')
        a_2.setAttribute('href', project_data.table.rows[length - 3].c[5].v)
        let span_2 = document.createElement('span')
        span_2.classList.add('position-relative')
        span_2.innerHTML = project_data.table.rows[length - 3].c[3].v
        let span_hover_2 = document.createElement('span')
        span_hover_2.classList.add('position-relative')
        span_hover_2.innerHTML = project_data.table.rows[length - 3].c[3].v
        let div_project_item_two_banner_2 = document.createElement('div')
        div_project_item_two_banner_2.classList.add('project-item-two-banner')
        let img_2 = document.createElement('img')
        img_2.src = project_data.table.rows[length - 3].c[4].v
        img_2.alt = 'Imagen del proyecto'

        row.appendChild(div_col_lg_4_2)
        div_col_lg_4_2.appendChild(div_project_item_two_2)
        div_project_item_two_2.appendChild(div_project_item_two_content_2)
        div_project_item_two_content_2.appendChild(h5_2)
        div_project_item_two_content_2.appendChild(p_2)
        div_project_item_two_content_2.appendChild(a_2)
        a_2.appendChild(span_2)
        a_2.appendChild(span_hover_2)
        div_project_item_two_2.appendChild(div_project_item_two_banner_2)
        div_project_item_two_banner_2.appendChild(img_2)

        let div_col_lg_4_3 = document.createElement('div')
        div_col_lg_4_3.classList.add('col-lg-4')
        let div_project_item_two_3 = document.createElement('div')
        div_project_item_two_3.classList.add('project-item-two')
        let div_project_item_two_content_3 = document.createElement('div')
        div_project_item_two_content_3.classList.add('project-item-two-content')
        let h5_3 = document.createElement('h5')
        h5_3.innerHTML = project_data.table.rows[length - 4].c[1].v
        let p_3 = document.createElement('p')
        p_3.innerHTML = project_data.table.rows[length - 4].c[2].v
        let a_3 = document.createElement('a')
        a_3.classList.add('btn', 'btn-white', 'btn-sm', 'w-80', 'mx-auto', 'w-sm-35', 'w-md-25', 'w-lg-60', 'w-xxl-40')
        a_3.setAttribute('href', project_data.table.rows[length - 4].c[5].v)
        let span_3 = document.createElement('span')
        span_3.classList.add('position-relative')
        span_3.innerHTML = project_data.table.rows[length - 4].c[3].v
        let span_hover_3 = document.createElement('span')
        span_hover_3.classList.add('position-relative')
        span_hover_3.innerHTML = project_data.table.rows[length - 4].c[3].v
        let div_project_item_two_banner_3 = document.createElement('div')
        div_project_item_two_banner_3.classList.add('project-item-two-banner')
        let img_3 = document.createElement('img')
        img_3.src = project_data.table.rows[length - 4].c[4].v
        img_3.alt = 'Imagen del proyecto'

        row.appendChild(div_col_lg_4_3)
        div_col_lg_4_3.appendChild(div_project_item_two_3)
        div_project_item_two_3.appendChild(div_project_item_two_content_3)
        div_project_item_two_content_3.appendChild(h5_3)
        div_project_item_two_content_3.appendChild(p_3)
        div_project_item_two_content_3.appendChild(a_3)
        a_3.appendChild(span_3)
        a_3.appendChild(span_hover_3)
        div_project_item_two_3.appendChild(div_project_item_two_banner_3)
        div_project_item_two_banner_3.appendChild(img_3)

        let div_col_lg_8_4 = document.createElement('div')
        div_col_lg_8_4.classList.add('col-lg-8')
        let div_project_item_content_mb_5_4 = document.createElement('div')
        div_project_item_content_mb_5_4.classList.add('project-item', 'bg-light-dark', 'h-100')
        let div_project_item_content_4 = document.createElement('div')
        div_project_item_content_4.classList.add('project-item-content')
        let h5_4 = document.createElement('h5')
        h5_4.classList.add('text-white')
        h5_4.innerHTML = project_data.table.rows[length - 5].c[1].v
        let p_4 = document.createElement('p')
        p_4.classList.add('text-white')
        p_4.innerHTML = project_data.table.rows[length - 5].c[2].v
        let a_4 = document.createElement('a')
        a_4.classList.add('btn', 'btn-white', 'btn-sm', 'mb-4', 'mb-sm-0')
        a_4.setAttribute('href', project_data.table.rows[length - 5].c[5].v)
        let span_4 = document.createElement('span')
        span_4.classList.add('position-relative')
        span_4.innerHTML = project_data.table.rows[length - 5].c[3].v
        let span_hover_4 = document.createElement('span')
        span_hover_4.classList.add('position-relative')
        span_hover_4.innerHTML = project_data.table.rows[length - 5].c[3].v
        let div_project_item_banner_4 = document.createElement('div')
        div_project_item_banner_4.classList.add('project-item-banner')
        let img_4 = document.createElement('img')
        img_4.src = project_data.table.rows[length - 5].c[4].v
        img_4.classList.add('w-100')
        img_4.alt = 'Imagen del proyecto'

        row.appendChild(div_col_lg_8_4)
        div_col_lg_8_4.appendChild(div_project_item_content_mb_5_4)
        div_project_item_content_mb_5_4.appendChild(div_project_item_content_4)
        div_project_item_content_4.appendChild(h5_4)
        div_project_item_content_4.appendChild(p_4)
        div_project_item_content_4.appendChild(a_4)
        a_4.appendChild(span_4)
        a_4.appendChild(span_hover_4)
        div_project_item_content_mb_5_4.appendChild(div_project_item_banner_4)
        div_project_item_banner_4.appendChild(img_4)

        function project_1(num) {
            let div_col_lg_8_1 = document.createElement('div')
            div_col_lg_8_1.classList.add('col-lg-8', 'lode-next', 'mt-5')
            let div_project_item_content_mb_5_1 = document.createElement('div')
            div_project_item_content_mb_5_1.classList.add('project-item', 'mb-5')
            let div_project_item_content_1 = document.createElement('div')
            div_project_item_content_1.classList.add('project-item-content')
            let h5_1 = document.createElement('h5')
            h5_1.innerHTML = project_data.table.rows[num].c[1].v
            let p_1 = document.createElement('p')
            p_1.innerHTML = project_data.table.rows[num].c[2].v
            let a_1 = document.createElement('a')
            a_1.classList.add('btn', 'btn-secondary', 'btn-lg', 'mb-4', 'mb-sm-0')
            a_1.setAttribute('href', project_data.table.rows[num].c[5].v)
            let span_1 = document.createElement('span')
            span_1.classList.add('position-relative')
            span_1.innerHTML = project_data.table.rows[num].c[3].v
            let span_hover_1 = document.createElement('span')
            span_hover_1.classList.add('position-relative')
            span_hover_1.innerHTML = project_data.table.rows[num].c[3].v
            let div_project_item_banner_1 = document.createElement('div')
            div_project_item_banner_1.classList.add('project-item-banner')
            let img_1 = document.createElement('img')
            img_1.src = project_data.table.rows[num].c[4].v
            img_1.classList.add('w-100')
            img_1.alt = 'Imagen del proyecto'

            row.appendChild(div_col_lg_8_1)
            div_col_lg_8_1.appendChild(div_project_item_content_mb_5_1)
            div_project_item_content_mb_5_1.appendChild(div_project_item_content_1)
            div_project_item_content_1.appendChild(h5_1)
            div_project_item_content_1.appendChild(p_1)
            div_project_item_content_1.appendChild(a_1)
            a_1.appendChild(span_1)
            a_1.appendChild(span_hover_1)
            div_project_item_content_mb_5_1.appendChild(div_project_item_banner_1)
            div_project_item_banner_1.appendChild(img_1)
        }
        function project_2(num) {
            let div_col_lg_4_2 = document.createElement('div')
            div_col_lg_4_2.classList.add('col-lg-4', 'lode-next', 'mt-5')
            let div_project_item_two_2 = document.createElement('div')
            div_project_item_two_2.classList.add('project-item-two')
            let div_project_item_two_content_2 = document.createElement('div')
            div_project_item_two_content_2.classList.add('project-item-two-content')
            let h5_2 = document.createElement('h5')
            h5_2.innerHTML = project_data.table.rows[num - 1].c[1].v
            let p_2 = document.createElement('p')
            p_2.innerHTML = project_data.table.rows[num - 1].c[2].v
            let a_2 = document.createElement('a')
            a_2.classList.add('btn', 'btn-white', 'btn-sm', 'w-80', 'mx-auto', 'w-sm-35', 'w-md-25', 'w-lg-60', 'w-xxl-40')
            a_2.setAttribute('href', project_data.table.rows[num - 1].c[5].v)
            let span_2 = document.createElement('span')
            span_2.classList.add('position-relative')
            span_2.innerHTML = project_data.table.rows[num - 1].c[3].v
            let span_hover_2 = document.createElement('span')
            span_hover_2.classList.add('position-relative')
            span_hover_2.innerHTML = project_data.table.rows[num - 1].c[3].v
            let div_project_item_two_banner_2 = document.createElement('div')
            div_project_item_two_banner_2.classList.add('project-item-two-banner')
            let img_2 = document.createElement('img')
            img_2.src = project_data.table.rows[num - 1].c[4].v
            img_2.alt = 'Imagen del proyecto'

            row.appendChild(div_col_lg_4_2)
            div_col_lg_4_2.appendChild(div_project_item_two_2)
            div_project_item_two_2.appendChild(div_project_item_two_content_2)
            div_project_item_two_content_2.appendChild(h5_2)
            div_project_item_two_content_2.appendChild(p_2)
            div_project_item_two_content_2.appendChild(a_2)
            a_2.appendChild(span_2)
            a_2.appendChild(span_hover_2)
            div_project_item_two_2.appendChild(div_project_item_two_banner_2)
            div_project_item_two_banner_2.appendChild(img_2)
        }

        function project_3(num) {
            let div_col_lg_4_3 = document.createElement('div')
            div_col_lg_4_3.classList.add('col-lg-4', 'lode-next')
            let div_project_item_two_3 = document.createElement('div')
            div_project_item_two_3.classList.add('project-item-two')
            let div_project_item_two_content_3 = document.createElement('div')
            div_project_item_two_content_3.classList.add('project-item-two-content')
            let h5_3 = document.createElement('h5')
            h5_3.innerHTML = project_data.table.rows[num - 2].c[1].v
            let p_3 = document.createElement('p')
            p_3.innerHTML = project_data.table.rows[num - 2].c[2].v
            let a_3 = document.createElement('a')
            a_3.classList.add('btn', 'btn-white', 'btn-sm', 'w-80', 'mx-auto', 'w-sm-35', 'w-md-25', 'w-lg-60', 'w-xxl-40')
            a_3.setAttribute('href', project_data.table.rows[num - 2].c[5].v)
            let span_3 = document.createElement('span')
            span_3.classList.add('position-relative')
            span_3.innerHTML = project_data.table.rows[num - 2].c[3].v
            let span_hover_3 = document.createElement('span')
            span_hover_3.classList.add('position-relative')
            span_hover_3.innerHTML = project_data.table.rows[num - 2].c[3].v
            let div_project_item_two_banner_3 = document.createElement('div')
            div_project_item_two_banner_3.classList.add('project-item-two-banner')
            let img_3 = document.createElement('img')
            img_3.src = project_data.table.rows[num - 2].c[4].v
            img_3.alt = 'Imagen del proyecto'

            row.appendChild(div_col_lg_4_3)
            div_col_lg_4_3.appendChild(div_project_item_two_3)
            div_project_item_two_3.appendChild(div_project_item_two_content_3)
            div_project_item_two_content_3.appendChild(h5_3)
            div_project_item_two_content_3.appendChild(p_3)
            div_project_item_two_content_3.appendChild(a_3)
            a_3.appendChild(span_3)
            a_3.appendChild(span_hover_3)
            div_project_item_two_3.appendChild(div_project_item_two_banner_3)
            div_project_item_two_banner_3.appendChild(img_3)
        }
        function project_4(num) {
            let div_col_lg_8_4 = document.createElement('div')
            div_col_lg_8_4.classList.add('col-lg-8', 'lode-next')
            let div_project_item_content_mb_5_4 = document.createElement('div')
            div_project_item_content_mb_5_4.classList.add('project-item', 'bg-light-dark', 'h-100')
            let div_project_item_content_4 = document.createElement('div')
            div_project_item_content_4.classList.add('project-item-content')
            let h5_4 = document.createElement('h5')
            h5_4.classList.add('text-white')
            h5_4.innerHTML = project_data.table.rows[num - 3].c[1].v
            let p_4 = document.createElement('p')
            p_4.classList.add('text-white')
            p_4.innerHTML = project_data.table.rows[num - 3].c[2].v
            let a_4 = document.createElement('a')
            a_4.classList.add('btn', 'btn-white', 'btn-sm', 'mb-4', 'mb-sm-0')
            a_4.setAttribute('href', project_data.table.rows[num - 3].c[5].v)
            let span_4 = document.createElement('span')
            span_4.classList.add('position-relative')
            span_4.innerHTML = project_data.table.rows[num - 3].c[3].v
            let span_hover_4 = document.createElement('span')
            span_hover_4.classList.add('position-relative')
            span_hover_4.innerHTML = project_data.table.rows[num - 3].c[3].v
            let div_project_item_banner_4 = document.createElement('div')
            div_project_item_banner_4.classList.add('project-item-banner')
            let img_4 = document.createElement('img')
            img_4.src = project_data.table.rows[num - 3].c[4].v
            img_4.classList.add('w-100')
            img_4.alt = 'Imagen del proyecto'

            row.appendChild(div_col_lg_8_4)
            div_col_lg_8_4.appendChild(div_project_item_content_mb_5_4)
            div_project_item_content_mb_5_4.appendChild(div_project_item_content_4)
            div_project_item_content_4.appendChild(h5_4)
            div_project_item_content_4.appendChild(p_4)
            div_project_item_content_4.appendChild(a_4)
            a_4.appendChild(span_4)
            a_4.appendChild(span_hover_4)
            div_project_item_content_mb_5_4.appendChild(div_project_item_banner_4)
            div_project_item_banner_4.appendChild(img_4)
        }

        for (let i = length - 6; 0 <= i; i -= 4) {
            console.log(i)
            project_1(i)
            if (i - 1 < 0) break
            project_2(i)
            if (i - 1 < 0) break
            project_3(i)
            if (i - 1 < 0) break
            project_4(i)
        }

        let div_d_flex_justify_content_center = document.createElement('div')
        div_d_flex_justify_content_center.classList.add('d-flex', 'justify-content-center')
        let a_next_more = document.createElement('a')
        a_next_more.setAttribute('href', '#')
        a_next_more.classList.add('next-more', 'mt-xxl-10', 'mt-lg-9', 'mt-md-7', 'mt-6')
        a_next_more.innerHTML = '<i class="ph-arrow-down"></i>More Project'

        row.appendChild(div_d_flex_justify_content_center)
        div_d_flex_justify_content_center.appendChild(a_next_more)

        {/* <div class="d-flex justify-content-center">
        <a href="#" class="next-more mt-xxl-10 mt-lg-9 mt-md-7 mt-6">
          <i class="ph-arrow-down"></i>More Project</a
        >
      </div> */}
    })


{/* <div class="col-lg-4 lode-next mt-5">
        <div class="project-item-two">
          <div class="project-item-two-content">
            <h5>
              Movie Time <br />
              IOS App Development
            </h5>
            <p>Mobile App</p>
            <a
              href="project-details.html"
              class="
                btn btn-white btn-sm
                w-80
                mx-auto
                w-sm-35 w-md-25 w-lg-50 w-xxl-40
              "
            >
              <span class="position-relative"> View Project</span>
              <span class="position-relative"> View Project</span>
            </a>
          </div>
          <div class="project-item-two-banner">
            <img
              src="images/project/project-3.png"
              class="w-100"
              alt="project-image"
            />
          </div>
        </div> */}