(this.webpackJsonphireandragh=this.webpackJsonphireandragh||[]).push([[0],{29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),r=n.n(s),c=n(4),o=n.n(c),l=n(7),i=n(3),d=n(16),u=n(17),h=(n(29),n(18)),b=function(e){var t=e.img,n=e.name,s=e.region,r=e.capital,c=e.languages,o=e.population;return Object(a.jsxs)("div",{className:"tc pa3 br3 grow shadow-3 tl w-100",style:{boxShadow:"0 0 1rem 0 rgba(0, 0, 0, .2)",backgroundColor:"rgba(255, 255, 255, .15)",backdropFilter:"blur(5px)"},children:[Object(a.jsx)("img",{className:"h4 w5 dib ba b--black-05 pa2",alt:"flag",src:t}),Object(a.jsx)("h2",{className:"tc",children:n}),Object(a.jsx)("hr",{className:"mw3 bb bw1 b--black-10"}),Object(a.jsxs)("h3",{children:["Region: ",s]}),Object(a.jsxs)("h3",{children:["Capital: ",r]}),Object(a.jsxs)("p",{children:["Languages: ",c]}),Object(a.jsxs)("p",{children:["Population: ",o," people"]})]})},j=function(e){return e.countries.map((function(e,t){var n=e.languages.map((function(e){return" "+e.name})).toString();return console.log("languages",n),Object(a.jsx)("div",{className:"pa3 mr2",children:Object(a.jsx)(b,{img:e.flag,name:e.name,region:e.region,capital:0===e.capital.length?"N/A":e.capital,languages:n,population:e.population})},t)}))},p=function(e){var t=e.onValueEntered,n=e.value;return Object(a.jsx)("div",{className:"tc pa3",children:Object(a.jsx)("input",{className:"ba tc br3 pa3",style:{width:"300px"},type:"text",placeholder:"Enter a country name to see info",onChange:t,value:n})})},m=n(5),g=n(6),f=n(9),y=n(8),O=function(e){Object(f.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleClickPlay=function(){var e=a.props.topic;a.state.play?a.setState({play:!1,buttonPlayValue:"Guess the ".concat(e)}):a.setState({play:!0,buttonPlayValue:"Close 'Guess the ".concat(e,"'")})},a.handleKeyDown=function(e){"Enter"!==e.key&&13!==e.keyCode||(a.setState({guessEntered:!0,readOnly:!0,disabled:!0}),a.sendComponentScore())},a.handleOkButton=function(e){a.setState({guessEntered:!0,readOnly:!0,disabled:!0}),a.sendComponentScore()},a.onGuessEntered=function(e){a.setState({guess:e.target.value})},a.wrongGuess=function(){a.setState({guessEntered:!1,guess:""})},a.newCountry=function(e){a.setState({guessEntered:!1,guess:"",readOnly:!1,disabled:!1,randomElement:e[Math.floor(Math.random()*e.length)]})},a.sendComponentScore=function(){a.state.guess.toLowerCase()===a.state.randomElement[a.props.topic].toLowerCase()?a.props.addScore(!0):a.props.addScore(!1)},a.state={randomElement:"",play:!1,guess:"",guessEntered:!1,buttonPlayValue:"",readOnly:!1,disabled:!1},a}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.countries,n=e.topic;this.setState({randomElement:t[Math.floor(Math.random()*t.length)],buttonPlayValue:"Guess the ".concat(n)})}},{key:"render",value:function(){var e=this,t=this.props,n=t.countries,s=t.topic,r=this.state,c=r.randomElement,o=r.play,l=r.guess,i=r.guessEntered,d=r.buttonPlayValue,u=r.readOnly,h=r.disabled;return Object(a.jsxs)("div",{className:"tc mv3",children:[Object(a.jsx)("button",{className:"f3 link dim br-pill ph3 pv3 mb2 dib shadow-3",style:{borderStyle:"none",backgroundColor:"#a8eb12",width:"300px"},onClick:this.handleClickPlay,children:d}),o?Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"flex justify-center flex-column",children:Object(a.jsxs)("h2",{className:"f3 tc mt2 mb3",children:[Object(a.jsx)("span",{className:"ttc",children:s})," of ",Object(a.jsx)("span",{className:"underline",children:c.name}),"?"]})}),Object(a.jsx)("input",{className:"ba tc br-pill pa3",style:{width:"300px"},type:"text",placeholder:"Write your answer here",onChange:this.onGuessEntered,onKeyDown:this.handleKeyDown,value:l,readOnly:u,disabled:h}),Object(a.jsx)("button",{className:"b tc ml2 br-pill pa3 bg-light-green shadow-3 self-center",style:{borderStyle:"none",backgroundColor:"#00bf72"},onClick:function(){return e.handleOkButton()},disabled:h,children:"OK"}),Object(a.jsx)("button",{className:"b ba br-pill shadow-3 tc mt3 ml3 pa3 white self-center",style:{borderStyle:"none",backgroundColor:"#008793"},onClick:function(){return e.newCountry(n)},children:"Don't know. Change country"}),i?l.toLowerCase()===c[s].toLowerCase()?Object(a.jsxs)("div",{className:"flex justify-center flex-column",children:[Object(a.jsx)("h2",{className:"b mt3 mb2",children:"BRAVO! That's right!"}),Object(a.jsx)("button",{className:"b ba br-pill shadow-3 tc mv3 pa3 white bg-navy self-center",style:{borderStyle:"none"},onClick:function(){e.newCountry(n)},children:"Play again"})]}):Object(a.jsxs)("div",{className:"flex justify-center flex-column",children:[Object(a.jsx)("h2",{className:"b mt3 mb2",children:"Keep trying!"}),Object(a.jsxs)("h3",{className:"mt1 mb3",children:["The ",s," of ",c.name," is ",c[s],"!"]}),Object(a.jsx)("button",{className:"b a br-pill shadow-3 tc mb3 pa3 white bg-navy self-center",onClick:function(){return e.newCountry(n)},children:"Play again!"})]}):Object(a.jsx)("div",{children:" "})]}):Object(a.jsx)("div",{})]})}}]),n}(s.Component),x=function(e){Object(f.a)(n,e);var t=Object(y.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleClickPlay=function(e){a.state.play?a.setState({play:!1,buttonPlayValue:"Guess the Flag"}):a.setState({play:!0,randomElement:e[Math.floor(Math.random()*e.length)],buttonPlayValue:"Close 'Guess the Flag'"})},a.newPick=function(e){a.setState({play:!0,randomElement:e[Math.floor(Math.random()*e.length)],disabled:!1})},a.handleMouseClick=function(e){a.setState({guess:e}),a.sendComponentScore(e.flag)},a.picturesDisplay=function(e){var t=[];t[0]=e[Math.floor(Math.random()*e.length)],e.forEach((function(e){e!==t[0]&&(t[1]=e)})),e.forEach((function(e){e!==t[0]&&e!==t[1]&&(t[2]=e)})),a.setState({flagsDisplay:t})},a.wrongAnswer=function(){a.setState({guess:"",disabled:!1})},a.playAgain=function(e){a.setState({randomArrayOf3:[e[Math.floor(Math.random()*e.length)],e[Math.floor(Math.random()*e.length)],e[Math.floor(Math.random()*e.length)]],guess:"",disabled:!1})},a.sendComponentScore=function(e){console.log("flag co",e,a.state.randomElement.flag),a.setState({disabled:!0}),e===a.state.randomElement.flag?a.props.addScore(!0):a.props.addScore(!1)},a.state={randomArrayOf3:[],randomElement:"",play:!1,guess:"",flagsDisplay:[],guessEntered:!1,buttonPlayValue:"",disabled:!1},a}return Object(g.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.countries;this.setState({randomArrayOf3:[e[Math.floor(Math.random()*e.length)],e[Math.floor(Math.random()*e.length)],e[Math.floor(Math.random()*e.length)]],buttonPlayValue:"Guess the Flag"})}},{key:"render",value:function(){var e=this,t=this.props.countries,n=this.state,s=n.randomElement,r=n.play,c=n.guess,o=n.randomArrayOf3,l=n.flagsDisplay,i=n.buttonPlayValue,d=n.disabled;return console.log("random of array 3:",o),Object(a.jsxs)("div",{className:"tc mv3",children:[Object(a.jsx)("button",{className:"link dim br-pill ph3 pv3 mb2 dib shadow-3",style:{fontSize:"1.5em",borderStyle:"none",backgroundColor:"#a8eb12",width:"300px"},onClick:function(){e.handleClickPlay(o),e.picturesDisplay(o)},children:i}),r?Object(a.jsxs)("div",{children:[Object(a.jsxs)("h2",{className:"f3 tc mv2",children:["Flag of ",Object(a.jsxs)("span",{className:"underline",children:[s.name,"?"]})]}),Object(a.jsxs)("div",{className:"pa3",children:[Object(a.jsx)("button",{className:"ba tc mv1 mh1 pa3 ph3 mid-gray",style:{backgroundImage:"url(".concat(l[0].flag,")"),backgroundSize:"cover",backgroundPosition:"center",display:"inline-block",width:"200px",color:"rgba(0, 0, 0, 0)",fontSize:"3em"},onClick:function(){return e.handleMouseClick(l[0])},disabled:d,children:"Flag"}),Object(a.jsx)("button",{className:"ba tc mv1 mh2 pa3 ph3 mid-gray",style:{backgroundImage:"url(".concat(l[1].flag,")"),backgroundSize:"cover",backgroundPosition:"center",display:"inline-block",width:"200px",color:"rgba(0, 0, 0, 0)",fontSize:"3em"},onClick:function(){return e.handleMouseClick(l[1])},disabled:d,children:"Flag"}),Object(a.jsx)("button",{className:"ba tc mv1 mh1 pa3 ph3 mid-gray",style:{backgroundImage:"url(".concat(l[2].flag,")"),backgroundSize:"cover",backgroundPosition:"center",display:"inline-block",width:"200px",color:"rgba(0, 0, 0, 0)",fontSize:"3em"},onClick:function(){return e.handleMouseClick(l[2])},disabled:d,children:"Flag"}),Object(a.jsx)("div",{children:Object(a.jsx)("button",{className:"b ba br-pill shadow-3 tc mt3 pa3 white self-center",style:{borderStyle:"none",backgroundColor:"#008793"},onClick:function(){e.playAgain(t),e.newPick(o),e.picturesDisplay(o)},children:"Don't know. Reload"})})]}),c?c.flag===s.flag?Object(a.jsxs)("div",{className:"flex justify-center flex-column",children:[Object(a.jsx)("h2",{className:"f3 b mv2",children:"BRAVO! That's right!"}),Object(a.jsx)("button",{className:"b ba br-pill shadow-3 tc mt3 pa3 white bg-navy self-center",onClick:function(){e.playAgain(t),e.newPick(o),e.picturesDisplay(o)},children:"Play Again"})]}):Object(a.jsxs)("div",{className:"flex justify-center flex-column",children:[Object(a.jsxs)("h2",{className:"b f3 b mv2",children:["Keep trying! That's the flag of ",Object(a.jsxs)("span",{className:"underline",children:[c.name,"!"]})]}),Object(a.jsx)("button",{className:"b ba br-pill shadow-3 tc mv3 pa3 white bg-navy self-center",onClick:this.wrongAnswer,children:"Try Again"})]}):Object(a.jsx)("div",{})]}):Object(a.jsx)("div",{})]})}}]),n}(s.Component),C=n.p+"static/media/github.d1bb13ce.svg",v=n.p+"static/media/fb.d1e12fbb.png",w=n.p+"static/media/insta.9094474d.png",k=n.p+"static/media/twitter.a429d008.png",S=(n(30),"CHANGE_SEARCH_FIELD"),N="PLAY",E="SHOW_CARDS",P="GENERAL_SCORE",M="REQUEST_COUNTRIES_PENDING",A="REQUEST_COUNTRIES_SUCCESS",D="REQUEST_COUNTRIES_FAILED";var B=Object(l.b)((function(e){return{searchedCountry:e.searchCountries.searchedCountry,play:e.searchCountries.play,playButton:e.searchCountries.playButton,showCards:e.searchCountries.showCards,showCardsButton:e.searchCountries.showCardsButton,countries:e.requestCountries.countries,isPending:e.requestCountries.isPending,error:e.requestCountries.error}}),(function(e){return{onValueEntered:function(t){return e((n=t.target.value,{type:S,payload:n}));var n},handlePlayButton:function(){var t;e({type:N,payload:t})},handleShowCards:function(){var t;e({type:E,payload:t})},onRequestCountries:function(){return e((function(e){e({type:M}),fetch("https://restcountries.eu/rest/v2/all").then((function(e){return e.json()})).then((function(t){return e({type:A,payload:t})})).catch((function(t){return e({type:D,payload:t})}))}))}}}))((function(e){var t=e.countries,n=e.searchedCountry,r=e.play,c=e.playButton,o=e.showCards,l=e.showCardsButton,i=e.onValueEntered,d=e.handlePlayButton,u=e.handleShowCards,b=Object(s.useState)(0),m=Object(h.a)(b,2),g=m[0],f=m[1];Object(s.useEffect)((function(){e.onRequestCountries()}),[]);var y=function(e){e&&f(g+1)},S=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(a.jsxs)("div",{className:"tc",children:[Object(a.jsx)("h1",{className:"tc",children:"Know your Countries"}),Object(a.jsxs)("h2",{children:["Your score: ",g]}),Object(a.jsx)("button",{className:"f2 br-pill ph4 pv3 mv3 dib shadow-3 grow",style:{backgroundColor:"#051937",color:"#ffffff",borderStyle:"none"},onClick:d,children:c}),r?Object(a.jsxs)("div",{children:[Object(a.jsx)(O,{countries:t,topic:Object.keys(t[0])[5],addScore:y}),Object(a.jsx)(O,{countries:t,topic:Object.keys(t[0])[7],addScore:y}),Object(a.jsx)(x,{countries:t,addScore:y}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"f3 link grow br-pill ph4 pv3 mv2 dib shadow-3",style:{backgroundColor:"#004d7a",color:"#ffffff",borderStyle:"none"},onClick:u,children:l}),o?Object(a.jsxs)("div",{children:[Object(a.jsx)(p,{onValueEntered:i,value:n}),Object(a.jsx)("div",{className:"flex justify-center flex-wrap",children:Object(a.jsx)(j,{countries:S})})]}):Object(a.jsx)("div",{})]})]}):Object(a.jsx)("div",{}),Object(a.jsx)("footer",{children:Object(a.jsxs)("div",{className:"flex justify-center items-end mt4",children:[Object(a.jsx)("div",{className:"ph2",children:Object(a.jsx)("a",{href:"https://www.github.com/andragh83/",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{height:"30px",src:C,alt:"github",style:{margin:"10px auto"}})})}),Object(a.jsx)("div",{className:"ph2",children:Object(a.jsx)("a",{href:"https://www.facebook.com/andraghstudio/",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{height:"30px",src:v,alt:"facebook",style:{margin:"10px auto"}})})}),Object(a.jsx)("div",{className:"ph2",children:Object(a.jsx)("a",{href:"https://twitter.com/andraghitulescu",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{height:"30px",src:k,alt:"facebook",style:{margin:"10px auto"}})})}),Object(a.jsx)("div",{className:"ph2",children:Object(a.jsx)("a",{href:"https://www.instagram.com/andragh83/",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{height:"30px",src:w,alt:"instagram",style:{margin:"10px auto"}})})})]})})]})})),L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))},R=(n(31),n(2)),V={searchedCountry:"",play:!1,playButton:"PLAY",showCards:!1,showCardsButton:"SHOW COUNTRIES",generalScore:0},F={isPending:!1,countries:[],error:""},T=Object(d.createLogger)(),_=Object(i.c)({searchCountries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case S:return Object(R.a)(Object(R.a)({},e),{},{searchedCountry:t.payload});case N:return Object(R.a)(Object(R.a)({},e),{},{play:!e.play,playButton:e.play?"PLAY":"CLOSE"});case E:return Object(R.a)(Object(R.a)({},e),{},{showCards:!e.showCards,showCardsButton:e.showCards?"Show Countries":"Hide Countries"});case P:return Object(R.a)(Object(R.a)({},e),{},{generalScore:e.generalScore++});default:return e}},requestCountries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case M:return Object(R.a)(Object(R.a)({},e),{},{isPending:!0});case A:return Object(R.a)(Object(R.a)({},e),{},{countries:t.payload,isPending:!1});case D:return Object(R.a)(Object(R.a)({},e),{},{error:t.payload,isPending:!1});default:return e}}}),G=Object(i.d)(_,Object(i.a)(u.a,T));o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l.a,{store:G,children:Object(a.jsx)(B,{})})}),document.getElementById("root")),L()}},[[32,1,2]]]);
//# sourceMappingURL=main.9c2e3328.chunk.js.map