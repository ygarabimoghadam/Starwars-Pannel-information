
var response
var myJson
var json0
var flag = true
var arrrr = []
var array = []
var array2 = []
var array3 = []
var array4 = []
async function information(ind) {

    var url_temp = 'https://swapi.dev/api/films/' + ind
    var response0 = await fetch(url_temp)
    myJson = await response0.json();
    var parsed = JSON.stringify(myJson)
    var userdata = JSON.parse(parsed);
    arrrr = []
    array = []
    array = userdata["starships"]

    for (let i = 0; i < array.length; i++) {
        response = await fetch(array[[i]])
        json0 = await response.json()
        var parsed0 = JSON.stringify(json0)
        var userdata0 = JSON.parse(parsed0);
        arrrr.push(userdata0["name"]);
    }
}
async function parseJSON(ind) {
    await information(ind);

    if (flag) {
        console.log(flag)
        document.getElementById("container").style.display = "none";
        document.getElementById("title").style.display = "none";
        flag = false
    }
    if (!flag) {
        flag = true
        document.getElementById("item-container").style.display = "flex"
    }

    document.getElementById("key1").innerText = ''
    document.getElementById("name").innerText = ''
    const list = document.getElementById("key1");

    for (let j = 0; j < arrrr.length; j++) {
        const entry = document.createElement('li')
        const link = document.createElement('a')
        link.appendChild(document.createTextNode(arrrr[j]))

        link.href = "#"
        link.addEventListener('click', function () {
            content(j);
        });
        entry.appendChild(link)

        list.appendChild(entry)
    }
}

async function content(j) {
    document.getElementById("name").innerText = ''
    var response2 = await fetch(array[[j]])
    var json2 = await response2.json()
    var parsed2 = JSON.stringify(json2)
    var userdata2 = JSON.parse(parsed2)
    array2 = []
    array2.push(userdata2["name"])
    j = 0
    var s = JSON.stringify(array2[j])
    s = "Name:  " + s
    const list = document.getElementById("name")
    const entry = document.createElement('li')
    entry.appendChild(document.createTextNode(s))
    list.appendChild(entry)
    array2.push(userdata2["model"])
    var s = JSON.stringify(array2[j + 1])
    s = "Model:  " + s
    const list1 = document.getElementById("name")
    const entry1 = document.createElement('li')
    entry1.appendChild(document.createTextNode(s))
    list1.appendChild(entry1)
    array2.push(userdata2["manufacturer"])
    var s = JSON.stringify(array2[j + 2])
    s = "Manufacture:" + s
    const list2 = document.getElementById("name")
    const entry2 = document.createElement('li')
    entry2.appendChild(document.createTextNode(s))
    list2.appendChild(entry2)
    array2.push(userdata2["crew"])
    var s = JSON.stringify(array2[j + 3])
    s = "Crew:  " + s
    const list3 = document.getElementById("name")
    const entry3 = document.createElement('li')
    entry3.appendChild(document.createTextNode(s))
    list3.appendChild(entry3)
    array2.push(userdata2["passengers"])
    var s = JSON.stringify(array2[j + 4])
    s = "Passengers:  " + s
    const list4 = document.getElementById("name")
    const entry4 = document.createElement('li')
    entry4.appendChild(document.createTextNode(s))
    list4.appendChild(entry4)
    array3 = []
    array3 = userdata2["films"]

    for (let i = 0; i < array3.length; i++) {
        var response3 = await fetch(array3[i])
        var json3 = await response3.json()
        var parsed3 = JSON.stringify(json3)
        var userdata3 = JSON.parse(parsed3)
        var s = (userdata3["title"])
        s = JSON.stringify(s)
        const list6 = document.getElementById("name")
        const entry6 = document.createElement('li')
        entry6.appendChild(document.createTextNode(s))
        list6.appendChild(entry6)
    }
}

function clickbutton() {
    document.getElementById("container").style.display = "flex";
    document.getElementById("title").style.display = "flex";
    document.getElementById("item-container").style.display = "none"
    arrrr = []
    array = []
    array2 = []
    array3 = []
    array4 = []
    document.getElementById("movie-item").innerText = ''
}