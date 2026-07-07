// script.js
let subs = JSON.parse(localStorage.getItem("subs")) || [];
let editIndex = -1;

function saveData() {
  localStorage.setItem("subs", JSON.stringify(subs));
}

function searchSub() {

    const keyword = document.getElementById("search").value.trim().toLowerCase();
    const result = document.getElementById("result");

    result.innerHTML = "";

    if (keyword === "") return;

    serviceList.forEach(service => {

        // 先頭一致のみ
        if (!service.name.toLowerCase().startsWith(keyword)) return;

        const row = document.createElement("div");
        row.className = "resultItem";

        const left = document.createElement("div");
        left.className = "left";
        left.innerHTML = `<b>${service.name}</b>`;

        const select = document.createElement("select");
        select.innerHTML = `<option value="">プラン選択</option>`;

        service.plans.forEach((plan, index) => {

            const option = document.createElement("option");
            option.value = index;

            option.textContent =
                plan.type === "custom"
                    ? "自分で入力"
                    : `${plan.name} ¥${plan.price.toLocaleString()}`;

            select.appendChild(option);

        });

        select.onchange = function () {

            if (this.value === "") return;

            const planSelect = document.getElementById("plan");
            planSelect.innerHTML = "";

            service.plans.forEach((p, i) => {

                const op = document.createElement("option");
                op.value = i;
                op.textContent = p.name;
                planSelect.appendChild(op);

            });

            document.getElementById("name").value = service.name;
            planSelect.value = this.value;

            planChanged();

            // 検索を閉じる
            document.getElementById("search").value = "";
            result.innerHTML = "";

        };

        row.appendChild(left);
        row.appendChild(select);

        result.appendChild(row);

    });

}

function addSub() {

    const name = document.getElementById("name").value.trim();
    const planSelect = document.getElementById("plan");

    if (name === "") {
        alert("サービス名を入力してください");
        return;
    }

    if (planSelect.value === "") {
        alert("プランを選択してください");
        return;
    }

    const service = serviceList.find(s => s.name === name);
    const plan = service ? service.plans[planSelect.value] : null;

    let monthlyPrice = 0;
    let yearlyPrice = 0;
    let planType = "";
    let planName = "";

    if (plan.type === "monthly") {

        monthlyPrice = Number(document.getElementById("monthlyPrice").value);
        planType = "monthly";
        planName = plan.name;

    } else if (plan.type === "yearly") {

        yearlyPrice = Number(document.getElementById("yearlyPrice").value);
        planType = "yearly";
        planName = plan.name;

    } else {

        // 自分で入力
        planName = document.getElementById("customPlanName").value.trim();

        if (planName === "") {
            alert("プラン名を入力してください");
            return;
        }

        const customType =
            document.querySelector('input[name="customType"]:checked').value;

        if (customType === "monthly") {

            planType = "monthly";
            monthlyPrice = Number(document.getElementById("monthlyPrice").value);

            if (monthlyPrice <= 0) {
                alert("月額料金を入力してください");
                return;
            }

        } else {

            planType = "yearly";
            yearlyPrice = Number(document.getElementById("yearlyPrice").value);

            if (yearlyPrice <= 0) {
                alert("年額料金を入力してください");
                return;
            }

        }

    }

    const sub = {
        name: name,
        planName: planName,
        planType: planType,
        monthlyPrice: monthlyPrice,
        yearlyPrice: yearlyPrice,
        day: document.getElementById("day").value,
        renewDate: document.getElementById("renewDate").value
    };

    if (editIndex === -1) {
        subs.push(sub);
    } else {
        subs[editIndex] = sub;
        editIndex = -1;
        document.getElementById("addBtn").textContent = "追加";
    }

    saveData();

    // リセット
    document.getElementById("name").value = "";
    document.getElementById("plan").innerHTML =
        '<option value="">プランを選択</option>';

    document.getElementById("customPlanName").value = "";
    document.getElementById("customPlanArea").style.display = "none";
    document.getElementById("customTypeArea").style.display = "none";

    document.getElementById("monthlyPrice").value = "";
    document.getElementById("yearlyPrice").value = "";
    document.getElementById("day").value = "";
    document.getElementById("renewDate").value = "";

    document.getElementById("monthlyArea").style.display = "block";
    document.getElementById("yearlyArea").style.display = "none";

    render();

}

function editSub(index) {

  const sub = subs[index];

  document.getElementById("name").value = sub.name;

  // プランを復元
  const service = serviceList.find(s => s.name === sub.name);
  const planSelect = document.getElementById("plan");

  planSelect.innerHTML = '<option value="">プランを選択</option>';

  if (service) {

    service.plans.forEach((plan, i) => {

      const op = document.createElement("option");
      op.value = i;
      op.textContent = plan.name;
      planSelect.appendChild(op);

      if (plan.name === sub.planName) {
        planSelect.value = i;
      }

    });

  }

  document.getElementById("monthlyPrice").value = sub.monthlyPrice || "";
  document.getElementById("yearlyPrice").value = sub.yearlyPrice || "";
  document.getElementById("day").value = sub.day || "";
  document.getElementById("renewDate").value = sub.renewDate || "";

  planChanged();

  editIndex = index;
  document.getElementById("addBtn").textContent = "更新";

}

function deleteSub(index) {
  if (!confirm("削除しますか？")) return;
  subs.splice(index, 1);
  saveData();
  render();
}

function planChanged() {

    const serviceName = document.getElementById("name").value;
    const planSelect = document.getElementById("plan");

    if (planSelect.value === "") return;

    const service = serviceList.find(s => s.name === serviceName);
    if (!service) return;

    const plan = service.plans[planSelect.value];

    const monthlyArea = document.getElementById("monthlyArea");
    const yearlyArea = document.getElementById("yearlyArea");
    const customTypeArea = document.getElementById("customTypeArea");
    const customPlanArea = document.getElementById("customPlanArea");

    const monthlyPrice = document.getElementById("monthlyPrice");
    const yearlyPrice = document.getElementById("yearlyPrice");

    // 一旦すべて非表示
    customTypeArea.style.display = "none";
    customPlanArea.style.display = "none";
    monthlyArea.style.display = "none";
    yearlyArea.style.display = "none";

    if (plan.type === "monthly") {

        monthlyArea.style.display = "block";

        monthlyPrice.value = plan.price;
        yearlyPrice.value = "";

        monthlyPrice.readOnly = true;
        yearlyPrice.readOnly = true;

    }
    else if (plan.type === "yearly") {

        yearlyArea.style.display = "block";

        yearlyPrice.value = plan.price;
        monthlyPrice.value = "";

        monthlyPrice.readOnly = true;
        yearlyPrice.readOnly = true;

    }
    else {

        // 自分で入力
        customTypeArea.style.display = "block";
        customPlanArea.style.display = "block";

        monthlyPrice.readOnly = false;
        yearlyPrice.readOnly = false;

        document.getElementById("customPlanName").value = "";

        changeCustomType();

    }

}

function changeCustomType() {

    const type = document.querySelector(
        'input[name="customType"]:checked'
    ).value;

    const monthlyArea = document.getElementById("monthlyArea");
    const yearlyArea = document.getElementById("yearlyArea");

    const monthlyPrice = document.getElementById("monthlyPrice");
    const yearlyPrice = document.getElementById("yearlyPrice");

    if (type === "monthly") {

        monthlyArea.style.display = "block";
        yearlyArea.style.display = "none";

        monthlyPrice.value = "";
        yearlyPrice.value = "";

        monthlyPrice.removeAttribute("readonly");

    } else {

        monthlyArea.style.display = "none";
        yearlyArea.style.display = "block";

        monthlyPrice.value = "";
        yearlyPrice.value = "";

        yearlyPrice.removeAttribute("readonly");

    }

}

function render() {

  const list = document.getElementById("list");
  list.innerHTML = "";

  let monthlyTotal = 0;
  let yearlyTotal = 0;

  subs.forEach((sub, index) => {

    if (sub.monthlyPrice > 0) {
      monthlyTotal += sub.monthlyPrice;
      yearlyTotal += sub.monthlyPrice * 12;
    } else {
      monthlyTotal += Math.round(sub.yearlyPrice / 12);
      yearlyTotal += sub.yearlyPrice;
    }

    const li = document.createElement("li");

    let detail = "";

    if (sub.monthlyPrice > 0) {

      detail = `
        <span class="monthlyTag">月額</span><br>
        <div class="planName">プラン：${sub.planName}</div><br>
        月額：¥${sub.monthlyPrice.toLocaleString()}<br>
        支払日：${sub.day}日
      `;

    } else {

      detail = `
        <span class="yearlyTag">年額</span><br>
        <div class="planName">プラン：${sub.planName}</div><br>
        年額：¥${sub.yearlyPrice.toLocaleString()}<br>
        更新日：${sub.renewDate}
      `;

    }

    li.innerHTML = `
      <b>${sub.name}</b><br>

      ${detail}

      <div class="action">

        <button class="edit"
          onclick="editSub(${index})">
          編集
        </button>

        <button class="delete"
          onclick="deleteSub(${index})">
          削除
        </button>

      </div>
    `;

    list.appendChild(li);

  });

  document.getElementById("monthly").textContent =
    Math.round(monthlyTotal).toLocaleString();

  document.getElementById("yearly").textContent =
    yearlyTotal.toLocaleString();

}

render();
