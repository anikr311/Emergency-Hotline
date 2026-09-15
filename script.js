// // navbar count
// let heartCount = 0;
// const heartCountDisplays = document.querySelectorAll(".heart-count");
// const heartIcons = document.querySelectorAll(".heart");

// function increaseHeartCount() {
//   heartCount++;
//   updateCount();
// }

// function updateCount() {
//   heartCountDisplays.forEach(function (e) {
//     e.innerText = heartCount;
//   });
// }

// heartIcons.forEach(function (icon) {
//   icon.addEventListener("click", increaseHeartCount);
// });

// // call count

// let coinCount = 100;
// const coinDisplays = document.querySelectorAll(".coin-count");
// const callButtons = document.querySelectorAll(".call-btn");
// const historyContainer = document.getElementById("call-history-container");

// function handleCallClick(event) {
//   const card = event.target.closest(".bg-base-100");
//   const serviceName = card.querySelector(".service-name").textContent;
//   const serviceNumber = card.querySelector(".service-number").textContent;

//   if (coinCount < 20) {
//     alert("Not enough coins!");
//     return;
//   }
//   alert(`Calling ${serviceName}: ${serviceNumber}`);
//     coinCount -= 20;
//   updateCoinDisplay();

 
//   addToHistory(serviceName, serviceNumber);
// }

// function updateCoinDisplay() {
//   coinDisplays.forEach(function (e) {
//     e.innerText = coinCount;
//   });
// }

// function addToHistory(name, number) {
//   const time = new Date().toLocaleTimeString();

//   const entry = document.createElement("div");
//   entry.className = "bg-gray-50 rounded-xl p-3 flex justify-between items-start";
//   entry.innerHTML = `
//     <div class="">
//       <h3 class="font-semibold text-sm">${name}</h3>
//       <p class="text-gray-400 text-sm mt-1">${number}</p>
//     </div>
//     <span class="font-mono text-sm">${time}</span>
//   `;

//   historyContainer.append(entry);
// }

// callButtons.forEach(function (btn) {
//   btn.addEventListener("click", handleCallClick);
// });

// // copy Count

// let copyCount = 2;
// const copyDisplays = document.querySelectorAll(".copy-count");
// const copyButtons = document.querySelectorAll(".copy-btn")

// function copyClick(e){
//   const card = e.target.closest(".bg-base-100")
//   const serviceName = card.querySelector(".service-name").textContent
//   const serviceNumber = card.querySelector(".service-number").textContent

//   alert(`Copied: ${serviceName} - ${serviceNumber}`);

//   copyCount ++;
//   updateCopyDisplay();

// }

// function updateCopyDisplay(){
//   copyDisplays.forEach(function(el){
//     el.innerText = copyCount;
//   });
// }

// copyButtons.forEach(function(btn){
//   btn.addEventListener("click", copyClick);
// });


// // hotline number

// function copyClick(e) {
//   const card = e.target.closest(".bg-base-100");
//   const serviceName = card.querySelector(".service-name").textContent;
//   const serviceNumber = card.querySelector(".service-number").textContent;

//   navigator.clipboard.writeText(serviceNumber)
//     .then(() => {
//       alert(`Copied: ${serviceName} - ${serviceNumber}`);
//       copyCount++;
//       updateCopyDisplay();
//     })
//     .catch(() =>{
//       alert("Failed to copy. Please try again.");
//     });
// }



let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

// function to get inner text 
function getInnerTextNumber(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = Number(elementValue);
  return elementValueNumber;
}

// function to set inner text
function setInnerText(className, value) {
  const elements = document.getElementsByClassName(className);
  for (const element of elements) {
    element.innerText = value;
  }
}

// function to get card details
function getCardDetails(target) {
  const card = target.closest(".bg-base-100");
  const name = card.querySelector(".service-name").innerText;
  const number = card.querySelector(".service-number").innerText;
  return { name, number };
}

// function to add
function addToHistory(name, number) {
  const historyContainer = document.getElementById("call-history-container");
  const emptyState = document.getElementById("empty-history");
  if (emptyState) {
    emptyState.remove();
  }

  const div = document.createElement("div");
  div.innerHTML = `
    <div class="bg-gray-50 rounded-xl p-3 flex justify-between items-start">
      <div class="">
        <h3 class="font-semibold text-sm">${name}</h3>
        <p class="text-gray-400 text-sm mt-1">${number}</p>
      </div>
      <span class="font-mono text-sm">${new Date().toLocaleTimeString()}</span>
    </div>
  `;

  historyContainer.append(div);
}

// heart icon feature
const heartButtons = document.getElementsByClassName("heart");

for (const btn of heartButtons) {
  btn.addEventListener("click", function () {
    const icon = btn.querySelector("i");
    const isSolid = icon.classList.contains("fa-solid");

    if (isSolid) {
      icon.classList.remove("fa-solid", "text-red-500");
      icon.classList.add("fa-regular");
      btn.setAttribute("aria-label", "Add to favorites");
      heartCount = Math.max(0, heartCount - 1);
    } else {
      icon.classList.remove("fa-regular");
      icon.classList.add("fa-solid", "text-red-500");
      btn.setAttribute("aria-label", "Remove from favorites");
      heartCount++;
    }

    setInnerText("heart-count", heartCount);
  });
}

// copy button feature
const copyButtons = document.getElementsByClassName("copy-btn");

for (const btn of copyButtons) {
  btn.addEventListener("click", async function (e) {
    const { name, number } = getCardDetails(e.target);

    try {
      await navigator.clipboard.writeText(number);
      alert(`Copied: ${name} - ${number}`);
      copyCount++;
      setInnerText("copy-count", copyCount);
    } catch (error) {
      alert("Failed to copy. Please try again.");
    }
  });
}

// call button feature
const callButtons = document.getElementsByClassName("call-btn");

for (const btn of callButtons) {
  btn.addEventListener("click", function (e) {
    const { name, number } = getCardDetails(e.target);

    if (coinCount < 20) {
      alert("Not enough coins!");
      return;
    }

    alert(`Calling ${name}: ${number}`);

    coinCount -= 20;
    setInnerText("coin-count", coinCount);

    addToHistory(name, number);
  });
}
// clear history feature
document.getElementById("clear-btn").addEventListener("click", function () {
  const historyContainer = document.getElementById("call-history-container");
  historyContainer.innerHTML = `<div id="empty-history" class="text-center text-gray-400 py-6 text-sm"><i class="fa-regular fa-clock text-2xl mb-2 block"></i>No recent calls</div>`;
});


