import config from "../storage/config.js";
export default {
    showHeader(data) {
        config.myHeader(data);
        Object.assign(this, JSON.parse(localStorage.getItem("myHeader")));
        
        const ws = new Worker("storage/wsMyHeader.js", { type: "module" });
        
        ws.postMessage({ module: "displayHeader", data: this.flujo });

        ws.addEventListener("message", (e) => {
           
            document.querySelector("#header").innerHTML = e.data;
            
            ws.terminate();
        })
    }

}