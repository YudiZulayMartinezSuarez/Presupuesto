import config from "../storage/config.js";
export default{
    showContainer(){
        config.datamyContainer();
        
        Object.assign(this,JSON.parse(localStorage.getItem("myContainer")));

        const ws = new Worker("storage/wsMyContainer.js", {type: "module"});

        ws.postMessage({module:"showMyC", data: this.datos});
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            
            document.querySelector("#title").append(...doc.body.children);

            ws.terminate();
        });
    }
};
