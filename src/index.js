console.log('%c HI', 'color: firebrick')

const btn = document.querySelector('.button')
btn.addEventListener('click', function () {
  window.location.reload()
})

/**--------------- Challenge 1 ------------ */
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4'

function fetchDogs() {
  return fetch(imgUrl)
    .then((resp) => resp.json())
    .then((json) => getBreeds(json))
}

function getBreeds(images) {
  const div = document.getElementById('dog-image-container')
  images.message.forEach((element) => {
    const img = document.createElement('img')
    img.src = element
    div.appendChild(img)
    img.setAttribute('width', '22%')
  })
}

document.addEventListener('DOMContentLoaded', function () {
  fetchDogs()
})

/**--------------- Challenge 2 ------------ */
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchAllBreeds() {
  fetch(breedUrl)
    .then((resp) => resp.json())
    .then(function (json) {
      getAllBreeds(json)
      getAbreeds(json)
      getBbreeds(json)
      getCbreeds(json)
      getDbreeds(json)
    })
}

document.addEventListener('DOMContentLoaded', function () {
  fetchAllBreeds()
})

let ul = document.querySelector('#list')

function getAllBreeds(breeds) {
  for (let unit in breeds.message) {
    let li = document.createElement('li')
    li.innerText = unit
    ul.appendChild(li) /** can add just ul id name "list" as its uniqe */

    /**--------------- Challenge 3 random color on click------------ */
    li.addEventListener('click', function () {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16)
      li.style.color = '#' + randomColor
      // li.style.color = 'red'
    })
  }
}
/**--------------- Challenge 4 Select options------------ */

function getAbreeds(breeds) {
  const dropDown = document.querySelector('select#breed-dropdown')

  dropDown.addEventListener('change', function (event) {
    const val = event.target.value
    if (val === 'a') {
      for (let unit in breeds.message) {
        if (unit.charAt(0) == 'a') {
          let li = document.createElement('li')
          li.innerHTML = unit
          ul.replaceChildren(li)
        }
      }
    }
  })
}

function getBbreeds(breeds) {
  const dropDown = document.querySelector('select#breed-dropdown')

  dropDown.addEventListener('change', function (event) {
    const val = event.target.value
    if (val === 'b') {
      for (let unit in breeds.message) {
        if (unit.charAt(0) == 'b') {
          let li = document.createElement('li')
          li.innerText = unit
          ul.replaceChildren(li)
        }
      }
    }
  })
}

function getCbreeds(breeds) {
  const dropDown = document.querySelector('select#breed-dropdown')

  dropDown.addEventListener('change', function (event) {
    const val = event.target.value
    if (val === 'c') {
      for (let unit in breeds.message) {
        if (unit.charAt(0) == 'c') {
          let li = document.createElement('li')
          li.innerText = unit
          ul.replaceChildren(li)
        }
      }
    }
  })
}

function getDbreeds(breeds) {
  const dropDown = document.querySelector('select#breed-dropdown')

  dropDown.addEventListener('change', function (event) {
    const val = event.target.value
    if (val === 'd') {
      for (let unit in breeds.message) {
        if (unit.charAt(0) == 'd') {
          let li = document.createElement('li')
          li.innerText = unit
          ul.replaceChildren(li)
        }
      }
    }
  })
}

