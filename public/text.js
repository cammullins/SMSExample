let btns = document.getElementsByClassName('btn');
const btnListener = e => {
    let { btn, carrier } = e.target.dataset;
    let phoneNumber = document.getElementById(btn).value;
    phoneNumber = `+1${phoneNumber}`
    phoneNumber = phoneNumber.replace(/[ ()-]/gi, () => '')
    const body = {
        phoneNumber: phoneNumber,
        carrier: carrier
    }
    fetch('/sendText',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    }).then( res => console.log(res))
}

Array.from(btns).forEach(btn => {
    btn.addEventListener("click", btnListener)
});