(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{zrcO:function(t,e,n){"use strict";n.r(e),n.d(e,"UsersModule",(function(){return m}));var r=n("PCNd"),i=n("tyNb"),c=n("fXoL"),o=n("3Pt+"),s=n("ofXK"),b=n("LP8i");function a(t,e){if(1&t&&(c.Mb(0,"div",6),c.Kb(1,"img",7),c.Mb(2,"div",8),c.Mb(3,"h5"),c.ic(4),c.Lb(),c.Mb(5,"button",9),c.ic(6," view details"),c.Lb(),c.Lb(),c.Lb()),2&t){const t=e.$implicit;c.zb(1),c.ac("src",t.img,c.fc),c.zb(3),c.jc(t.name),c.zb(1),c.Zb("routerLink",t.id)}}let u=(()=>{class t{constructor(t){this._route=t,this.title="Users List",this.users=this._route.snapshot.data.users}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(i.a))},t.\u0275cmp=c.Db({type:t,selectors:[["my-cust"]],decls:11,vars:6,consts:[[1,"container"],[1,"row"],[1,"text-light"],[1,"row",2,"margin-left","500px"],["type","text",1,"rounded",3,"ngModel","ngModelChange"],["class","col-md-4",4,"ngFor","ngForOf"],[1,"col-md-4"],["alt","alt","width","300","height","300",1,"bd-placeholder-img","rounded",3,"src"],[1,"text-center"],[1,"btn","btn-secondary",3,"routerLink"]],template:function(t,e){1&t&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.Mb(2,"h2",2),c.ic(3),c.Lb(),c.Lb(),c.Mb(4,"div",3),c.Mb(5,"label"),c.ic(6,"Search filter:"),c.Lb(),c.Mb(7,"input",4),c.Ub("ngModelChange",(function(t){return e.nameFilter=t})),c.Lb(),c.Lb(),c.Mb(8,"div",1),c.hc(9,a,7,3,"div",5),c.Xb(10,"searchFilter"),c.Lb(),c.Lb()),2&t&&(c.zb(3),c.jc(e.title),c.zb(4),c.Zb("ngModel",e.nameFilter),c.zb(2),c.Zb("ngForOf",c.Yb(10,3,e.users,e.nameFilter)))},directives:[o.a,o.d,o.g,s.i,i.h],pipes:[b.a],styles:[""]}),t})();var l=n("FnMX");let d=(()=>{class t{constructor(t,e,n){this.route=t,this.location=e,this._userService=n,this.user=[]}ngOnInit(){this.route.params.forEach(t=>{this.id=+t.id}),this.getDetails()}goBack(){this.location.back()}getDetails(){this._userService.getUsers02().forEach(t=>{t.id==this.id&&this.user.push(t)})}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(i.a),c.Jb(s.g),c.Jb(l.a))},t.\u0275cmp=c.Db({type:t,selectors:[["ng-component"]],decls:29,vars:6,consts:[[1,"container"],[1,"row"],[1,"col"],["alt","",1,"bd-placeholder-img","rounded",3,"src"],[3,"click"]],template:function(t,e){1&t&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.Mb(2,"div",2),c.Mb(3,"h2"),c.ic(4,"User Details"),c.Lb(),c.Mb(5,"div"),c.Kb(6,"img",3),c.Mb(7,"h3"),c.ic(8,"ID: "),c.Lb(),c.Mb(9,"h5"),c.ic(10),c.Lb(),c.Mb(11,"h3"),c.ic(12,"First Name :"),c.Lb(),c.Mb(13,"h5"),c.ic(14),c.Lb(),c.Mb(15,"h3"),c.ic(16,"Last Name :"),c.Lb(),c.Mb(17,"h5"),c.ic(18),c.Lb(),c.Mb(19,"h3"),c.ic(20,"Phone :"),c.Lb(),c.Mb(21,"h5"),c.ic(22),c.Lb(),c.Mb(23,"h3"),c.ic(24,"Location :"),c.Lb(),c.Mb(25,"h5"),c.ic(26),c.Lb(),c.Lb(),c.Mb(27,"button",4),c.Ub("click",(function(){return e.goBack()})),c.ic(28,"Back"),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&t&&(c.zb(6),c.ac("src",e.user[0].img,c.fc),c.zb(4),c.jc(e.id),c.zb(4),c.jc(e.user[0].name),c.zb(4),c.jc(e.user[0].lastname),c.zb(4),c.kc("",e.user[0].phone," "),c.zb(4),c.jc(e.user[0].location))},styles:["h3[_ngcontent-%COMP%]{color:#2f4f4f;font-size:medium}label[_ngcontent-%COMP%]{display:inline-block;width:3em;margin:.5em 0;color:#607d8b;font-weight:700}input[_ngcontent-%COMP%]{height:2em;font-size:1em;padding-left:.4em}button[_ngcontent-%COMP%]{margin-top:20px;font-family:Arial;background-color:#eee;border:none;padding:5px 10px;border-radius:4px;cursor:pointer;cursor:hand}button[_ngcontent-%COMP%]:hover{background-color:#cfd8dc}button[_ngcontent-%COMP%]:disabled{background-color:#eee;color:#ccc;cursor:auto}"]}),t})();var h=n("kggC");let g=(()=>{class t{constructor(t){this._usersService=t}resolve(t,e){return this._usersService.getUsers()}}return t.\u0275fac=function(e){return new(e||t)(c.Qb(l.a))},t.\u0275prov=c.Fb({token:t,factory:t.\u0275fac}),t})();const p=[{path:"",component:u,canActivate:[h.a],resolve:{users:g}},{path:":id",component:d}];let f=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[i.k.forChild(p)],i.k]}),t})(),m=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},providers:[l.a,g],imports:[[r.a,f]]}),t})()}}]);