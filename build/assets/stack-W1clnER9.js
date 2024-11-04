import{j as t,r as d}from"./index-rqtlyxV8.js";import{s as m}from"./widgets.module-BTaM9VuO.js";import{m as u,H as _}from"./index-Bqve4IyA.js";import{M as x}from"./index-CvfSxcQ9.js";const g="_cart_1xxnu_1",j="_cartContent_1xxnu_4",p="_icon_1xxnu_4",C="_cartContentP_1xxnu_7",P="_cartContentPS_1xxnu_10",v="_activeCart_1xxnu_14",c={cart:g,cartContent:j,icon:p,cartContentP:C,cartContentPS:P,activeCart:v};function S({header:s,technology:o,src:a,isActive:r,onClick:e}){return t.jsx("div",{className:`${c.cart} ${r?c.activeCart:""}`,onClick:e,children:t.jsxs("div",{className:c.cartContent,children:[t.jsx("img",{className:c.icon,src:a,alt:s}),t.jsx("p",{className:c.cartContentP,children:s}),t.jsx("p",{className:c.cartContentPS,children:o})]})})}const T="_technologies_1sckq_1",y="_aboutTech_1sckq_10",N="_aboutTechP_1sckq_16",k="_container_1sckq_22",n={technologies:T,aboutTech:y,aboutTechP:N,container:k};function b(){const s=[{src:"./monitor.svg",header:"Frontend",technology:"Next.js, React, Vue.js, sass, tailwindcss, css, HTML, Figma"},{src:"./back-monitor.svg",header:"Backend",technology:"NestJS, Express, DB: PostgreSQL, MongoDB, ORM: prisma"},{src:"./code.svg",header:"Technologies",technology:"TypeScript, JavaScript, git, Docker, Nginx"}],o=`

**Next.js:** Умею создавать серверные и клиентские компоненты, оптимизировать SEO, использовать возможности layout и middleware. 
  

**React:** Обладаю опытом разработки веб-приложений. Есть опыт работы управления состоянием с помощью **Redux** и Context. Для общения с бэкендом использую **TanStack Query**, а также fetch и axios.
  

**Vue.js:** Знаком с основами Vue3 и его экосистемой, включая **Vue Router**, **Pinia** и **Vuex**. Умею создавать реактивные интерфейсы и использовать компоненты для организации кода.
  

**Вёрстка:** Использую Sass и tailwindcss для организации стилей. Стараюсь писать чистый и понятный HTML, применяю теги согласно семантике, адаптирую под все устройства и браузеры. Владею Pixel Perfect вёрсткой по макетам. Люблю делать анимации с **framer-motion**. Работал с Библиотеками ui компонентов, такими как **Material-UI**.`,a=`
    

**NestJS:** Умею создавать масштабируемые и модульные приложения используя NestJS, применяя его архитектурные принципы (например, модульность). Использую декораторы, такие как @Controller(), @Get(), @Post().
    

**Express:** Умею создавать маршруты для обработки HTTP-запросов, использовать встроенные и собственные middleware.
    

**DB:** Использую ORM для работы с PostgreSQL — **Prisma**, а для mongoDB — **mongoose**.`,r=`
    

**TypeScript:** Умею работать с базовыми типами (number, string, boolean и др.) и сложными типами (array, enum). 
    

**JavaScript:** Применяю современные возможности возможности языка (в их числе стрелочные функции, асинхронность, деструктуризация и др.) 
    

**Git:** Использую git для контроля версий и загрузки кода на github.
    

**Docker и Nginx:** Знаком с базовыми настройками.`,[e,h]=d.useState(0);return t.jsxs("div",{className:n.container,children:[t.jsx("div",{className:n.technologies,children:s.map((i,l)=>t.jsx(S,{src:i.src,header:i.header,technology:i.technology,isActive:l===e,onClick:()=>h(l)},l))}),t.jsxs("div",{className:n.aboutTech,children:[t.jsx("p",{className:n.aboutTechP,children:"Подробнее:"}),t.jsxs(u.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[e===0&&t.jsx(x,{children:o}),e===1&&t.jsx(x,{children:a}),e===2&&t.jsx(x,{children:r})]},e)]})]})}function w(){return t.jsxs("section",{className:m.section,id:"stack",children:[t.jsx(_,{h:"Стек технологий"}),t.jsx(b,{})]})}export{w as default};
//# sourceMappingURL=stack-W1clnER9.js.map
