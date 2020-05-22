(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{21:function(e,t,a){e.exports={imageGalleryItemImage:"imageGalleryItem_imageGalleryItemImage___l5Cv"}},23:function(e,t,a){e.exports={button:"button_button__3_GL1"}},25:function(e,t,a){e.exports={app:"app_app__cewju"}},26:function(e,t,a){e.exports=a(71)},7:function(e,t,a){e.exports={searchbar:"searchBar_searchbar__TXuyM",searchForm:"searchBar_searchForm__37gqM",searchFormButton:"searchBar_searchFormButton__2Ym1u",searchFormButtonLabel:"searchBar_searchFormButtonLabel__crwPT",searchFormInput:"searchBar_searchFormInput__MYwVY"}},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a.n(o),l=a(10),i=a(3),s=a(4),u=a(6),m=a(5),h=a(7),p=a.n(h),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleChange=function(t){e.setState({inputValue:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.inputValue),e.setState({inputValue:""})},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:p.a.searchbar},r.a.createElement("form",{className:p.a.searchForm,onSubmit:this.handleSubmit},r.a.createElement("button",{type:"submit",className:p.a.searchFormButton},r.a.createElement("span",{className:p.a.searchFormButtonLabel},"Search")),r.a.createElement("input",{className:p.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleChange})))}}]),a}(n.Component),d=a(21),f=a.n(d),y=function(e){var t=e.article;return r.a.createElement("div",null,r.a.createElement("img",{src:t.webformatURL,"data-src":t.largeImageURL,alt:"",className:f.a.imageGalleryItemImage}))},b=a(8),v=a.n(b),_=function(e){var t=e.articles,a=e.onGetLargeImageURL;return r.a.createElement("div",null,r.a.createElement("ul",{className:v.a.imageGallery},t.map((function(e){return r.a.createElement("li",{key:e.id,onClick:a,onKeyPress:a,className:v.a.imageGalleryItem,role:"presentation"},r.a.createElement(y,{article:e}))}))))},E=a(22),k=a.n(E);a(52);function I(){return r.a.createElement(k.a,{type:"TailSpin",color:"#00BFFF",height:60,width:60})}var L=a(23),w=a.n(L),S=function(e){var t=e.onClick;return r.a.createElement("button",{type:"button",className:w.a.button,onClick:t},"Load More")},C=a(9),F=a.n(C),R=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).backdropRef=Object(n.createRef)(),e.handleKeyPress=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){e.backdropRef.current&&t.target!==e.backdropRef.current||e.props.onClose()},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.largeImageURL;return r.a.createElement("div",{className:F.a.overlay,ref:this.backdropRef,onClick:this.handleBackdropClick,onKeyPress:this.handleBackdropClick,role:"presentation"},r.a.createElement("div",{className:F.a.modal},r.a.createElement("img",{src:e,alt:""})))}}]),a}(n.Component);var j=function(){return r.a.createElement("div",null,"Woops, something went wrong")},B=a(24),G=a.n(B),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return G.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=15536216-e4eb8c62c44d17c1d18b1e8f9&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},U=a(25),N=a.n(U),M=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={articles:[],loading:!1,error:null,searchQuery:"",page:1,largeImageURL:""},e.scrollTo=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.fetchArticles=function(){var t=e.state,a=t.searchQuery,n=t.page;e.setState({loading:!0}),O(a,n).then((function(t){return e.setState((function(e){return{articles:[].concat(Object(l.a)(e.articles),Object(l.a)(t))}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({loading:!1})}))},e.loadMore=function(){e.setState((function(e){return{page:e.page+1}}));var t=e.state.page;e.setState({page:t+1}),e.fetchArticles()},e.handleSubmit=function(t){e.setState({searchQuery:t,page:1,articles:[]})},e.getlargeImageURL=function(t){e.setState({largeImageURL:t.target.dataset.src})},e.closeModal=function(){return e.setState({largeImageURL:""})},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state.searchQuery;t.searchQuery!==a&&this.fetchArticles(),t.articles.length>12&&this.scrollTo()}},{key:"render",value:function(){var e=this.state,t=e.articles,a=e.loading,n=e.largeImageURL,o=e.error;return r.a.createElement("div",{className:N.a.app},r.a.createElement(g,{onSubmit:this.handleSubmit}),o&&r.a.createElement(j,null),t.length>0&&r.a.createElement(_,{articles:t,largeImageURL:n,onClose:this.closeModal,onGetLargeImageURL:this.getlargeImageURL}),a&&r.a.createElement(I,null),t.length>0&&!a&&r.a.createElement(S,{onClick:this.loadMore}),n&&r.a.createElement(R,{onClose:this.closeModal,largeImageURL:n}))}}]),a}(n.Component);a(70);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root"))},8:function(e,t,a){e.exports={imageGallery:"imageGallery_imageGallery__tezxu",imageGalleryItem:"imageGallery_imageGalleryItem__1f_Ft"}},9:function(e,t,a){e.exports={overlay:"modal_overlay__1kLsr",modal:"modal_modal__1DF1f"}}},[[26,1,2]]]);
//# sourceMappingURL=main.1663db7a.chunk.js.map