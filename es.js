async function checkDomain()
{
    var email = document.getElementById("email")
    let link = email.value
    let url = "https://open.kickbox.com/v1/disposable/"+link

    let raw = await fetch(url)
    let data = await raw.json()

    console.log(data)

    if(!data.disposable)
        alert("E-Mail is Valid.")
    else
        alert("Invalid E-Mail!")
}
