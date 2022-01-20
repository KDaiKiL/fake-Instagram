// atividade 1

document.querySelector('.avatar-content div').innerHTML = '<strong>Nome Usuário</strong>'


// document.querySelector('input[type=text]').placeholder = 'Digite seu primeiro nome'

document.getElementsByName('name')[0].placeholder = 'Digite o seu primeiro nome'

////////////////////////////////////////////////////////////////////////////////

// atividade 2

document.querySelectorAll('input').forEach(element => element.style.borderRadius = '4px')


let form = document.getElementsByClassName('form-auth card')[0]

form.style.display = 'flex'

form.style.flexDirection = 'column'


document.querySelector('body').style.backgroundColor = '#fafafa'


// SEARCH (extra)

document.getElementsByClassName('search')[0].style.cssText = 'background: #f7f7f7; padding: 7px 29px; color: gray; border: 0.5px solid #bbbbbb; border-radius: 4px;'