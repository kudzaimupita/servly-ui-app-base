import{au as f,k as o,j as e,av as p,aw as b,ax as N,ay as g,r as m}from"./index-blq27-Z7.js";import{C as x}from"./ModernLayout-s0-VUAt_.js";const C=({nft:a,index:t,hoveredIndex:n,setHoveredIndex:c,animateCart:d,setAnimateCart:i})=>{const r=f(),s=o(l=>l.cart.wallet.isConnected),u=l=>{if(!s){alert("Please connect wallet");return}i(!0),r(g(l)),setTimeout(()=>{i(!1)},200)};return e.jsxDEV("div",{className:"border rounded-[10px] relative border-neutral-800",onMouseEnter:()=>c(t),onMouseLeave:()=>c(null),children:e.jsxDEV("div",{className:"relative flex flex-col rounded-[10px] bg-clip-border p-2",children:[e.jsxDEV(p,{height:256,offset:100,once:!0,children:e.jsxDEV("div",{className:"relative w-full h-64 bg-cover bg-center rounded-lg",style:{backgroundImage:`url(${a.bg})`},children:[e.jsxDEV("img",{src:a.nft,className:"absolute inset-0 m-auto h-1/2 w-1/2 object-cover rounded-lg",alt:""},void 0,!1,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/components/NftCard.tsx",lineNumber:37,columnNumber:25},void 0),n===t&&e.jsxDEV("button",{className:"absolute top-3 right-3 p-2 bg-black bg-opacity-70 rounded-full cursor-pointer transition-transform duration-300",onClick:()=>u(a),children:d?e.jsxDEV(b,{},void 0,!1,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/components/NftCard.tsx",lineNumber:48,columnNumber:15},void 0):e.jsxDEV(N,{size:24},void 0,!1,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/components/NftCard.tsx",lineNumber:50,columnNumber:15},void 0)},void 0,!1,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/components/NftCard.tsx",lineNumber:43,columnNumber:13},void 0),e.jsxDEV("button",{className:"absolute top-3 left-3 flex items-center justify-center rounded-full bg-opacity-70 bg-black p-2",children:e.jsxDEV("div",{className:"flex h-full w-full items-center justify-center rounded-full text-sm",children:[a.bitcoin.toFixed(6),e.jsxDEV("span",{className:"ml-1 text-orange-500",children:" BTC "},void 0,!1,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/components/NftCard.tsx",lineNumber:57,columnNumber:33},void 0),e.jsxDEV("span",{className:"mx-2 text-gray-600",children:"|"},void 0,!1,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/components/NftCard.tsx",lineNumber:58,columnNumber:33},void 0),"$ ",a.price.toFixed(2)]},void 0,!0,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/components/NftCard.tsx",lineNumber:55,columnNumber:29},void 0)},void 0,!1,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/components/NftCard.tsx",lineNumber:54,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/components/NftCard.tsx",lineNumber:33,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/components/NftCard.tsx",lineNumber:32,columnNumber:17},void 0),e.jsxDEV("div",{className:"flex items-center justify-between px-1 md:items-start bg-neutral-900 mt-2 rounded-lg",children:e.jsxDEV("div",{className:"m-2",children:[e.jsxDEV("p",{className:"mt-1 text-sm font-medium text-gray-300 md:mt-2",children:a.date},void 0,!1,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/components/NftCard.tsx",lineNumber:66,columnNumber:25},void 0),e.jsxDEV("p",{className:"text-xl font-medium text-white mt-2",children:a.name},void 0,!1,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/components/NftCard.tsx",lineNumber:69,columnNumber:25},void 0),e.jsxDEV("p",{className:"text-lg font-medium text-orange-500 mt-1",children:["QTY: ",a.quantity]},void 0,!0,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/components/NftCard.tsx",lineNumber:72,columnNumber:25},void 0)]},void 0,!0,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/components/NftCard.tsx",lineNumber:65,columnNumber:21},void 0)},void 0,!1,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/components/NftCard.tsx",lineNumber:64,columnNumber:17},void 0)]},void 0,!0,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/components/NftCard.tsx",lineNumber:31,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/components/NftCard.tsx",lineNumber:26,columnNumber:5},void 0)},v=[{id:"1",name:"Orange Ranger",date:"12 Feb 2024, 13:32",quantity:241,price:120,bitcoin:.0018,bg:"https://s3-alpha-sig.figma.com/img/3358/b10f/d23c51af90e6e6f447a62db8e0855ce4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PvfCr39JJ~Iab5m~em77HedXTQQVR76GwcFWM-7ceGMBP0Rtxa8F~U-FlYoPNlhWQIY0tM3praGkBiyIM52wf89suCk-D87-wVRc9mf1uO2qHfboqIMpZTeeLEn8JiHNidGuD4TT5HePsFLF1sRmNMMTGBf81Gv9JJgUn0Wm9wcp7rip8A2ay9Rgae2MLrGHPyGVrKI5zhQGbtKUBUnBJCGqw4MQ0rCE1pRaltfgF3qVSPL3ksYe3lj6pmZMpZ5M7kFOVMmlU2ae9eUhBCDe7KQEKQE-7e35rZF9UitKaIiL7PXlWFcZcNMMi31ASTk5ThTwspe2bWRCHYMefRLt0g__",nft:"https://s3-alpha-sig.figma.com/img/6040/304a/b4fc940f7073cb5aa7a18a0e898fe00e?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oN02B0jP4gSuztha1z6h5sL7JYcZwu3BQZ4LSWYE-~Eu-5mou4ZAfirhD39gL-7MBRlBntPaLExG8NnnmvxHilE9-eymR6TCJ~-dpMtoit8Y2nxNmEE53RwBEoQnaO~-1Q8~llZ48NNJauk3mqRcO7MnCCa76Qwo7Luwu316wxeAFbxcvpa4kMw~ybzhYxjYNnvZixncvkmt4ZWIB1TPH5r32C3Qxcpl19OG3kKaHB4dLEA7AB0IpBtllthOsCwGTqEmMQ5zpmaOLSapf1iY8RchsDkdSJMsBj4mjKkO2XFOiSyfSXuoZPOfDBx4IgBAqaaAN~ATIqKzGtU6BIXNHQ__"},{id:"2",name:"Founders Drop Vault",date:"10 Feb 2024, 13:32",quantity:153,price:20,bitcoin:3e-4,bg:"https://s3-alpha-sig.figma.com/img/1575/c2f8/2017f594ad133c11ae1399c089b9c47c?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CR3p-jxlm8h6G4sd2FiJoRglN58nbw5MMl67haYz3bD8FRGI~vhHZaHVaBLxUAbfaILNGaNEknHQNVmYB65mOZliogYzcYY0QNu-QnA032LjKxlBTkaxRRhCDVj9UOJFnVJC4U9yqL16Nuqw9lk230rgg3RA2NDDwsWdrsNR-qjbeOOo57cLG791B9XHWco-uWvf9BRYsscYTrm-6SLJNTRS7dz5jZUfzB5ZLVPZojeWLKi5tRYPniNd9Rm0oNyISxGjdWVUx76Hc3~EN6bcd8nU2R~DSoK4r4H0qaSRl3NTVI31XZTYPxa228RUnOU2J-FqMkCsPa5aNvfwqY40IA__",nft:"https://s3-alpha-sig.figma.com/img/b0ee/1619/959b969cd8727bc9235ff058bb26f336?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EvnzfdIw-9U7ddqmgTCeprgfKW0s~8YfX88gpBiz-8bTq6TqkcvtStVCKTk8DRawsrnHa66nHyZTwFFe9AhvspjXWp-groztMFGsoD6q9yOU7kjqW0BcXrhz9f66OkPVsQ9IkBGM1HRQY0aOG86PL7mpI7q7HZIrUWJ4TeYfEKgiQkI6zZ2ZRgfH~acGvsWQAQkDnqM7oy7MQ2UZG~0CTXycKC2cOXWuE-gTTY5ZxiUSr76v8sTIEutO2wvh9TuRzeohJkWza8uol3MpMNTICiUKi2g0AAIQ1JUiZQTpUJp8mCiUmi~QajRNWia90Wwet6ilM2bxAPXhDhvD-HO0Kw__"},{id:"3",name:"Halloween Drop Vault",date:"9 Feb 2024, 13:32",quantity:2,price:2e3,bitcoin:.03,bg:"https://s3-alpha-sig.figma.com/img/85d5/0bce/e48f31fba30f6df30a81d93e1cbfa13d?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LZ7i3DFcKXKioBTs3zWyAmxlP-2VubETa9JV8nZPeo5OZpZ9sjUwvpjr~yGgW68eTmtuJsc6FqCLVEugSVMGiJl3uNySzxIOwYiZSxjHF7asbB7THjULP5cYNJ0NT~oqC1qDWLe6jdLLTZ5bVIAtOQqWdTmI-evTHMR8YbbCgSKJQ-hHuByL6CqmiR5iZ4Bd0Tw7Lgo1gZnhx50POq8lC~nPhPi0Z9uISvYiC0i7uUzmruDDEl1YlTZwAp4jL5zv52mdSA4Z7REWMF4Hq3wqT-lZEAz-68hAJ3dJ1bYOWsPTqyfEVhLkv-TkvrqyOEqRk-LCZffEEY4t66c1D~cdIg__",nft:"https://s3-alpha-sig.figma.com/img/b9c3/f0e5/68439f4f9efeb08cf81bbf107aa436b5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dYgmaG4a7VJPfBeOrqBczuDKPyaKANH33B~bTNK6PRb0lj--hs71kvODLwyAC311u~UI1WrCOlOINu7Pe87TZrGAGVGkVfKAqhQ4gU68Gc2fHkXWnjmMFKbRr8VYf0zziiWAMYAc1-7tbDXfaOVe3dBIH0zanr9TndH3CeepWV-LlJGnB1PjrQbvGcni1ECmX-0aLQg2mOQMNyOZZzlYJkzRncD6ofz7DIBlDdktVCGbK9E2hvHZ1Ho7FdUdpxXANUmzancpoO8vaeDQIhHU7PvYnkt25GiVCWj76ef~6K34ahD2G2w2~vvr3Eq7WWlwnkjjvJ4MBlYRZkP~SzjenA__"},{id:"4",name:"Alien Drop Vault",date:"16 Feb 2024, 13:32",quantity:52,price:214,bitcoin:.0032,bg:"https://s3-alpha-sig.figma.com/img/3358/b10f/d23c51af90e6e6f447a62db8e0855ce4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PvfCr39JJ~Iab5m~em77HedXTQQVR76GwcFWM-7ceGMBP0Rtxa8F~U-FlYoPNlhWQIY0tM3praGkBiyIM52wf89suCk-D87-wVRc9mf1uO2qHfboqIMpZTeeLEn8JiHNidGuD4TT5HePsFLF1sRmNMMTGBf81Gv9JJgUn0Wm9wcp7rip8A2ay9Rgae2MLrGHPyGVrKI5zhQGbtKUBUnBJCGqw4MQ0rCE1pRaltfgF3qVSPL3ksYe3lj6pmZMpZ5M7kFOVMmlU2ae9eUhBCDe7KQEKQE-7e35rZF9UitKaIiL7PXlWFcZcNMMi31ASTk5ThTwspe2bWRCHYMefRLt0g__",nft:"https://s3-alpha-sig.figma.com/img/760a/e3d7/998512755fa5d88bf86c4cd7b58b69a8?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ocgXVkM2~BgWJjFe3USziPSn7jdBTYA6Y0c3VeNZt-lqEBaOzbFSXK8N3Xy1hoepXH~qqVWLpBGRnTQHiR4rLaIO0-mFenm6fRlWbDhn-bgvmPygC42Nm6sjrfx2E6zSsOU~QGG8p7JfyoPoZCskVk~zz1LVt~Xg2e~L675b~5C2yHV8pw-PUacc8I07eEp1-BtBjdU21o670l0x4GogPG4pn51v8-TbQnmbLgiy3ptOMoa7sdXnrZwvoR2YrhodFoPl4LQYKgP9QAr8z49SWvjX~CKKOb8HFtj8NBwcd2ZFDXLBKlx0A~7QW8RFcFgSCOP8XlwN-FHKD6o4jaW5uQ__"},{id:"5",name:"Digitek Drop Vault",date:"12 Feb 2024, 13:32",quantity:241,price:211.02,bitcoin:.0032,bg:"https://s3-alpha-sig.figma.com/img/3358/b10f/d23c51af90e6e6f447a62db8e0855ce4?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PvfCr39JJ~Iab5m~em77HedXTQQVR76GwcFWM-7ceGMBP0Rtxa8F~U-FlYoPNlhWQIY0tM3praGkBiyIM52wf89suCk-D87-wVRc9mf1uO2qHfboqIMpZTeeLEn8JiHNidGuD4TT5HePsFLF1sRmNMMTGBf81Gv9JJgUn0Wm9wcp7rip8A2ay9Rgae2MLrGHPyGVrKI5zhQGbtKUBUnBJCGqw4MQ0rCE1pRaltfgF3qVSPL3ksYe3lj6pmZMpZ5M7kFOVMmlU2ae9eUhBCDe7KQEKQE-7e35rZF9UitKaIiL7PXlWFcZcNMMi31ASTk5ThTwspe2bWRCHYMefRLt0g__",nft:"https://s3-alpha-sig.figma.com/img/4870/eb9e/0eea45219e43d9d56dc455d27c177cc1?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dak~wJooI47GpLZelV-pLULexIdYdmdcyUUxwfXnJHh9J~h35mMsqyNaEBg0gA67LVOSt1VEMGHg62mjBmrTWHXFal8EpJAq4RXHRwiFleweV27AXJWQyL-SsVhRE7lYqI9nn45SUr5hr8n3-iIDJ0-Keibz0ePy2pdcxIt3xreyiZo-bDmsze-a80~F3LXaQ3iEfnUPC2a5rAL1ymlmnL4O7WrH8d1QzsuOWtFrryz7uUetAWamOPFQe51ev6MJMLz40Xp7BuZ5k5~kYJcO8nNm6m2mFVuvZ-ZHIiYQbgZCWWF-FFaESIkmndtTtLE009b0NdEXLuIgxvyZSnrbzg__"}],V=()=>{const[a,t]=m.useState([]),[n,c]=m.useState(null),[d,i]=m.useState(!1);return m.useEffect(()=>{(()=>{setTimeout(()=>{t(v)},500)})()},[]),e.jsxDEV(x,{className:"",children:e.jsxDEV("div",{className:"grid w-full sm:grid-cols-2 xl:grid-cols-4 gap-2 mx-84",children:a.map((r,s)=>e.jsxDEV(C,{nft:r,index:s,hoveredIndex:n,setHoveredIndex:c,animateCart:d,setAnimateCart:i},s,!1,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/index.tsx",lineNumber:26,columnNumber:9},void 0))},void 0,!1,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/index.tsx",lineNumber:24,columnNumber:13},void 0)},void 0,!1,{fileName:"C:/tmp/react_build_65cd11c6a45114c65d882f0c_1726916189419/src/views/marketplace/index.tsx",lineNumber:23,columnNumber:5},void 0)};export{V as default};
