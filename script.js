function initHoraeData() {
  const horario = document.querySelector('[data-hora="hora"]');
  const data = document.querySelector('[data-data="data"]');
  function verificaZero(n) {
    return n < 10 ? `0${n}` : n;
  }
  function definirDia() {
    let dia = new Date().getDate();
    let mes = new Date().getMonth();
    dia = verificaZero(dia);
    mes = verificaZero(mes);
    const ano = new Date().getFullYear();
    data.innerHTML = `${dia}/${mes}/${ano}`;
  }
  function definirHorario() {
    let hh = new Date().getHours();
    let mm = new Date().getMinutes();
    let ss = new Date().getSeconds();
    hh = verificaZero(hh);
    mm = verificaZero(mm);
    ss = verificaZero(ss);
    const horaFinal = `${hh}:${mm}<span class="segundos">${ss}<span>`;
    horario.innerHTML = horaFinal;
    definirDia();
  }
  if (horario && data) {
    definirHorario();
  }
  setInterval(definirHorario, 1000);
}
initHoraeData();
