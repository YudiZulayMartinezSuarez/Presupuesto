export let wsmyengreso={
    showengreso(title, dinner){
        return`
    <div class="card" style ="width: 18rem;">
        <div class="card-body text-danger">
        <h5 class="card-title">${title}</h5>
        <p class="card-text">${dinner}</p>        
        <a href="#" class="btn btn-danger">Eliminar</a>
        </div>
    </div>
        `
    },
    parseString(total) {
        let convertion = total.split('')
        convertion.shift('$')
        return convertion.join('')
    },
    operaccion_less(incoming, current){
        let total_parse = this.parseString(current)
        let total = parseInt(total_parse) - parseInt(incoming)
        let convertion = String(total).split('')
        convertion.unshift('$')
        return convertion.join('')
    }
}
self.addEventListener("message", (e)=>{
    postMessage(
        [
        wsmyengreso.operaccion_less(e.data.resources[1], e.data.resources[2]),
        wsmyengreso.showengreso(e.data.resources[0],e.data.resources[1])
        ]);
});