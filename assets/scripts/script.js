$(function () {
  $('#myModal').modal('show')
})

function addZero(i) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}

$(function () {
  let d1 = new Date()
  let h = d1.getHours()
  let m = addZero(d1.getMinutes())
  document.getElementById('rlg').innerHTML = h + ':' + m
})

function saudacao() {
  let d = new Date()
  let hora = d.getHours()
  if (hora >= 0 && hora < 12) {
    info = 'Bom dia, '
  } else if (hora >= 12 && hora < 18) {
    info = 'Boa tarde, '
  } else {
    info = 'Boa noite, '
  }

  return info
}

$('#close').click(function () {
  $('#myModal').modal('hide')
  let nome = document.getElementById('nomeInput').value
  document.getElementById('nomeID').innerHTML = saudacao() + nome
})
