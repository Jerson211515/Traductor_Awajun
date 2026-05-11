let currentSector = null;

function openSector(sectorKey) {
  currentSector = sectorKey;
  const sector = SECTORES[sectorKey];

  document.getElementById('screen-home').style.display = 'none';
  document.getElementById('screen-sector').style.display = 'block';
  document.getElementById('sector-title').textContent = sector.nombre;
  document.getElementById('sector-desc').textContent = sector.descripcion;
  document.getElementById('search-input').value = '';
  document.getElementById('search-result').style.display = 'none';

  renderSituations(sector);
  window.scrollTo(0, 0);
}

function goHome() {
  document.getElementById('screen-sector').style.display = 'none';
  document.getElementById('screen-home').style.display = 'block';
  window.scrollTo(0, 0);
}

function renderSituations(sector) {
  const container = document.getElementById('situations-container');
  container.innerHTML = '';

  sector.situaciones.forEach((sit, i) => {
    const group = document.createElement('div');
    group.className = 'situation-group';

    const title = document.createElement('div');
    title.className = 'situation-title';
    title.innerHTML = `<span>${sit.titulo}</span><span class="chevron">▼</span>`;
    title.onclick = () => toggleSituation(title, list);

    const list = document.createElement('div');
    list.className = 'phrases-list';
    if (i === 0) { list.classList.add('open'); title.classList.add('open'); }

    sit.frases.forEach(frase => {
      const item = document.createElement('div');
      item.className = 'phrase-item';

      const isPendiente = !frase.awj || frase.awj === 'PENDIENTE';
      const tienePro = frase.pro && frase.pro !== 'PENDIENTE';

      item.innerHTML = `
        <div class="esp">${frase.esp}${isPendiente ? '<span class="tag-pendiente">pendiente</span>' : ''}</div>
        <div class="awj">${isPendiente ? '(Traducción pendiente de validación)' : frase.awj}</div>
        ${tienePro ? `<div class="pro">🔊 ${frase.pro}</div>` : (isPendiente ? '' : '<div class="pro pro-pendiente">🔊 Pronunciación pendiente</div>')}
        <div class="tap-hint">${isPendiente ? '' : 'Toca para ver la traducción'}</div>
      `;

      if (!isPendiente) {
        item.onclick = () => item.classList.toggle('revealed');
      }

      list.appendChild(item);
    });

    group.appendChild(title);
    group.appendChild(list);
    container.appendChild(group);
  });
}

function toggleSituation(titleEl, listEl) {
  titleEl.classList.toggle('open');
  listEl.classList.toggle('open');
}

function searchPhrase() {
  const query = document.getElementById('search-input').value.trim().toLowerCase();
  const resultBox = document.getElementById('search-result');
  const resultText = document.getElementById('search-result-text');
  const resultPro = document.getElementById('search-result-pro');

  if (!query || !currentSector) {
    resultBox.style.display = 'none';
    return;
  }

  const sector = SECTORES[currentSector];
  let found = null;

  for (const sit of sector.situaciones) {
    for (const frase of sit.frases) {
      if (frase.esp.toLowerCase().includes(query) && frase.awj && frase.awj !== 'PENDIENTE') {
        found = frase;
        break;
      }
    }
    if (found) break;
  }

  if (found) {
    resultText.textContent = found.awj;
    if (found.pro && found.pro !== 'PENDIENTE') {
      resultPro.textContent = '🔊 ' + found.pro;
      resultPro.style.display = 'block';
    } else {
      resultPro.style.display = 'none';
    }
    resultBox.style.display = 'block';
  } else {
    resultText.textContent = 'No se encontró coincidencia en este sector.';
    resultPro.style.display = 'none';
    resultBox.style.display = 'block';
  }
}
