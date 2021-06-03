console.log('JS dodany')

const forma = document.querySelector('form')
const input = document.querySelector('input')
let message1 = document.getElementById('message-1')
let message2 = document.getElementById('message-2')

forma.addEventListener('submit',(evt)=>{
    evt.preventDefault()
    message1.innerText='Loading...'
    const input_value = input.value
const url = `/weather?szukaj=${input_value}`
    console.log(input_value)
    fetch(url).then((resp)=>{
       return resp.json()
    }).then((data)=>{
        console.log(data)
        if(data.error){
            message1.innerText = data.error
        } else{message1.innerText=data.place
            message2.innerText= `Temperatura: ${data.forecast.temp},${data.forecast.cloud}`
        }
        
    }).catch((reason)=>{
        console.log(reason)
    })
})