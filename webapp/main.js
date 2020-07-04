import './css/main.scss';
import $ from 'jquery';
import Home from './Home.vue';
import Archive from './Archive.vue';
import ViewFund from './ViewFund.vue';
import Tos from './Tos.vue';
import HowItWorks from './HowItWorks.vue';
import CreateFund from './CreateFund.vue';
import Contact from './Contact.vue';
import FirstTimeSetup from './FirstTimeSetup.vue';


window.addEventListener('DOMContentLoaded', () => {
    let routes;

    if (window.appInfo.firstTimeSetup){
        routes = [
            { path: '/', component: FirstTimeSetup },
        ];

        $(".main.menu").hide();
    }else{
        routes = [
            { path: '/', component: Home },
            { path: '/fund/:id', component: ViewFund },
            { path: '/archive', component: Archive },
            { path: '/tos', component: Tos },
            { path: '/howitworks', component: HowItWorks },
            { path: '/createfund', component: CreateFund },
            { path: '/contact', component: Contact }
        ];
    }
    
    const router = new VueRouter({ routes });

    new Vue({
        router
    }).$mount("#app")

    if (window.location.href.indexOf("localhost") !== -1 ||
        window.location.href.indexOf("192.168.") !== -1 ||
        window.location.href.indexOf("127.0.0.1") !== -1){
        const livereload = document.createElement("script");
        livereload.src = `${window.location.protocol}//${window.location.hostname}:35731/livereload.js`;
        document.body.appendChild(livereload);
    }
});