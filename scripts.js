document.addEventListener('DOMContentLoaded', function () {
  // BOTÃO SOBRE A EMPRESA
  const botao = document.getElementById('btnEmpresa');
  const container = document.getElementById('infoEmpresa');
  let visivel = false;

  if (botao && container) {
    botao.addEventListener('click', function () {
      if (visivel) {
        container.innerHTML = '';
        container.style.display = 'none';
        botao.textContent = 'Sobre a RiskRadar';
        visivel = false;
      } else {
        container.innerHTML = '';
        container.style.display = 'block';
        botao.textContent = 'Fechar';
        visivel = true;

        const titulo = document.createElement('h2');
        titulo.textContent = 'Sobre a RiskRadar';
        container.appendChild(titulo);

        const paragrafos = [
          'A RiskRadar é uma plataforma inovadora voltada para oferecer apoio psicológico a vítimas de calamidades públicas como enchentes, deslizamentos e incêndios.',
          'Nosso propósito é disponibilizar, de forma rápida e acessível, atendimentos psicológicos online e presenciais realizados por profissionais e estagiários capacitados.',
          'Queremos ser uma ponte entre a dor e o acolhimento, ajudando na reconstrução emocional das pessoas atingidas por desastres naturais.',
          'RiskRadar: Cuidando da saúde mental quando mais se precisa.'
        ];

        paragrafos.forEach(texto => {
          const p = document.createElement('p');
          p.textContent = texto;
          container.appendChild(p);
        });
      }
    });
  }

  // FORMULÁRIO DE CONTATO
  const form = document.querySelector('.contact-form');
  if (form) {
    const successMsg = document.createElement('p');
    successMsg.classList.add('sucesso');
    form.parentNode.insertBefore(successMsg, form.nextSibling);

    function getErrorSpan(input) {
      let span = input.nextElementSibling;
      if (!span || !span.classList.contains('erro')) {
        span = document.createElement('span');
        span.classList.add('erro');
        input.parentNode.insertBefore(span, input.nextSibling);
      }
      return span;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let isValid = true;
      successMsg.textContent = '';
      form.querySelectorAll('.erro').forEach(el => el.textContent = '');

      const nome = form.nome.value.trim();
      const email = form.email.value.trim();
      const telefone = form.telefone.value.trim();
      const mensagem = form.mensagem.value.trim();

      if (nome === '') {
        getErrorSpan(form.nome).textContent = 'Por favor, preencha seu nome.';
        isValid = false;
      }

      if (email === '' || !/^\S+@\S+\.\S+$/.test(email)) {
        getErrorSpan(form.email).textContent = 'Insira um e-mail válido.';
        isValid = false;
      }

      if (telefone === '' || !/^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(telefone)) {
        getErrorSpan(form.telefone).textContent = 'Informe um telefone válido.';
        isValid = false;
      }

      if (mensagem.length < 10) {
        getErrorSpan(form.mensagem).textContent = 'A mensagem deve conter pelo menos 10 caracteres.';
        isValid = false;
      }

      if (isValid) {
        form.reset();
        successMsg.textContent = 'Sua mensagem foi enviada! Entraremos em contato o mais rápido possível.';
      }
    });
  }
});
