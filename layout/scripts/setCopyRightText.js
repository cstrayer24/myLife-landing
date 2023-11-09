const textEl = document.querySelector("p.copyRightText")


console.log(textEl);
textEl.innerHTML = `Copyright &copy; ${new Date().getFullYear()} - All Rights Reserved -
          <a href="#">MyLife</a>`