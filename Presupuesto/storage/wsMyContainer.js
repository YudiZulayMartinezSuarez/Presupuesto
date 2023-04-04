export let wsmyBanner ={
    showMyC(p1){
        return`
        <h3>${p1.title}</h3>

       `
    },

}

self.addEventListener("message", (e)=>{
    postMessage(wsmyBanner[`${e.data.module}`](e.data.data));
});

