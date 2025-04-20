 document.getElementById('btnBuscar').addEventListener('click',chamarAPI);
        async function chamarAPI(event) {
         event.preventDefault();
         let input = document.getElementById('input').value;
         if(input.trim()=== ""){
            window.alert('Por favor, insira um link válido ');
         }
         else{
            const url = `https://api.qrserver.com/v1/create-qr-code/?data=${input}&amp;size=100x100` ;
            document.getElementById('img').src = url;
          }
        }
        chamarAPI();