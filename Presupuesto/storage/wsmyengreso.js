export let wsmyengreso={
    showengreso(){
        return`
        <a class="navbar-brand" href="#">${title}</a>
        `
    },
}
self.addEventListener("message", (e)=>{
    postMessage(wsmyengreso[`${e.data.module}`](e.data.data));
});