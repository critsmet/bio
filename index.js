document.addEventListener("DOMContentLoaded", () => {
  description.addEventListener("mouseover", (e) => {
    e.target.innerText = "programador en la ciudad de méxico"
  })

  description.addEventListener("mouseout", (e) => {
    e.target.innerText = "software engineer living in mexico city"
  })

})
