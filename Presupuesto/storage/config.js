export default{
    datamyContainer(){
        localStorage.setItem("myContainer",JSON.stringify({
            datos:{
                title:"Presupuesto Disponible",
                dinner: "$0",
                renevu: "Ingreso",
                expenses: "Egresos"
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




  
