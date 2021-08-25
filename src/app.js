let currentY = window.pageYOffset;

window.onscroll = () => {
  const fakeH = document.querySelector('#fakeHeader');
  const footer = document.querySelector("#footerMobile");
  const search = document.querySelector("#searchBar");

  if (window.innerWidth > 375) {
    // Escritorio
  } else {
    if (window.pageYOffset < currentY){
      footer.classList.add('hide');
      search.classList.add('hide');
      currentY = window.pageYOffset;
    }
    else {
      footer.classList.remove('hide');
      search.classList.remove('hide');
      currentY = window.pageYOffset;
    }
    // Movil
  }
};
