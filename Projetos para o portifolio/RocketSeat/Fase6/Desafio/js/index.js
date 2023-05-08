import {Router} from "./Modules/router.js"

const router = new router ();

router.add('/', 'pages/home.html')
router.add('/universo', 'pages/universo.html')
router.add('/exploracao', 'pages/exploracao.html')

router.handle();
window.onpopstate = () => router.handle();
window.router = () => router.router();
