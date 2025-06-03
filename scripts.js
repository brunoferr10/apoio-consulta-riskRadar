document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById('btnEmpresa');
  const container = document.getElementById('infoEmpresa');
  let visivel = false;

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

      const paragrafo1 = document.createElement('p');
      paragrafo1.textContent = 'A RiskRadar é uma plataforma inovadora voltada para oferecer apoio psicológico a vítimas de calamidades públicas como enchentes, deslizamentos e incêndios.';
      container.appendChild(paragrafo1);

      const paragrafo2 = document.createElement('p');
      paragrafo2.textContent = 'Nosso propósito é disponibilizar, de forma rápida e acessível, atendimentos psicológicos online e presenciais realizados por profissionais e estagiários capacitados.';
      container.appendChild(paragrafo2);

      const paragrafo3 = document.createElement('p');
      paragrafo3.textContent = 'Queremos ser uma ponte entre a dor e o acolhimento, ajudando na reconstrução emocional das pessoas atingidas por desastres naturais.';
      container.appendChild(paragrafo3);

      const paragrafo4 = document.createElement('p');
      paragrafo4.textContent = 'RiskRadar: Cuidando da saúde mental quando mais se precisa.';
      container.appendChild(paragrafo4);
    }
  });
});
