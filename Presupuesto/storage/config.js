export default{
    datamyContainer(){
        localStorage.setItem("myContainer",JSON.stringify({
            datos:{
                title:"Presupuesto Disponible"
            }
        }));
    },
    datamyingreso(){
        localStorage.setItem("myingreso",JSON.stringify({
            datos:{
                title:"INGRESO"
            }
        }));
      },

      datamyengreso(){
        localStorage.setItem("myingreso",JSON.stringify({
            datos:{
                title:"ENGRESO"
            }
        }));
      },

}




  
