let SHEET_ID = '1e5kDWM8SbbEixkkRzbnd5ok7IDgEzpNCZqXE3Smkhag'
let PROJECT_TITLE = 'CASO DE ESTUDIO'
let PROJECT_RANGE = 'A2:G1000'

let PROJECT_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + PROJECT_TITLE + '&range=' + PROJECT_RANGE)

fetch(PROJECT_URL)
.then(res => res.text())
.then(rep => {
    let project_data = JSON.parse(rep.substr(47).slice(0, -2));
    let length = project_data.table.rows.length;
    console.log(project_data)
    
    document.getElementById('project__1-title').innerHTML = project_data.table.rows[length-1].c[1].v
    document.getElementById('project__1-tag').innerHTML = project_data.table.rows[length-1].c[2].v
    document.getElementById('project__1-button').innerHTML = project_data.table.rows[length-1].c[3].v
    document.getElementById('project__1-button-hover').innerHTML = project_data.table.rows[length-1].c[3].v
    document.getElementById('project__1-a').setAttribute('href', project_data.table.rows[length-1].c[5].v)
    let project_1_img = document.createElement('img')
    project_1_img.src = project_data.table.rows[length-1].c[4].v
    document.getElementById('project__1-img').appendChild(project_1_img)

    document.getElementById('project__2-title').innerHTML = project_data.table.rows[length-2].c[1].v
    document.getElementById('project__2-tag').innerHTML = project_data.table.rows[length-2].c[2].v
    document.getElementById('project__2-button').innerHTML = project_data.table.rows[length-2].c[3].v
    document.getElementById('project__2-button-hover').innerHTML = project_data.table.rows[length-2].c[3].v
    document.getElementById('project__2-a').setAttribute('href', project_data.table.rows[length-2].c[5].v)
    let project_2_img = document.createElement('img')
    project_2_img.src = project_data.table.rows[length-2].c[4].v
    project_2_img.classList.add('w-100')
    document.getElementById('project__2-img').appendChild(project_2_img)

    document.getElementById('project__3-title').innerHTML = project_data.table.rows[length-3].c[1].v
    document.getElementById('project__3-tag').innerHTML = project_data.table.rows[length-3].c[2].v
    document.getElementById('project__3-button').innerHTML = project_data.table.rows[length-3].c[3].v
    document.getElementById('project__3-button-hover').innerHTML = project_data.table.rows[length-3].c[3].v
    document.getElementById('project__3-a').setAttribute('href', project_data.table.rows[length-3].c[5].v)
    let project_3_img = document.createElement('img')
    project_3_img.src = project_data.table.rows[length-3].c[4].v
    document.getElementById('project__3-img').appendChild(project_3_img)

    document.getElementById('project__4-title').innerHTML = project_data.table.rows[length-4].c[1].v
    document.getElementById('project__4-tag').innerHTML = project_data.table.rows[length-4].c[2].v
    document.getElementById('project__4-button').innerHTML = project_data.table.rows[length-4].c[3].v
    document.getElementById('project__4-button-hover').innerHTML = project_data.table.rows[length-4].c[3].v
    document.getElementById('project__4-a').setAttribute('href', project_data.table.rows[length-4].c[5].v)
    let project_4_img = document.createElement('img')
    project_4_img.src = project_data.table.rows[length-4].c[4].v
    document.getElementById('project__4-img').appendChild(project_4_img)

    document.getElementById('project__5-title').innerHTML = project_data.table.rows[length-5].c[1].v
    document.getElementById('project__5-tag').innerHTML = project_data.table.rows[length-5].c[2].v
    document.getElementById('project__5-button').innerHTML = project_data.table.rows[length-5].c[3].v
    document.getElementById('project__5-button-hover').innerHTML = project_data.table.rows[length-5].c[3].v
    document.getElementById('project__5-a').setAttribute('href', project_data.table.rows[length-5].c[5].v)
    let project_5_img = document.createElement('img')
    project_5_img.src = project_data.table.rows[length-5].c[4].v
    project_5_img.classList.add('w-100')
    document.getElementById('project__5-img').appendChild(project_5_img)
})