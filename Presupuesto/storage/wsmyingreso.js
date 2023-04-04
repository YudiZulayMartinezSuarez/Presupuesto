export let wsmyingreso={
    showingreso(){
        return`
        <a class="navbar-brand" href="#">${title}</a>
        `
    },
}
self.addEventListener("message", (e)=>{
    postMessage(wsmyingreso[`${e.data.module}`](e.data.data));
});