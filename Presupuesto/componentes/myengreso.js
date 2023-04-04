import config from "../storage/config.js";
export default{
    showengreso(){
        config.myengreso(data);
        Object.assign(this, JSON.parse(localStorage.getItem("myengreso")));
        
        const ws = new Worker("storage/wsmyengreso.js", { type: "module" });
        
        ws.postMessage({ module: "displayengreso", data: this.flujo });

        ws.addEventListener("message", (e) => {
           
            document.querySelector("#engreso").innerHTML = e.data;
            
            ws.terminate();
        })
    }
}