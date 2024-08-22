(()=>{"use strict";var e,t,r,n,a={253:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.deinterlace=void 0,t.deinterlace=function(e,t){for(var r=new Array(e.length),n=e.length/t,a=function(n,a){var i=e.slice(a*t,(a+1)*t);r.splice.apply(r,[n*t,t].concat(i))},i=[0,4,2,1],o=[8,8,4,2],s=0,u=0;u<4;u++)for(var d=i[u];d<n;d+=o[u])a(d,s),s++;return r}},393:(e,t,r)=>{t.Ud=t.O5=void 0;var n,a=(n=r(841))&&n.__esModule?n:{default:n},i=r(208),o=r(515),s=r(253),u=r(270);t.O5=function(e){var t=new Uint8Array(e);return(0,i.parse)((0,o.buildStream)(t),a.default)};t.Ud=function(e,t){return e.frames.filter((function(e){return e.image})).map((function(r){return function(e,t,r){if(e.image){var n=e.image,a=n.descriptor.width*n.descriptor.height,i=(0,u.lzw)(n.data.minCodeSize,n.data.blocks,a);n.descriptor.lct.interlaced&&(i=(0,s.deinterlace)(i,n.descriptor.width));var o={pixels:i,dims:{top:e.image.descriptor.top,left:e.image.descriptor.left,width:e.image.descriptor.width,height:e.image.descriptor.height}};return n.descriptor.lct&&n.descriptor.lct.exists?o.colorTable=n.lct:o.colorTable=t,e.gce&&(o.delay=10*(e.gce.delay||10),o.disposalType=e.gce.extras.disposal,e.gce.extras.transparentColorGiven&&(o.transparentIndex=e.gce.transparentColorIndex)),r&&(o.patch=function(e){for(var t=e.pixels.length,r=new Uint8ClampedArray(4*t),n=0;n<t;n++){var a=4*n,i=e.pixels[n],o=e.colorTable[i]||[0,0,0];r[a]=o[0],r[a+1]=o[1],r[a+2]=o[2],r[a+3]=i!==e.transparentIndex?255:0}return r}(o)),o}console.warn("gif frame does not have associated image.")}(r,e.gct,t)}))}},270:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.lzw=void 0,t.lzw=function(e,t,r){var n,a,i,o,s,u,d,c,l,p,f,g,h,v,x,m,b=4096,y=r,E=new Array(r),_=new Array(b),U=new Array(b),I=new Array(4097);for(s=1+(a=1<<(p=e)),n=a+2,d=-1,i=(1<<(o=p+1))-1,c=0;c<a;c++)_[c]=0,U[c]=c;for(f=g=h=v=x=m=0,l=0;l<y;){if(0===v){if(g<o){f+=t[m]<<g,g+=8,m++;continue}if(c=f&i,f>>=o,g-=o,c>n||c==s)break;if(c==a){i=(1<<(o=p+1))-1,n=a+2,d=-1;continue}if(-1==d){I[v++]=U[c],d=c,h=c;continue}for(u=c,c==n&&(I[v++]=h,c=d);c>a;)I[v++]=U[c],c=_[c];h=255&U[c],I[v++]=h,n<b&&(_[n]=d,U[n]=h,!(++n&i)&&n<b&&(o++,i+=n)),d=u}v--,E[x++]=I[v],l++}for(l=x;l<y;l++)E[l]=0;return E}},208:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.loop=t.conditional=t.parse=void 0,t.parse=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n;if(Array.isArray(r))r.forEach((function(r){return e(t,r,n,a)}));else if("function"==typeof r)r(t,n,a,e);else{var i=Object.keys(r)[0];Array.isArray(r[i])?(a[i]={},e(t,r[i],n,a[i])):a[i]=r[i](t,n,a,e)}return n},t.conditional=function(e,t){return function(r,n,a,i){t(r,n,a)&&i(r,e,n,a)}},t.loop=function(e,t){return function(r,n,a,i){for(var o=[],s=r.pos;t(r,n,a);){var u={};if(i(r,e,n,u),r.pos===s)break;s=r.pos,o.push(u)}return o}}},515:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.readBits=t.readArray=t.readUnsigned=t.readString=t.peekBytes=t.readBytes=t.peekByte=t.readByte=t.buildStream=void 0,t.buildStream=function(e){return{data:e,pos:0}};t.readByte=function(){return function(e){return e.data[e.pos++]}},t.peekByte=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(t){return t.data[t.pos+e]}};var r=function(e){return function(t){return t.data.subarray(t.pos,t.pos+=e)}};t.readBytes=r,t.peekBytes=function(e){return function(t){return t.data.subarray(t.pos,t.pos+e)}},t.readString=function(e){return function(t){return Array.from(r(e)(t)).map((function(e){return String.fromCharCode(e)})).join("")}},t.readUnsigned=function(e){return function(t){var n=r(2)(t);return e?(n[1]<<8)+n[0]:(n[0]<<8)+n[1]}},t.readArray=function(e,t){return function(n,a,i){for(var o="function"==typeof t?t(n,a,i):t,s=r(e),u=new Array(o),d=0;d<o;d++)u[d]=s(n);return u}},t.readBits=function(e){return function(t){for(var r=function(e){return e.data[e.pos++]}(t),n=new Array(8),a=0;a<8;a++)n[7-a]=!!(r&1<<a);return Object.keys(e).reduce((function(t,r){var a=e[r];return a.length?t[r]=function(e,t,r){for(var n=0,a=0;a<r;a++)n+=e[t+a]&&Math.pow(2,r-a-1);return n}(n,a.index,a.length):t[r]=n[a.index],t}),{})}}},841:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(208),a=r(515),i={blocks:function(e){for(var t=[],r=e.data.length,n=0,i=(0,a.readByte)()(e);0!==i&&i;i=(0,a.readByte)()(e)){if(e.pos+i>=r){var o=r-e.pos;t.push((0,a.readBytes)(o)(e)),n+=o;break}t.push((0,a.readBytes)(i)(e)),n+=i}for(var s=new Uint8Array(n),u=0,d=0;d<t.length;d++)s.set(t[d],u),u+=t[d].length;return s}},o=(0,n.conditional)({gce:[{codes:(0,a.readBytes)(2)},{byteSize:(0,a.readByte)()},{extras:(0,a.readBits)({future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}})},{delay:(0,a.readUnsigned)(!0)},{transparentColorIndex:(0,a.readByte)()},{terminator:(0,a.readByte)()}]},(function(e){var t=(0,a.peekBytes)(2)(e);return 33===t[0]&&249===t[1]})),s=(0,n.conditional)({image:[{code:(0,a.readByte)()},{descriptor:[{left:(0,a.readUnsigned)(!0)},{top:(0,a.readUnsigned)(!0)},{width:(0,a.readUnsigned)(!0)},{height:(0,a.readUnsigned)(!0)},{lct:(0,a.readBits)({exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}})}]},(0,n.conditional)({lct:(0,a.readArray)(3,(function(e,t,r){return Math.pow(2,r.descriptor.lct.size+1)}))},(function(e,t,r){return r.descriptor.lct.exists})),{data:[{minCodeSize:(0,a.readByte)()},i]}]},(function(e){return 44===(0,a.peekByte)()(e)})),u=(0,n.conditional)({text:[{codes:(0,a.readBytes)(2)},{blockSize:(0,a.readByte)()},{preData:function(e,t,r){return(0,a.readBytes)(r.text.blockSize)(e)}},i]},(function(e){var t=(0,a.peekBytes)(2)(e);return 33===t[0]&&1===t[1]})),d=(0,n.conditional)({application:[{codes:(0,a.readBytes)(2)},{blockSize:(0,a.readByte)()},{id:function(e,t,r){return(0,a.readString)(r.blockSize)(e)}},i]},(function(e){var t=(0,a.peekBytes)(2)(e);return 33===t[0]&&255===t[1]})),c=(0,n.conditional)({comment:[{codes:(0,a.readBytes)(2)},i]},(function(e){var t=(0,a.peekBytes)(2)(e);return 33===t[0]&&254===t[1]})),l=[{header:[{signature:(0,a.readString)(3)},{version:(0,a.readString)(3)}]},{lsd:[{width:(0,a.readUnsigned)(!0)},{height:(0,a.readUnsigned)(!0)},{gct:(0,a.readBits)({exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}})},{backgroundColorIndex:(0,a.readByte)()},{pixelAspectRatio:(0,a.readByte)()}]},(0,n.conditional)({gct:(0,a.readArray)(3,(function(e,t){return Math.pow(2,t.lsd.gct.size+1)}))},(function(e,t){return t.lsd.gct.exists})),{frames:(0,n.loop)([o,d,c,s,u],(function(e){var t=(0,a.peekByte)()(e);return 33===t||44===t}))}];t.default=l},960:(e,t,r)=>{r.d(t,{X:()=>a});var n=r(393);class a{patchCanvas=document.createElement("canvas");patchCtx=this.patchCanvas.getContext("2d");gifCanvas=document.createElement("canvas");gifCtx=this.gifCanvas.getContext("2d");frames;frameImageData;lastFrame;startTime;nextFrameTime;loaded=!1;async load(e){this.loaded=!1;const t=await fetch(e);if(!t.ok)return!1;const r=(0,n.O5)(await t.arrayBuffer());return this.frames=(0,n.Ud)(r,!0),this.gifCanvas.width=this.frames[0].dims.width,this.gifCanvas.height=this.frames[0].dims.height,this.lastFrame=-1,this.loaded=!0,!0}getNextFrame(){if(!this.loaded)return null;if(-1===this.lastFrame)return this.drawFrame(0),this.lastFrame=0,this.startTime=performance.now(),this.nextFrameTime=this.startTime+(this.frames[0].delay||100),this.gifCanvas;const e=performance.now();if(e>=this.nextFrameTime){const t=this.lastFrame,r=(this.lastFrame+1)%this.frames.length;return t===r?null:(this.drawFrame(r),this.nextFrameTime=e+(this.frames[r].delay||100),this.lastFrame=r,this.gifCanvas)}return null}drawFrame(e){const t=this.frames[e].dims;this.frameImageData&&this.frameImageData.width===t.width&&this.frameImageData.height===t.height||(this.patchCanvas.width=t.width,this.patchCanvas.height=t.height,this.frameImageData=this.patchCtx.createImageData(t.width,t.height)),this.gifCtx.clearRect(0,0,this.gifCanvas.width,this.gifCanvas.height),this.frameImageData.data.set(this.frames[e].patch),this.patchCtx.putImageData(this.frameImageData,0,0),this.gifCtx.drawImage(this.patchCanvas,t.left,t.top)}}},156:(e,t,r)=>{r.a(e,(async(e,t)=>{try{var n=r(573),a=r(24),i=r(309),o=r(726),s=r(960);const u=256,d=256,c=u-2,l=d*c*3,p=32,f=32,g=512,h=32,v={r:83/255,g:.4,b:132/255,a:1},x={NUM_DROP_VERTICES:u,NUM_DROPS:d,TRIANGLES_GENERATED:c,EARCUT_WORKGROUP_SIZE:p,SIMULATE_WORKGROUP_SIZE:f,NUM_IMAGES:h},m=4*d,b=4*d+2,y=4*d+3,E=4*d+4,_=4*d+7,U=new Float32Array(4*(d+5));U[m]=0,U[b]=1,U[y]=1,U[_]=0;let I=0,S=!1;function T(e,t,r,n,a=1,i=0,o=0){let s=E;U[s++]=t,U[s++]=r,U[s++]=n;let u=4*e;U[u++]=a,U[u++]=i,U[u++]=o,U[u++]=1}function P(e,t){const r=e/U[b],n=t/U[y];I++,I>=d&&(I=0),T(I,r,n,.15,Math.random(),Math.random(),Math.random()),U[4*d]=I,S=!0}async function R(e){const t=await fetch(e),r=await t.blob();return await createImageBitmap(r,{colorSpaceConversion:"none"})}let w=0;const O=new Array(h);async function M(){w=(w+1)%h,O[w]&&(clearInterval(O[w]),O[w]=0);const e=await fetch("i"),t=await e.text(),r=`images/${encodeURI(t)}`;r.endsWith("gif")?O[w]=he(r,w):j(r,w)}function C(e){throw location.href="/v",e}console.log("let's get ready to bumble! (remixed!): https://github.com/bzztbomb/webgpu_marbling/"),setInterval((()=>{M(),ge()}),150),navigator.gpu||C(new Error("WebGPU not supported!"));const D=await navigator.gpu.requestAdapter();D||C(new Error("Unable to get adapter!"));const G=await D.requestDevice();G||C(new Error("Unable to get device!"));const A=document.getElementsByTagName("canvas")[0];A.onclick=e=>{const t=A.getBoundingClientRect(),r=e.clientX-t.left,n=e.clientY-t.top;P(r/t.width*2-1,-(n/t.height*2-1))};const B=A.getContext("webgpu"),N=navigator.gpu.getPreferredCanvasFormat();B.configure({device:G,format:N});const V=G.createShaderModule({label:"resizeModule",code:"\n    @group(0) @binding(0) var<uniform> resize: vec2f;\n    @group(0) @binding(1) var s: sampler;\n    @group(0) @binding(2) var texture: texture_2d<f32>;\n\n    struct VertexOutput {\n      @builtin(position) pos: vec4f,\n      @location(0) uv: vec2f\n    }\n\n    @vertex fn vs(\n      @builtin(vertex_index) vertexIndex : u32\n    ) -> VertexOutput {\n      let pos = array(\n        vec2f(-1.0, -1.0), // upper left\n        vec2f(-1.0, 1.0), // lower left\n        vec2f( 1.0, 1.0), // lower right\n\n        vec2f( 1.0,  1.0),  // lower right\n        vec2f( 1.0,  -1.0), // upper right\n        vec2f(-1.0,  -1.0), // upper left\n      );\n      let uv = array(\n        vec2f(0.0, 1.0), // upper left\n        vec2f(0.0, 0.0), // lower left\n        vec2f(1.0, 0.0), // lower right\n        vec2f(1.0, 0.0), // lower right\n        vec2f(1.0, 1.0), // upper right\n        vec2f(0.0, 1.0), // upper left\n      );\n      var output: VertexOutput;\n      output.pos = vec4f(pos[vertexIndex] * resize.xy, 0.0, 1.0);\n      output.uv = uv[vertexIndex];\n      return output;\n    }\n\n    @fragment fn fs(input: VertexOutput) -> @location(0) vec4f {\n      return textureSample(texture, s, input.uv);\n    }\n  "}),z=G.createBindGroupLayout({label:"resize layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{type:"uniform"}},{binding:1,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d"}}]}),k=G.createRenderPipeline({label:"resize pipeline",layout:G.createPipelineLayout({bindGroupLayouts:[z]}),vertex:{entryPoint:"vs",module:V},fragment:{entryPoint:"fs",module:V,targets:[{format:"rgba8unorm",blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]}}),F=new Float32Array(4),L=G.createBuffer({label:"resize  uniforms",size:F.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});G.queue.writeBuffer(L,0,F);const q=G.createTexture({label:"square",format:"rgba8unorm",size:{width:g,height:g},usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT});async function j(e,t){const r=e instanceof HTMLCanvasElement?e:await R(e),n=G.createTexture({label:"non-square",format:"rgba8unorm",size:{width:r.width,height:r.height},usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT});G.queue.copyExternalImageToTexture({source:r,flipY:!0},{texture:n},{width:r.width,height:r.height}),F[1]=r.width>r.height?g/r.width:1,F[0]=r.height>r.width?g/r.height:1,F[2]=1,G.queue.writeBuffer(L,0,F);const a=G.createCommandEncoder(),i=a.beginRenderPass({colorAttachments:[{view:q.createView(),loadOp:"clear",clearValue:{r:0,g:0,b:0,a:0},storeOp:"store"}]}),o=G.createBindGroup({label:"resize  bind group",layout:z,entries:[{binding:0,resource:{buffer:L}},{binding:1,resource:G.createSampler()},{binding:2,resource:n.createView()}]});i.setPipeline(k),i.setBindGroup(0,o),i.draw(6),i.end(),a.copyTextureToTexture({texture:q},{texture:X,origin:{z:t}},{width:g,height:g});const s=a.finish();G.queue.submit([s]),n.destroy()}const X=G.createTexture({label:"image",format:"rgba8unorm",size:{width:g,height:g,depthOrArrayLayers:h},usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT}),Y=new Float32Array(d*u*2),W=[0,1].map((e=>G.createBuffer({label:`drop vertices ${e}`,size:Y.byteLength,usage:GPUBufferUsage.VERTEX|GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST})));W.forEach((e=>G.queue.writeBuffer(e,0,Y)));const H={arrayStride:8,attributes:[{format:"float32x2",offset:0,shaderLocation:0}]},K=G.createBuffer({label:"drop indices",size:4*l,usage:GPUBufferUsage.INDEX|GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_DST|GPUBufferUsage.COPY_SRC}),Z=G.createBuffer({label:"drop colors",size:U.byteLength,usage:GPUBufferUsage.UNIFORM|GPUBufferUsage.COPY_DST});G.queue.writeBuffer(Z,0,U);const $=G.createShaderModule({label:"drop shader",code:(0,n.v)(i.A.code,x)}),J=G.createShaderModule({label:"Earcut compute module",code:(0,n.v)(a.A.code,x)}),Q=G.createShaderModule({label:"simulate shader",code:(0,n.v)(o.A.code,x)}),ee=G.createBindGroupLayout({label:"drop bind group layout",entries:[{binding:0,visibility:GPUShaderStage.VERTEX,buffer:{}},{binding:1,visibility:GPUShaderStage.VERTEX,buffer:{type:"read-only-storage"}},{binding:2,visibility:GPUShaderStage.FRAGMENT,sampler:{type:"filtering"}},{binding:3,visibility:GPUShaderStage.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d-array"}}]}),te=G.createBindGroupLayout({label:"earcut bind group layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}}]}),re=G.createBindGroupLayout({label:"simulate bind group layout",entries:[{binding:0,visibility:GPUShaderStage.COMPUTE,buffer:{type:"read-only-storage"}},{binding:1,visibility:GPUShaderStage.COMPUTE,buffer:{type:"storage"}},{binding:2,visibility:GPUShaderStage.COMPUTE,buffer:{type:"uniform"}}]});let ne=G.createTexture({size:[A.width,A.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT});const ae=new ResizeObserver((e=>{for(const t of e){const e=t.devicePixelContentBoxSize??t.contentBoxSize,r=e[0].inlineSize,n=e[0].blockSize,a=t.target;a.width=Math.max(1,Math.min(r,G.limits.maxTextureDimension2D)),a.height=Math.max(1,Math.min(n,G.limits.maxTextureDimension2D)),ne&&ne.destroy(),ne=G.createTexture({size:[a.width,a.height],format:"depth24plus",usage:GPUTextureUsage.RENDER_ATTACHMENT})}U[b]=A.height>=A.width?A.height/A.width:1,U[y]=A.width>=A.height?A.width/A.height:1}));try{ae.observe(A,{box:"device-pixel-content-box"})}catch{ae.observe(A,{box:"content-box"})}const ie=G.createRenderPipeline({label:"drop pipeline",layout:G.createPipelineLayout({bindGroupLayouts:[ee]}),vertex:{module:$,entryPoint:"vertexMain",buffers:[H]},fragment:{module:$,entryPoint:"fragmentMain",targets:[{format:N,blend:{color:{srcFactor:"one",dstFactor:"one-minus-src-alpha"},alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha"}}}]},depthStencil:{depthWriteEnabled:!0,depthCompare:"less",format:"depth24plus"}}),oe=[1,0].map((e=>G.createBindGroup({label:"Drop bind group",layout:ee,entries:[{binding:0,resource:{buffer:Z}},{binding:1,resource:{buffer:W[e]}},{binding:2,resource:G.createSampler()},{binding:3,resource:X.createView()}]}))),se=[0,1].map((e=>G.createBindGroup({label:"earcut bind group",layout:te,entries:[{binding:0,resource:{buffer:W[e]}},{binding:1,resource:{buffer:K}}]}))),ue=[1,0].map((e=>G.createBindGroup({label:"simulate bind group",layout:re,entries:[{binding:0,resource:{buffer:W[e]}},{binding:1,resource:{buffer:W[1-e]}},{binding:2,resource:{buffer:Z}}]}))),de=G.createComputePipeline({label:"earcut pipeline",layout:G.createPipelineLayout({bindGroupLayouts:[te]}),compute:{module:J,entryPoint:"computeMain"}}),ce=G.createComputePipeline({label:"simulate pipeline",layout:G.createPipelineLayout({bindGroupLayouts:[re]}),compute:{module:Q,entryPoint:"computeMain"}});let le=0,pe=performance.now();function fe(){S&&(pe=performance.now());const e=performance.now()-pe;U[_]=Math.min(e/1e3,1),G.queue.writeBuffer(Z,0,U);const t=G.createCommandEncoder();if(S){le=1-le;const e=t.beginComputePass();e.setPipeline(ce),e.setBindGroup(0,ue[le]),e.dispatchWorkgroups(Math.ceil(d*u/f)),e.end();const r=t.beginComputePass();r.setPipeline(de),r.setBindGroup(0,se[le]),r.dispatchWorkgroups(Math.ceil(d/p)),r.end(),pe=performance.now(),S=!1}const r=t.beginRenderPass({colorAttachments:[{view:B.getCurrentTexture().createView(),loadOp:"clear",clearValue:v,storeOp:"store"}],depthStencilAttachment:{view:ne.createView(),depthClearValue:1,depthLoadOp:"clear",depthStoreOp:"store"}});r.setPipeline(ie),r.setVertexBuffer(0,W[le]),r.setIndexBuffer(K,"uint32"),r.setBindGroup(0,oe[le]),r.drawIndexed(l),r.end();const n=t.finish();G.queue.submit([n]),requestAnimationFrame(fe)}function ge(){const e=.15+.15*Math.random(),t=2*Math.random()-1,r=2*Math.random()-1;I++,I>=d&&(I=0),T(I,t,r,e,Math.random(),Math.random(),Math.random()),U[4*d]=I,S=!0}function he(e,t){const r=new s.X;return r.load(e),setInterval((()=>{const e=r.getNextFrame();e&&j(e,t)}),10)}requestAnimationFrame(fe),document.createElement("canvas").getContext("2d"),t()}catch(ve){t(ve)}}),1)},573:(e,t,r)=>{function n(e,t){let r=e;for(const[e,n]of Object.entries(t))r=r.replaceAll("#"+e,String(n));return r}r.d(t,{v:()=>n})},309:(e,t,r)=>{r.d(t,{A:()=>n});const n={code:"const NUM_DROPS: u32 = #NUM_DROPS;\nconst NUM_DROP_VERTICES: u32 = #NUM_DROP_VERTICES;\nconst NUM_IMAGES: u32 = #NUM_IMAGES;\n\nstruct VertexOutput {\n  @builtin(position) pos: vec4f,\n  @location(0) color: vec3f,\n  @location(1) uv: vec2f,\n  @location(2) @interpolate(flat) dropIndex: u32,\n}\n\nstruct DropUniforms {\n  colors: array<vec3f, NUM_DROPS>,\n  currentDrop: f32,\n  aspectRatio: vec2f,\n  xyr: vec3f,\n  t: f32,\n}\n\n@group(0) @binding(0) var<uniform> drops: DropUniforms;\n@group(0) @binding(1) var<storage> old_vertices: array<vec2f>;\n@group(0) @binding(2) var dropSampler: sampler;\n@group(0) @binding(3) var dropTexture: texture_2d_array<f32>;\n\n@vertex\nfn vertexMain(\n  @builtin(vertex_index) vertIndex: u32,\n  @location(0) pos: vec2f\n) -> VertexOutput {\n  var output: VertexOutput;\n  let dropIndex = vertIndex / NUM_DROP_VERTICES;\n  var z = f32(dropIndex) - drops.currentDrop - 1;\n  if (z < 0) {\n    z += f32(NUM_DROPS);\n  }\n  let oldPos = select(old_vertices[vertIndex], pos, dropIndex == u32(drops.currentDrop)) * drops.aspectRatio;\n  let targetPos = pos * drops.aspectRatio;\n  let spedUp = min(drops.t * 4.0, 1.0);\n  let mixAmt = 1 - pow(1 - spedUp, 3); // ease out cubic\n  output.pos = vec4f(mix(oldPos, targetPos, mixAmt), (1.0 - (z / f32(NUM_DROPS))) * 0.99, 1);\n  output.color = drops.colors[vertIndex / NUM_DROP_VERTICES];\n  let i = f32(vertIndex % NUM_DROP_VERTICES);\n  let angle = i * ((radians(180) * 2) / f32(NUM_DROP_VERTICES));\n  output.uv = vec2f(cos(angle), sin(angle)) * 0.5 + 0.5;\n  output.dropIndex = dropIndex;\n  return output;\n}\n\n@fragment\nfn fragmentMain(input: VertexOutput) -> @location(0) vec4f {\n  let ret = textureSample(dropTexture, dropSampler, input.uv, input.dropIndex % NUM_IMAGES);\n  if (ret.a < 0.2) {\n    discard;\n  }\n  return ret;\n}\n"}},24:(e,t,r)=>{r.d(t,{A:()=>n});const n={code:"const NUM_DROPS: u32 = #NUM_DROPS;\nconst NUM_DROP_VERTICES: u32 = #NUM_DROP_VERTICES;\nconst TRIANGLES_GENERATED: u32 = #TRIANGLES_GENERATED;\n\n@group(0) @binding(0) var<storage> vertices: array<vec2f>;\n@group(0) @binding(1) var<storage, read_write> triangles: array<u32>;\n\n@compute\n@workgroup_size(#EARCUT_WORKGROUP_SIZE)\nfn computeMain(@builtin(global_invocation_id) drop: vec3u) {\n  if (drop.x >= NUM_DROPS) {\n    return;\n  }\n  let vertexOffset = drop.x * NUM_DROP_VERTICES;\n  \n  var prevVert: array<u32, NUM_DROP_VERTICES>;\n  var nextVert: array<u32, NUM_DROP_VERTICES>;\n\n  // Build up our doubly linked list.\n  for (var i: u32 = 0; i < NUM_DROP_VERTICES; i++) {\n    prevVert[i] = select(NUM_DROP_VERTICES - 1, i - 1, i > 0);\n    nextVert[i] = select(0, i + 1, i < NUM_DROP_VERTICES - 1);\n  }\n\n  var outIdx = TRIANGLES_GENERATED * 3 * drop.x;\n  var currIdx: u32 = 0;\n  var nextIdx: u32 = 1;\n  var prevIdx: u32 = NUM_DROP_VERTICES - 1;\n  const MAX_LOOPS = TRIANGLES_GENERATED * TRIANGLES_GENERATED;\n  for (var x: u32 = 0; x < MAX_LOOPS && prevIdx != nextIdx; x++) {    \n    let a = vertices[vertexOffset + prevIdx];\n    let b = vertices[vertexOffset + currIdx];\n    let c = vertices[vertexOffset + nextIdx];    \n    var isEar = area(a, b, c) < 0;\n    if (isEar) {      \n      var pIdx = nextVert[nextIdx];\n      while (pIdx != prevIdx && isEar) {\n        let pp = vertices[vertexOffset + prevVert[pIdx] ];\n        let p = vertices[vertexOffset + pIdx];\n        let np = vertices[vertexOffset + nextVert[pIdx] ];\n        let inTriangle = isInTriangle(a, b, c, p);\n        if (inTriangle && area(pp, p, np) >= 0) {\n          isEar = false;\n        }\n        pIdx = nextVert[pIdx];\n      }\n    }\n    if (isEar) {\n      triangles[outIdx] = prevIdx + vertexOffset;\n      outIdx++;\n      triangles[outIdx] = currIdx + vertexOffset;      \n      outIdx++;\n      triangles[outIdx] = nextIdx + vertexOffset;\n      outIdx++;\n\n      nextVert[prevIdx] = nextIdx;\n      prevVert[nextIdx] = prevIdx;\n    }\n    currIdx = nextIdx;\n    prevIdx = prevVert[currIdx];\n    nextIdx = nextVert[nextIdx];\n  }\n}\n\nfn isInTriangle(a: vec2f, b: vec2f, c: vec2f, p: vec2f) -> bool {\n  return ( \n    (c.x - p.x) * (a.y - p.y) - (a.x - p.x) * (c.y - p.y) >= 0 &&\n    (a.x - p.x) * (b.y - p.y) - (b.x - p.x) * (a.y - p.y) >= 0 &&\n    (b.x - p.x) * (c.y - p.y) - (c.x - p.x) * (b.y - p.y) >= 0\n  );\n}\n\nfn area(a: vec2f, b: vec2f, c: vec2f) -> f32 {\n  return (b.y - a.y) * (c.x - b.x) - (b.x - a.x) * (c.y - b.y);\n}"}},726:(e,t,r)=>{r.d(t,{A:()=>n});const n={code:"const NUM_DROPS: u32 = #NUM_DROPS;\nconst NUM_DROP_VERTICES: u32 = #NUM_DROP_VERTICES;\nconst TRIANGLES_GENERATED: u32 = #TRIANGLES_GENERATED;\n\nstruct DropUniforms {\n  colors: array<vec3f, NUM_DROPS>,\n  currentDrop: f32,\n  aspectRatio: vec2f,\n  xyr: vec3f,\n}\n\n@group(0) @binding(0) var<storage> vertices: array<vec2f>;\n@group(0) @binding(1) var<storage, read_write> output_vertices: array<vec2f>;\n@group(0) @binding(2) var<uniform> drops: DropUniforms;\n\n@compute\n@workgroup_size(#SIMULATE_WORKGROUP_SIZE)\nfn computeMain(@builtin(global_invocation_id) drop: vec3u) {\n  let vertexIndex = drop.x;\n  if (vertexIndex >= NUM_DROPS * NUM_DROP_VERTICES) {\n    return;\n  }\n  let c = drops.xyr.xy;\n  let r = drops.xyr.z;\n  let dropIndex = vertexIndex / NUM_DROP_VERTICES;\n  if (dropIndex != u32(drops.currentDrop)) {\n    // // normal case\n    let v = vertices[vertexIndex];\n    let pMinusC = (v.x-c.x)*(v.x-c.x)+(v.y-c.y)*(v.y-c.y);\n    let lastTerm = sqrt(1 + r*r / pMinusC);\n    output_vertices[vertexIndex] = c + (v - c) * lastTerm;\n  } else {\n    // init case\n    let i = f32(vertexIndex % NUM_DROP_VERTICES);\n    let angle = i * ((radians(180) * 2) / f32(NUM_DROP_VERTICES));\n    output_vertices[vertexIndex] = vec2f(cos(angle) * r + c.x, sin(angle) * r + c.y);\n  }\n}"}}},i={};function o(e){var t=i[e];if(void 0!==t)return t.exports;var r=i[e]={exports:{}};return a[e](r,r.exports,o),r.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},o.a=(a,i,o)=>{var s;o&&((s=[]).d=-1);var u,d,c,l=new Set,p=a.exports,f=new Promise(((e,t)=>{c=t,d=e}));f[t]=p,f[e]=e=>(s&&e(s),l.forEach(e),f.catch((e=>{}))),a.exports=f,i((a=>{var i;u=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var i=[];i.d=0,a.then((e=>{o[t]=e,n(i)}),(e=>{o[r]=e,n(i)}));var o={};return o[e]=e=>e(i),o}}var s={};return s[e]=e=>{},s[t]=a,s})))(a);var o=()=>u.map((e=>{if(e[r])throw e[r];return e[t]})),d=new Promise((t=>{(i=()=>t(o)).r=0;var r=e=>e!==s&&!l.has(e)&&(l.add(e),e&&!e.d&&(i.r++,e.push(i)));u.map((t=>t[e](r)))}));return i.r?d:o()}),(e=>(e?c(f[r]=e):d(p),n(s)))),s&&s.d<0&&(s.d=0)},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o(156)})();