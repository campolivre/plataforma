(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"2c16":function(t,e,o){"use strict";o("babd")},babd:function(t,e,o){},dffd:function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"main-filter-params-modal",class:{"filter-fade-in":t.showFilterBox,"filter-fade-out":!t.showFilterBox}},[o("div",{staticClass:"main-filter-params-box"},[o("div",[o("i",{staticClass:"fas fa-times",on:{click:function(e){return t.toggleFilterBox()}}}),t._v(" Filtros")]),o("div",[o("div",[o("div",[t._v("Preço")]),o("div",t._l(t.listButtonsPrice,(function(e,i){return o("button",{key:i,class:e.buttonPriceStyle,on:{click:function(e){return t.activateButtonPrice(i)}}},[t._v(t._s(e.buttonPriceText))])})),0)]),o("div",[o("div",[t._v("Transporte")]),o("div",t._l(t.listButtonsTransportation,(function(e,i){return o("button",{key:i,class:e.buttonTransportationStyle,on:{click:function(e){return t.activateButtonTransportation(i)}}},[t._v(t._s(e.buttonTransportationText))])})),0)]),o("div",[o("div",[t._v("Produto Orgânico?")]),o("div",t._l(t.listButtonsOrganic,(function(e,i){return o("button",{key:i,class:e.buttonOrganicStyle,on:{click:function(e){return t.activateButtonOrganic(i)}}},[t._v(t._s(e.buttonOrganicText))])})),0)]),o("div",[o("div",[t._v("Produto Transformado?")]),o("div",t._l(t.listButtonsTransformed,(function(e,i){return o("button",{key:i,class:e.buttonTransformedStyle,on:{click:function(e){return t.activateButtonTransformed(i)}}},[t._v(t._s(e.buttonTransformedText))])})),0)]),o("div",[o("div",[t._v("Tipo de Medida")]),o("div",t._l(t.listButtonsMeasure,(function(e,i){return o("button",{key:i,class:e.buttonMeasureStyle,on:{click:function(e){return t.activateButtonMeasure(i)}}},[t._v(t._s(e.buttonMeasureText))])})),0)]),o("div",[o("div",[t._v("Volume")]),o("div",t._l(t.listButtonsVolume,(function(e,i){return o("button",{key:i,class:e.buttonVolumeStyle,on:{click:function(e){return t.activateButtonVolume(i)}}},[t._v(t._s(e.buttonVolumeText))])})),0)]),o("div",[o("div",[t._v("Disponibilidade")]),o("div",t._l(t.listButtonsAvailability,(function(e,i){return o("button",{key:i,class:e.buttonAvailabilityStyle,on:{click:function(e){return t.activateButtonAvailability(i)}}},[t._v(t._s(e.buttonAvailabilityText))])})),0)])]),o("div",[t._m(0),o("div",[o("button",{staticClass:"btn-filter-box btn-color-green",on:{click:function(e){return t.toggleFilterBox()}}},[t._v("Aplicar Filtros")])])])])]),o("div",{staticClass:"main-filter-page"},[o("NavBar"),o("div",{staticClass:"main-filter-body"},[o("div",{staticClass:"filter-content"},[o("div",{staticClass:"filter-content-header"},[t._m(1),o("div",[o("button",{staticClass:"btn-filter",on:{click:function(e){return t.toggleFilterBox()}}},[o("i",{staticClass:"fas fa-sliders-h"}),t._v(" Filtrar")])])]),o("span",{staticClass:"filter-breadcrumbs"},[o("router-link",{attrs:{to:"#"}},[t._v("Início")]),o("span",{staticClass:"filter-breadcrumbs-separator"},[t._v(">")]),o("router-link",{attrs:{to:"#"}},[t._v("Rio Claro / SP")])],1),o("div",{staticClass:"filter-content-ordering"},[o("p",[t._v(t._s(t.offers.length)+" ofertas encontradas com esses parâmetros")]),t._m(2)]),o("div",{staticClass:"filter-content-tags-area"},t._l(t.tags,(function(e,i){return o("div",{directives:[{name:"show",rawName:"v-show",value:e.tagShow,expression:"tag.tagShow"}],key:i,staticClass:"filter-content-tags"},[o("span",[t._v(t._s(e.tagText))]),o("span",{on:{click:function(e){return t.clearTag(i)}}},[t._v("X")])])})),0),o("div",{staticClass:"filter-content-offers-area"},[o("div",{staticClass:"filter-content-offers"},t._l(t.offers,(function(t){return o("CardOffer",{key:t.id,attrs:{offer:t}})})),1),o("div",{staticClass:"filter-content-offers-message",style:{"margin-top":t.marginFooter}},[o("h2",[t._v("Não encontrou o que queria? :/")]),o("p",[t._v("Não se preocupe! Todos os dias novas ofertas são cadastradas no sistema e você pode receber novas ofertas por email.")]),t._m(3)]),t._m(4),o("div",[o("MainFooter")],1)])]),t._m(5)])],1)])},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("button",{staticClass:"btn-filter-box btn-color-white"},[t._v("Limpar Filtros")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",[t._v("Ofertas de legumes em "),o("br"),o("span",{staticClass:"city-highlight"},[t._v("Rio Claro / SP")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"group-filter-price"},[o("select",{staticClass:"form-filter-price",attrs:{name:"slcPrice",id:"slcPrice",form:"filterOffers",placeholder:"Escolha o preço"}},[o("option",{attrs:{value:"preco-1"}},[t._v("Mais relevantes")]),o("option",{attrs:{value:"preco-1"}},[t._v("Mais recentes")]),o("option",{attrs:{value:"preco-2"}},[t._v("Menor custo total")]),o("option",{attrs:{value:"preco-3"}},[t._v("Melhor classificação")])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("button",{staticClass:"btn-filter-box btn-color-green"},[t._v("Avise-me")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"filter-content-no-offers"},[o("div",[o("i",{staticClass:"fas fa-search"})]),o("p",[t._v("Ops! Nenhuma oferta encontrada com esses parâmetros de filtro.")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"filter-map"},[o("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29404.620921447073!2d-47.085413731897795!3d-22.892056526055768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c61de74b6325%3A0x17e53a6a2178c22a!2sCampinas%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1620311906930!5m2!1spt-BR!2sbr",width:"100%",height:"100%",allowfullscreen:"",loading:"lazy"}})])}],n=o("d000"),r=o("7386"),s=o("34bc"),l={data:function(){return{offers:[{id:1,image:"card-offer-tomato.png",imageAlt:"Imagem de tomates vermelhos na árvore de tomateiro de uma fazenda, prontas para serem colhidas.",category:"LEGUMES",title:"Tomate Caqui",city:"Rio Claro",state:"SP",quantity:"80",transportation:"Próprio",price:"80,00",unity:"Caixa"},{id:2,image:"card-offer-bell-pepper.png",imageAlt:"Imagem de um pimentão verde na mão de uma colhetora na fazenda.",category:"LEGUMES",title:"Pimentão Verde",city:"Bauru",state:"SP",quantity:"180",transportation:"Próprio",price:"120,00",unity:"Caixa"},{id:3,image:"card-offer-carrot.png",imageAlt:"Imagem de um maço de cenouras na mão do agricultor.",category:"LEGUMES",title:"Cenoura",city:"Americana",state:"SP",quantity:"120",transportation:"Sem transporte",price:"55,00",unity:"Caixa"},{id:4,image:"card-offer-courgette.png",imageAlt:"Uma composição de abobrinhas dispostas em formato de pirâmide.",category:"LEGUMES",title:"Abobrinha",city:"Rio Claro",state:"SP",quantity:"80",transportation:"Próprio",price:"40,00",unity:"Caixa"},{id:5,image:"card-offer-cabbage.png",imageAlt:"Quatro folhas de couve manteiga dispostas em um prato de madeira sobre uma mesa azul escura.",category:"VERDURAS",title:"Couve Manteiga",city:"Jacareí",state:"SP",quantity:"80",transportation:"Próprio",price:"40,00",unity:"Caixa"},{id:6,image:"card-offer-lemon.png",imageAlt:"Uma composição de limões sicilianos amontoados com um destaque para um deles aberto pela metade, enaltecendo a qualidade da fruta.",category:"FRUTAS",title:"Limão Siciliano",city:"Bragança Paulista",state:"SP",quantity:"80",transportation:"Próprio",price:"30,00",unity:"Saco"},{id:7,image:"card-offer-cayenne-pepper.png",imageAlt:"Uma bacia de pedra cheia de pimentas caienas que transbordou, e algumas delas estão espalhadas sobre uma mesa cinza.",category:"TEMPEROS",title:"Pimenta Caiena",city:"Atibaia",state:"SP",quantity:"160",transportation:"Próprio",price:"40,00",unity:"Quilo"},{id:8,image:"card-offer-pitaya.png",imageAlt:"Uma pitaya vermelha em um fundo rosa fosco envolvida por um tecido da mesma cor de fundo porém com um tom mais claro.",category:"FRUTAS",title:"Pitaya Importada",city:"Mogi das Cruzes",state:"SP",quantity:"150",transportation:"Próprio",price:"800,00",unity:"Caixa"}],listButtonsPrice:[{buttonPriceId:1,buttonPriceText:"$",buttonPriceStyle:"btn-filter-box btn-color-white"},{buttonPriceId:2,buttonPriceText:"$$",buttonPriceStyle:"btn-filter-box btn-color-white"},{buttonPriceId:3,buttonPriceText:"$$$",buttonPriceStyle:"btn-filter-box btn-color-white"},{buttonPriceId:4,buttonPriceText:"$$$$",buttonPriceStyle:"btn-filter-box btn-color-white"},{buttonPriceId:5,buttonPriceText:"$$$$$",buttonPriceStyle:"btn-filter-box btn-color-white"}],listButtonsTransportation:[{buttonTransportationId:1,buttonTransportationText:"Próprio",buttonTransportationStyle:"btn-filter-box btn-color-white"},{buttonTransportationId:2,buttonTransportationText:"Indiferente",buttonTransportationStyle:"btn-filter-box btn-color-white"}],listButtonsOrganic:[{buttonOrganicId:1,buttonOrganicText:"Sim",buttonOrganicStyle:"btn-filter-box btn-color-white"}],listButtonsTransformed:[{buttonTransformedId:1,buttonTransformedText:"Sim",buttonTransformedStyle:"btn-filter-box btn-color-white"}],listButtonsMeasure:[{buttonMeasureId:1,buttonMeasureText:"Caixas",buttonMeasureStyle:"btn-filter-box btn-color-white"},{buttonMeasureId:1,buttonMeasureText:"Sacos",buttonMeasureStyle:"btn-filter-box btn-color-white"},{buttonMeasureId:1,buttonMeasureText:"Quilos",buttonMeasureStyle:"btn-filter-box btn-color-white"}],listButtonsVolume:[{buttonVolumeId:1,buttonVolumeText:"10+",buttonVolumeStyle:"btn-filter-box btn-color-white"},{buttonVolumeId:1,buttonVolumeText:"25+",buttonVolumeStyle:"btn-filter-box btn-color-white"},{buttonVolumeId:1,buttonVolumeText:"50+",buttonVolumeStyle:"btn-filter-box btn-color-white"},{buttonVolumeId:1,buttonVolumeText:"100+",buttonVolumeStyle:"btn-filter-box btn-color-white"}],listButtonsAvailability:[{buttonAvailabilityId:1,buttonAvailabilityText:"Imediata",buttonAvailabilityStyle:"btn-filter-box btn-color-white"},{buttonAvailabilityId:1,buttonAvailabilityText:"Até 15 dias",buttonAvailabilityStyle:"btn-filter-box btn-color-white"},{buttonAvailabilityId:1,buttonAvailabilityText:"Mais de 15 dias",buttonAvailabilityStyle:"btn-filter-box btn-color-white"}],tags:[{tagId:1,tagText:"caixas",tagShow:!0},{tagId:2,tagText:"$$$",tagShow:!0},{tagId:3,tagText:"imediata",tagShow:!0}],showFilterBox:!1,countShowFilterBox:0,vizFilterBox:"hidden",marginFooter:"108px"}},methods:{toggleFilterBox:function(){this.showFilterBox=!this.showFilterBox,this.countShowFilterBox++},activateButtonPrice:function(t){"btn-filter-box btn-color-white"==this.listButtonsPrice[t].buttonPriceStyle?this.listButtonsPrice[t].buttonPriceStyle="btn-filter-box btn-color-white-active":this.listButtonsPrice[t].buttonPriceStyle="btn-filter-box btn-color-white"},activateButtonTransportation:function(t){"btn-filter-box btn-color-white"==this.listButtonsTransportation[t].buttonTransportationStyle?this.listButtonsTransportation[t].buttonTransportationStyle="btn-filter-box btn-color-white-active":this.listButtonsTransportation[t].buttonTransportationStyle="btn-filter-box btn-color-white"},activateButtonOrganic:function(t){"btn-filter-box btn-color-white"==this.listButtonsOrganic[t].buttonOrganicStyle?this.listButtonsOrganic[t].buttonOrganicStyle="btn-filter-box btn-color-white-active":this.listButtonsOrganic[t].buttonOrganicStyle="btn-filter-box btn-color-white"},activateButtonTransformed:function(t){"btn-filter-box btn-color-white"==this.listButtonsTransformed[t].buttonTransformedStyle?this.listButtonsTransformed[t].buttonTransformedStyle="btn-filter-box btn-color-white-active":this.listButtonsTransformed[t].buttonTransformedStyle="btn-filter-box btn-color-white"},activateButtonMeasure:function(t){"btn-filter-box btn-color-white"==this.listButtonsMeasure[t].buttonMeasureStyle?this.listButtonsMeasure[t].buttonMeasureStyle="btn-filter-box btn-color-white-active":this.listButtonsMeasure[t].buttonMeasureStyle="btn-filter-box btn-color-white"},activateButtonVolume:function(t){"btn-filter-box btn-color-white"==this.listButtonsVolume[t].buttonVolumeStyle?this.listButtonsVolume[t].buttonVolumeStyle="btn-filter-box btn-color-white-active":this.listButtonsVolume[t].buttonVolumeStyle="btn-filter-box btn-color-white"},activateButtonAvailability:function(t){"btn-filter-box btn-color-white"==this.listButtonsAvailability[t].buttonAvailabilityStyle?this.listButtonsAvailability[t].buttonAvailabilityStyle="btn-filter-box btn-color-white-active":this.listButtonsAvailability[t].buttonAvailabilityStyle="btn-filter-box btn-color-white"},clearTag:function(t){this.tags[t].tagShow=!1}},components:{NavBar:n["a"],MainFooter:r["a"],CardOffer:s["a"]}},u=l,c=(o("2c16"),o("2877")),b=Object(c["a"])(u,i,a,!1,null,null,null);e["default"]=b.exports}}]);
//# sourceMappingURL=about.6005372d.js.map