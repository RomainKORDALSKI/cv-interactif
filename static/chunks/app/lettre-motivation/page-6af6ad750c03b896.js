(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[415],{267:function(e,r,t){Promise.resolve().then(t.bind(t,4396))},4396:function(e,r,t){"use strict";t.d(r,{default:function(){return E}});var s=t(7437),a=t(2265),n=t(4847),i=t(3041),o=t(9345),l=t(3774),c=t(5135),d=t(598),u=t(9202);let m=(0,t(9205).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);var p=t(2381),x=t(9820),f=t(9376),h=t(6606),v=t(1188),g=t(6840),j="Avatar",[b,N]=function(e,r=[]){let t=[],n=()=>{let r=t.map(e=>a.createContext(e));return function(t){let s=t?.[e]||r;return a.useMemo(()=>({[`__scope${e}`]:{...t,[e]:s}}),[t,s])}};return n.scopeName=e,[function(r,n){let i=a.createContext(n),o=t.length;t=[...t,n];let l=r=>{let{scope:t,children:n,...l}=r,c=t?.[e]?.[o]||i,d=a.useMemo(()=>l,Object.values(l));return(0,s.jsx)(c.Provider,{value:d,children:n})};return l.displayName=r+"Provider",[l,function(t,s){let l=s?.[e]?.[o]||i,c=a.useContext(l);if(c)return c;if(void 0!==n)return n;throw Error(`\`${t}\` must be used within \`${r}\``)}]},function(...e){let r=e[0];if(1===e.length)return r;let t=()=>{let t=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let s=t.reduce((r,{useScope:t,scopeName:s})=>{let a=t(e)[`__scope${s}`];return{...r,...a}},{});return a.useMemo(()=>({[`__scope${r.scopeName}`]:s}),[s])}};return t.scopeName=r.scopeName,t}(n,...r)]}(j),[w,y]=b(j),k=a.forwardRef((e,r)=>{let{__scopeAvatar:t,...n}=e,[i,o]=a.useState("idle");return(0,s.jsx)(w,{scope:t,imageLoadingStatus:i,onImageLoadingStatusChange:o,children:(0,s.jsx)(g.WV.span,{...n,ref:r})})});k.displayName=j;var q="AvatarImage",C=a.forwardRef((e,r)=>{let{__scopeAvatar:t,src:n,onLoadingStatusChange:i=()=>{},...o}=e,l=y(q,t),c=function(e,r){let[t,s]=a.useState("idle");return(0,v.b)(()=>{if(!e){s("error");return}let t=!0,a=new window.Image,n=e=>()=>{t&&s(e)};return s("loading"),a.onload=n("loaded"),a.onerror=n("error"),a.src=e,r&&(a.referrerPolicy=r),()=>{t=!1}},[e,r]),t}(n,o.referrerPolicy),d=(0,h.W)(e=>{i(e),l.onImageLoadingStatusChange(e)});return(0,v.b)(()=>{"idle"!==c&&d(c)},[c,d]),"loaded"===c?(0,s.jsx)(g.WV.img,{...o,ref:r,src:n}):null});C.displayName=q;var S="AvatarFallback",R=a.forwardRef((e,r)=>{let{__scopeAvatar:t,delayMs:n,...i}=e,o=y(S,t),[l,c]=a.useState(void 0===n);return a.useEffect(()=>{if(void 0!==n){let e=window.setTimeout(()=>c(!0),n);return()=>window.clearTimeout(e)}},[n]),l&&"loaded"!==o.imageLoadingStatus?(0,s.jsx)(g.WV.span,{...i,ref:r}):null});R.displayName=S;var M=t(3448);let _=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(k,{ref:r,className:(0,M.cn)("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",t),...a})});_.displayName=k.displayName;let A=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(C,{ref:r,className:(0,M.cn)("aspect-square h-full w-full",t),...a})});A.displayName=C.displayName;let L=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)(R,{ref:r,className:(0,M.cn)("flex h-full w-full items-center justify-center rounded-full bg-muted",t),...a})});L.displayName=R.displayName;let Z=[{name:"Alice Dubois",role:"Chef de projet",content:"Romain est un d\xe9veloppeur talentueux et passionn\xe9. Son travail est toujours de haute qualit\xe9.",avatar:"/avatars/alice.jpg"},{name:"Thomas Martin",role:"Designer UX",content:"Collaborer avec Romain a \xe9t\xe9 un vrai plaisir. Il comprend parfaitement les besoins des designers.",avatar:"/avatars/thomas.jpg"},{name:"Sophie Lefebvre",role:"D\xe9veloppeuse senior",content:"Romain apprend vite et s'adapte facilement aux nouvelles technologies. Un vrai atout pour l'\xe9quipe.",avatar:"/avatars/sophie.jpg"}];var z=()=>(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:Z.map((e,r)=>(0,s.jsx)(n.E.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5,delay:.2*r},children:(0,s.jsx)(x.Zb,{className:"bg-gray-800/50 backdrop-blur-sm border-none",children:(0,s.jsxs)(x.aY,{className:"p-6",children:[(0,s.jsxs)("div",{className:"flex items-center mb-4",children:[(0,s.jsxs)(_,{className:"h-10 w-10 mr-4",children:[(0,s.jsx)(A,{src:e.avatar,alt:e.name}),(0,s.jsx)(L,{children:e.name[0]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-lg font-semibold text-white",children:e.name}),(0,s.jsx)("p",{className:"text-sm text-gray-300",children:e.role})]})]}),(0,s.jsx)("p",{className:"text-gray-200",children:e.content})]})})},e.name))});function E(){let e=(0,f.useRouter)();return(0,s.jsx)("div",{className:"min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white p-4 sm:p-8",children:(0,s.jsxs)(n.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},className:"max-w-4xl mx-auto",children:[(0,s.jsxs)(x.Zb,{className:"bg-gray-900/80 backdrop-blur-lg text-white border-none shadow-xl overflow-hidden mb-8",children:[(0,s.jsxs)(x.Ol,{className:"relative p-6 sm:p-8 border-b border-gray-700",children:[(0,s.jsxs)("div",{className:"flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(x.ll,{className:"text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600",children:"Romain KORDALSKI"}),(0,s.jsx)("p",{className:"text-2xl font-semibold mt-2 text-gray-300",children:"D\xe9veloppeur Web"})]}),(0,s.jsxs)("div",{className:"flex flex-col items-end gap-2",children:[(0,s.jsxs)("a",{href:"tel:+33632381379",className:"flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors",children:[(0,s.jsx)(i.Z,{className:"h-4 w-4"}),"06-32-38-13-79"]}),(0,s.jsxs)("a",{href:"mailto:romain.kordalski@gmail.com",className:"flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors",children:[(0,s.jsx)(o.Z,{className:"h-4 w-4"}),"romain.kordalski@gmail.com"]}),(0,s.jsxs)("span",{className:"flex items-center gap-2 text-sm text-gray-300",children:[(0,s.jsx)(l.Z,{className:"h-4 w-4"}),"Lille"]})]})]}),(0,s.jsxs)("div",{className:"flex justify-center sm:justify-start gap-4 mt-4",children:[(0,s.jsx)(p.z,{variant:"outline",asChild:!0,className:"bg-gray-800/50 backdrop-blur-sm text-white hover:bg-gray-700/70 transition-all duration-300",children:(0,s.jsxs)("a",{href:"https://github.com/RomainKORDALSKI",target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsx)(c.Z,{className:"mr-2 h-4 w-4"})," GitHub"]})}),(0,s.jsx)(p.z,{variant:"outline",asChild:!0,className:"bg-gray-800/50 backdrop-blur-sm text-white hover:bg-gray-700/70 transition-all duration-300",children:(0,s.jsxs)("a",{href:"https://linkedin.com/in/romain-kordalski/",target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsx)(d.Z,{className:"mr-2 h-4 w-4"})," LinkedIn"]})}),(0,s.jsx)(p.z,{variant:"outline",asChild:!0,className:"bg-gray-800/50 backdrop-blur-sm text-white hover:bg-gray-700/70 transition-all duration-300",children:(0,s.jsxs)("a",{href:"https://romainkordalski.vercel.app",target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsx)(u.Z,{className:"mr-2 h-4 w-4"})," Portfolio"]})})]})]}),(0,s.jsx)(x.aY,{className:"p-6 sm:p-8",children:(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsx)("p",{className:"text-lg font-bold  bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600",children:"Madame, Monsieur,"}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl mb-2 font-bold  bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600",children:"Vous d\xe9sirez int\xe9grer un d\xe9veloppeur web au top ?"}),(0,s.jsx)("p",{children:"Alors, je vous pr\xe9sente ma candidature pour un poste de d\xe9veloppeur web, en full stack, back-end ou front-end."})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600",children:"Pourquoi je suis d\xe9veloppeur web ?"}),(0,s.jsxs)("p",{children:["Apr\xe8s une"," ",(0,s.jsx)("span",{className:"font-bold",children:"reconversion professionnelle soigneusement r\xe9fl\xe9chie"}),", j'ai r\xe9cemment achev\xe9 une formation intensive \xe0 l'\xe9cole O'Clock. Avant cela, mon parcours professionnel a \xe9t\xe9 vari\xe9, ax\xe9 sur des m\xe9tiers choisis pour leur aspect pratique plut\xf4t que par passion. Cependant, je n'ai jamais abandonn\xe9 mon"," ",(0,s.jsx)("span",{className:"font-bold",children:"r\xeave de coder"}),", r\xeave qui m'anime depuis l'\xe2ge de 14 ans, lorsque j'ai d\xe9couvert la programmation \xe0 travers les tutoriels du \"Site du Z\xe9ro\". Avec le temps et les al\xe9as de la vie, j'ai d\xfb mettre ce projet de c\xf4t\xe9, mais aujourd'hui, \xe0 31 ans, j'ai pris la"," ",(0,s.jsx)("span",{className:"font-bold",children:"d\xe9cision de me consacrer pleinement \xe0 ce que j'aime"}),"."]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600",children:"Mon exp\xe9rience en tant que d\xe9veloppeur web ?"}),(0,s.jsxs)("p",{children:["Pendant cette formation, j'ai acquis des"," ",(0,s.jsx)("span",{className:"font-bold",children:"comp\xe9tences solides en d\xe9veloppement web"})," ","et ma\xeetris\xe9 plusieurs technologies modernes. Actuellement en immersion en entreprise, je me perfectionne sur le framework Nuxt.js (Vue.js), avec une sp\xe9cialisation plut\xf4t orient\xe9e front-end, pour le moment."]}),(0,s.jsxs)("p",{className:"mt-2",children:["En termes de comp\xe9tences techniques, voici les technologies avec lesquelles je suis \xe0 l'aise (acquises en formation) :"," ",(0,s.jsx)("span",{className:"font-bold",children:"HTML, CSS, Node.js (Express), React, Git, SQL (PostgreSQL), NoSQL (MongoDB), ainsi que l'ORM Sequelize"}),"."]}),(0,s.jsxs)("p",{className:"mt-2",children:["En compl\xe9ment, je me suis form\xe9 de mani\xe8re autonome \xe0"," ",(0,s.jsx)("span",{className:"font-bold",children:"Next.js, Nuxt.js (Vue.js), Sass (SCSS), et Tailwind CSS"}),"."]}),(0,s.jsxs)("p",{className:"mt-2",children:["J'ai \xe9galement une bonne ma\xeetrise des outils collaboratifs tels que"," ",(0,s.jsx)("span",{className:"font-bold",children:"Notion, Figma, GitHub et Slack"}),", ce qui me permet de travailler de mani\xe8re fluide au sein d'une \xe9quipe."]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600",children:"Mes r\xe9alisations ?"}),(0,s.jsxs)("p",{children:["J'ai \xe9galement travaill\xe9 sur"," ",(0,s.jsx)("span",{className:"font-bold",children:"plusieurs projets parall\xe8les"})," ","pendant ma formation, projets que vous pouvez d\xe9couvrir sur mon portfolio, et je veille activement \xe0 me tenir inform\xe9 des nouvelles tendances technologiques pour rester \xe0 jour dans un domaine en constante \xe9volution."]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600",children:"Mon objectif pour r\xe9pondre \xe0 vos objectifs ?"}),(0,s.jsxs)("p",{children:["J'ai opt\xe9 pour un parcours en transition professionnelle, ce qui me permet de conserver la s\xe9curit\xe9 du CDI sur un tout autre m\xe9tier qui ne correspond pas \xe0 mes aspirations. Mon objectif c'est donc de pouvoir"," ",(0,s.jsx)("span",{className:"font-bold",children:"transformer cette formation / opportunit\xe9 en r\xe9el tremplin pour moi mais aussi pour votre entreprise"})," ","qui saura compter sur ma d\xe9termination et ma motivation \xe0 toute \xe9preuve !"]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600",children:"Pourquoi moi ?"}),(0,s.jsxs)("p",{children:["Mon"," ",(0,s.jsx)("span",{className:"font-bold",children:"parcours atypique me pousse \xe0 m'investir davantage"}),". Je suis extr\xeamement motiv\xe9, conscient que je dois encore acqu\xe9rir de l'exp\xe9rience pour exceller. Je suis avant tout en qu\xeate d'opportunit\xe9s pour enrichir mes comp\xe9tences et m'inscrire durablement dans ce monde qui me correspond parfaitement."]})]}),(0,s.jsx)("p",{className:"font-bold",children:"Convaincu(e) ?! Je reste \xe0 votre enti\xe8re disposition pour en \xe9changer de vive voix et vous assurer que je suis la personne dont vous avez besoin !"})]})})]}),(0,s.jsx)(x.Zb,{className:"bg-gray-900/80 backdrop-blur-lg border-none shadow-xl",children:(0,s.jsx)(x.aY,{className:"p-6",children:(0,s.jsx)(z,{})})}),(0,s.jsx)("div",{className:"flex justify-start mt-4",children:(0,s.jsxs)(p.z,{onClick:()=>e.push("/cv"),className:"bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white transition-all duration-300 transform hover:scale-105",children:[(0,s.jsx)(m,{className:"mr-2 h-4 w-4"})," Retour au CV"]})})]})})}},2381:function(e,r,t){"use strict";t.d(r,{z:function(){return c}});var s=t(7437),a=t(2265),n=t(7053),i=t(7712),o=t(3448);let l=(0,i.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),c=a.forwardRef((e,r)=>{let{className:t,variant:a,size:i,asChild:c=!1,...d}=e,u=c?n.g7:"button";return(0,s.jsx)(u,{className:(0,o.cn)(l({variant:a,size:i,className:t})),ref:r,...d})});c.displayName="Button"},9820:function(e,r,t){"use strict";t.d(r,{Ol:function(){return o},SZ:function(){return c},Zb:function(){return i},aY:function(){return d},ll:function(){return l}});var s=t(7437),a=t(2265),n=t(3448);let i=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",t),...a})});i.displayName="Card";let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",t),...a})});o.displayName="CardHeader";let l=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("h3",{ref:r,className:(0,n.cn)("font-semibold leading-none tracking-tight",t),...a})});l.displayName="CardTitle";let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("p",{ref:r,className:(0,n.cn)("text-sm text-muted-foreground",t),...a})});c.displayName="CardDescription";let d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,n.cn)("p-6 pt-0",t),...a})});d.displayName="CardContent",a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,s.jsx)("div",{ref:r,className:(0,n.cn)("flex items-center p-6 pt-0",t),...a})}).displayName="CardFooter"},3448:function(e,r,t){"use strict";t.d(r,{cn:function(){return n}});var s=t(1994),a=t(3335);function n(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.m6)((0,s.W)(r))}}},function(e){e.O(0,[862,971,117,744],function(){return e(e.s=267)}),_N_E=e.O()}]);