function user_name() {
    // let name = prompt('Как Вас зовут?')
    let name = document.getElementById("name_h").value
    // alert(`Привет, ${name}!`)
    console.log(name)
    const result = name
    document.getElementById("result").innerText = result

}