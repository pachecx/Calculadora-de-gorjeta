export class Router {


router ={}

add(routeName, page) {
    this.routes[routeName] = page;
}

handle(){
    const {pathname} = window.location
    const route = this.routes[pathname]
    this.changeBg()

    fetch(route).then(data.text()).then(html =>{
        document.querySelector('#app').innerHTML = html
    })
}

route(event){
    event = event || window.event
    event.preventDefault();
    window.history.pushState({},"", event.target.href)

    this.handle()
}

changeBg(){

    const {pathname} = window.location;

    const {body} = document;

    switch (pathname) {
        case '/home':
        body.className = 'home'    
        break;

        case 'universo':
        body.classList = 'universo'
        break;

        case 'exploracao':
        body.classList = 'exploracao'
        break;

        case '':
        body.classList = ''
        break;
    }
}
}