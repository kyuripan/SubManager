const serviceList = [
    { name: "Netflix", price: 890 },
    { name: "Spotify", price: 980 },
    { name: "ChatGPT Plus", price: 3000 },
    { name: "Amazon Prime", price: 600 },
    { name: "Disney+", price: 1140 },
    { name: "YouTube Premium", price: 1280 },
    { name: "Apple Music", price: 1080 },
    { name: "Hulu", price: 1026 },
    { name: "U-NEXT", price: 2189 }
];

let subs = JSON.parse(localStorage.getItem("subs")) || [];

let editIndex = -1;

function saveData() {

    localStorage.setItem("subs", JSON.stringify(subs));

}

function searchSub() {

    const keyword = document.getElementById("search").value.toLowerCase();

    const result = document.getElementById("result");

    result.innerHTML = "";

    let found = false;

    serviceList.forEach(service => {

        if (service.name.toLowerCase().includes(keyword)) {

            found = true;

            const item = document.createElement("div");

            item.className = "resultItem";

            item.innerHTML = `
                <div class="left">
                    <b>${service.name}</b><br>
                    <small>¥${service.price}</small>
                </div>

                <button class="selectBtn">選択</button>
            `;

            item.querySelector(".selectBtn").onclick = function () {

                selectSub(service.name, service.price);

            };

            result.appendChild(item);

        }

    });

    if (!found) {

        result.innerHTML = "<p>見つかりませんでした。</p>";

    }

}

function selectSub(name, price) {

    document.getElementById("name").value = name;
    document.getElementById("price").value = price;

}

function addSub() {

    const name = document.getElementById("name").value.trim();
    const price = Number(document.getElementById("price").value);
    const day = Number(document.getElementById("day").value);

    if (name === "") {

        alert("サービス名を入力してください");
        return;

    }

    if (price <= 0) {

        alert("料金を入力してください");
        return;

    }

    if (day < 1 || day > 31) {

        alert("支払日は1～31日です");
        return;

    }

    if (editIndex == -1) {

        subs.push({
            name: name,
            price: price,
            day: day
        });

    } else {

        subs[editIndex] = {
            name: name,
            price: price,
            day: day
        };

        editIndex = -1;

        document.getElementById("addBtn").textContent = "追加";

    }

    saveData();

    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("day").value = "";

    render();

}

function editSub(index) {

    document.getElementById("name").value = subs[index].name;
    document.getElementById("price").value = subs[index].price;
    document.getElementById("day").value = subs[index].day;

    editIndex = index;

    document.getElementById("addBtn").textContent = "更新";

}

function deleteSub(index) {

    if (confirm("削除しますか？")) {

        subs.splice(index, 1);

        saveData();

        render();

    }

}

function render() {

    const list = document.getElementById("list");

    list.innerHTML = "";

    let total = 0;

    subs.forEach((sub, index) => {

        total += Number(sub.price);

        const li = document.createElement("li");

        li.innerHTML = `
            <b>${sub.name}</b><br>
            月額：¥${Number(sub.price).toLocaleString()}<br>
            支払日：${sub.day}日

            <div class="action">
                <button class="edit" onclick="editSub(${index})">
                    編集
                </button>

                <button class="delete" onclick="deleteSub(${index})">
                    削除
                </button>
            </div>
        `;

        list.appendChild(li);

    });

    document.getElementById("monthly").textContent =
        total.toLocaleString();

    document.getElementById("yearly").textContent =
        (total * 12).toLocaleString();

}

render();