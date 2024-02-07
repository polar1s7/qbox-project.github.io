(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62],{2232:function(e,n,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/resources/qbx_core/modules/lib/client",function(){return l(164)}])},164:function(e,n,l){"use strict";l.r(n),l.d(n,{__toc:function(){return a}});var s=l(1527),i=l(7154),r=l(5424);let a=[{depth:2,value:"drawText2d",id:"drawtext2d"},{depth:2,value:"drawText3d",id:"drawtext3d"},{depth:2,value:"getEntityAndNetIdFromBagName",id:"getentityandnetidfrombagname"},{depth:2,value:"entityStateHandler",id:"entitystatehandler"},{depth:2,value:"deleteVehicle",id:"deletevehicle"},{depth:2,value:"getVehicleDisplayName",id:"getvehicledisplayname"},{depth:2,value:"getVehicleMakeName",id:"getvehiclemakename"},{depth:2,value:"getStreetName",id:"getstreetname"},{depth:2,value:"getZoneName",id:"getzonename"},{depth:2,value:"setVehicleExtra",id:"setvehicleextra"},{depth:2,value:"resetVehicleExtras",id:"resetvehicleextras"},{depth:2,value:"setVehicleExtras",id:"setvehicleextras"},{depth:2,value:"isWearingGloves",id:"iswearinggloves"},{depth:2,value:"loadAudioBank",id:"loadaudiobank"},{depth:2,value:"playAudio",id:"playaudio"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",br:"br"},(0,r.a)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{children:"Client Lib"}),"\n",(0,s.jsx)(n.h2,{id:"drawtext2d",children:"drawText2d"}),"\n",(0,s.jsx)(n.p,{children:"Draws text onto the screen in 2D space for a single frame."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"qbx."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"drawText2d"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(params)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["params: ",(0,s.jsx)(n.code,{children:"table"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["text: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["coords: ",(0,s.jsx)(n.code,{children:"vector2"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"On-screen coordinates."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["scale?: ",(0,s.jsx)(n.code,{children:"integer"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"0.35"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["font?: ",(0,s.jsx)(n.code,{children:"integer"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"4"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["color?: ",(0,s.jsx)(n.code,{children:"vector4"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"An RGBA value; white by default."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["width?: ",(0,s.jsx)(n.code,{children:"number"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"1.0"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["height?: ",(0,s.jsx)(n.code,{children:"number"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"1.0"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"drawtext3d",children:"drawText3d"}),"\n",(0,s.jsx)(n.p,{children:"Draws text onto the screen in 3D space for a single frame."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"qbx."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"drawText3d"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(params)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["params: ",(0,s.jsx)(n.code,{children:"table"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["text: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["coords: ",(0,s.jsx)(n.code,{children:"vector3"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In-world coordinates."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["scale?: ",(0,s.jsx)(n.code,{children:"integer"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"0.35"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["font?: ",(0,s.jsx)(n.code,{children:"integer"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Default: ",(0,s.jsx)(n.code,{children:"4"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["color?: ",(0,s.jsx)(n.code,{children:"vector4"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"An RGBA value; white by default."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["disableDrawRect?: ",(0,s.jsx)(n.code,{children:"boolean"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Disables drawing a rectangle background for the text."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"getentityandnetidfrombagname",children:"getEntityAndNetIdFromBagName"}),"\n",(0,s.jsxs)(n.p,{children:["Gets and returns an entity handle and network id from a state bag name. ",(0,s.jsx)(n.br,{}),"\n","Will return ",(0,s.jsx)(n.code,{children:"0"})," for both if an invalid entity was received."]}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"qbx."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getEntityAndNetIdFromBagName"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(bagName)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["bagName: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["entity: ",(0,s.jsx)(n.code,{children:"integer"})]}),"\n",(0,s.jsxs)(n.li,{children:["netId: ",(0,s.jsx)(n.code,{children:"integer"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"entitystatehandler",children:"entityStateHandler"}),"\n",(0,s.jsx)(n.p,{children:"Returns a state bag handler made for entities."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"qbx."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"entityStateHandler"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(keyFilter, cb)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["keyFilter: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["cb: ",(0,s.jsx)(n.code,{children:"fun(entity: number, netId: number, value: any, bagName: string)"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Returns: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n",(0,s.jsx)(n.h2,{id:"deletevehicle",children:"deleteVehicle"}),"\n",(0,s.jsx)(n.p,{children:"Deletes the specified vehicle and returns whether it was successful."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"qbx."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"deleteVehicle"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(vehicle)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["vehicle: ",(0,s.jsx)(n.code,{children:"integer"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Returns: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsx)(n.h2,{id:"getvehicledisplayname",children:"getVehicleDisplayName"}),"\n",(0,s.jsx)(n.p,{children:"Returns the model name of the given vehicle."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"qbx."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getVehicleDisplayName"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(vehicle)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["vehicle: ",(0,s.jsx)(n.code,{children:"integer"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Returns: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h2,{id:"getvehiclemakename",children:"getVehicleMakeName"}),"\n",(0,s.jsx)(n.p,{children:"Returns the brand name of the given vehicle."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"qbx."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getVehicleMakeName"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(vehicle)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["vehicle: ",(0,s.jsx)(n.code,{children:"integer"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Returns: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h2,{id:"getstreetname",children:"getStreetName"}),"\n",(0,s.jsx)(n.p,{children:"Returns the street name and cross section name at the given coords."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"qbx."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getStreetName"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(coords)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["coords: ",(0,s.jsx)(n.code,{children:"vector3"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Returns:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["streetName: ",(0,s.jsx)(n.code,{children:"table"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["main: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["cross: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"getzonename",children:"getZoneName"}),"\n",(0,s.jsx)(n.p,{children:"Returns the name of the zone at the given coords."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"qbx."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getZoneName"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(coords)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["coords: ",(0,s.jsx)(n.code,{children:"vector3"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Returns: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.h2,{id:"setvehicleextra",children:"setVehicleExtra"}),"\n",(0,s.jsx)(n.p,{children:"Set an extra on the given vehicle."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"qbx."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"setVehicleExtra"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(vehicle, extra, enable)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["vehicle: ",(0,s.jsx)(n.code,{children:"integer"})]}),"\n",(0,s.jsxs)(n.li,{children:["extra: ",(0,s.jsx)(n.code,{children:"integer"})]}),"\n",(0,s.jsxs)(n.li,{children:["enable: ",(0,s.jsx)(n.code,{children:"boolean"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Whether to enable the extra."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"resetvehicleextras",children:"resetVehicleExtras"}),"\n",(0,s.jsx)(n.p,{children:"Enables all the extras of the given vehicle."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"qbx."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"resetVehicleExtras"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(vehicle)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["vehicle: ",(0,s.jsx)(n.code,{children:"integer"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setvehicleextras",children:"setVehicleExtras"}),"\n",(0,s.jsx)(n.p,{children:"Sets all the extras of the given vehicle."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"qbx."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"setVehicleExtra"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(vehicle, extras)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["vehicle: ",(0,s.jsx)(n.code,{children:"integer"})]}),"\n",(0,s.jsxs)(n.li,{children:["extras: ",(0,s.jsx)(n.code,{children:"table<integer, boolean>"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"iswearinggloves",children:"isWearingGloves"}),"\n",(0,s.jsx)(n.p,{children:"Returns if the local ped is wearing gloves."}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"qbx."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"isWearingGloves"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]})})}),"\n",(0,s.jsxs)(n.p,{children:["Returns: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsx)(n.h2,{id:"loadaudiobank",children:"loadAudioBank"}),"\n",(0,s.jsxs)(n.p,{children:["Attempts to load an audio bank and returns whether it was successful. ",(0,s.jsx)(n.br,{}),"\n","Remember to use ",(0,s.jsx)(n.code,{children:"ReleaseScriptAudioBank"})," since you can only load up to 10 banks."]}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"qbx."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"loadAudioBank"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(audioBank, timeout)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["audioBank: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["timeout?: ",(0,s.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Returns: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsx)(n.h2,{id:"playaudio",children:"playAudio"}),"\n",(0,s.jsxs)(n.p,{children:["Plays a sound with the provided audio name and audio ref. ",(0,s.jsx)(n.br,{}),"\n","If ",(0,s.jsx)(n.code,{children:"returnSoundId"})," is false or not specified the soundId is released, ",(0,s.jsx)(n.br,{}),"\n","otherwise the function returns the soundId without releasing it."]}),"\n",(0,s.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,s.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,s.jsxs)(n.span,{className:"line",children:[(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"qbx."}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"playAudio"}),(0,s.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(params)"})]})})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["params: ",(0,s.jsx)(n.code,{children:"table"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["audioName: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["audioRef: ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsxs)(n.li,{children:["returnSoundId?: ",(0,s.jsx)(n.code,{children:"boolean"})]}),"\n",(0,s.jsxs)(n.li,{children:["audioSource?: ",(0,s.jsx)(n.code,{children:"number | vector3"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Entity handle or vector3 coords."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["range?: ",(0,s.jsx)(n.code,{children:"number"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Only used if ",(0,s.jsx)(n.code,{children:"audioSource"})," is a vector3 coordinate."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Returns: ",(0,s.jsx)(n.code,{children:"number?"})]})]})}n.default=(0,i.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.a)(),e.components);return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/resources/qbx_core/modules/lib/client.mdx",route:"/resources/qbx_core/modules/lib/client",title:"Client Lib",headings:a},pageNextRoute:"/resources/qbx_core/modules/lib/client"})}},function(e){e.O(0,[154,774,888,179],function(){return e(e.s=2232)}),_N_E=e.O()}]);