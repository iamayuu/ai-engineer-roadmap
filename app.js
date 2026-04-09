// ===== STATE =====
const STORAGE_KEY_V2 = 'ai-roadmap-done-v2'; // task-level: keys like "day:taskIndex"
const STORAGE_KEY_V1 = 'ai-roadmap-done-v1'; // legacy day-level
let doneTaskSet = new Set();
let activeFilter = 'all';

const TAG_CLASS = {
  python:    'tag-python',
  dl:        'tag-dl',
  llm:       'tag-llm',
  ml:        'tag-ml',
  mlops:     'tag-mlops',
  cv:        'tag-cv',
  sysdesign: 'tag-sysdesign',
  project:   'tag-project',
  revision:  'tag-revision',
};

const TAG_LABEL = {
  python:    '🐍 Python',
  dl:        '🧠 Deep Learning',
  llm:       '💬 LLMs',
  ml:        '📈 ML',
  mlops:     '⚙️ MLOps',
  cv:        '👁️ CV',
  sysdesign: '🏗️ System Design',
  project:   '🛠️ Project',
  revision:  '🔄 Revision',
};

// ===== PERSIST =====
function taskKey(dayNum, taskIndex) {
  return `${dayNum}:${taskIndex}`;
}

function getTotalTasks() {
  let total = 0;
  ROADMAP.forEach(phase => {
    phase.days.forEach(day => { total += day.tasks.length; });
  });
  return total;
}

function getTotalDays() {
  let total = 0;
  ROADMAP.forEach(phase => {
    total += phase.days.length;
  });
  return total;
}

function isDayDone(day) {
  return day.tasks.every((_, i) => doneTaskSet.has(taskKey(day.n, i)));
}

function setDayDone(day, done) {
  day.tasks.forEach((_, i) => {
    const k = taskKey(day.n, i);
    if (done) doneTaskSet.add(k); else doneTaskSet.delete(k);
  });
}

function loadDone() {
  try {
    const savedV2 = localStorage.getItem(STORAGE_KEY_V2);
    if (savedV2) {
      doneTaskSet = new Set(JSON.parse(savedV2));
      return;
    }

    // Migration: v1 stored completed days by day number.
    const savedV1 = localStorage.getItem(STORAGE_KEY_V1);
    if (savedV1) {
      const daysDone = new Set(JSON.parse(savedV1));
      ROADMAP.forEach(phase => {
        phase.days.forEach(day => {
          if (daysDone.has(day.n)) setDayDone(day, true);
        });
      });
      saveDone();
      try { localStorage.removeItem(STORAGE_KEY_V1); } catch (e) {}
    }
  } catch(e) {}
}

function saveDone() {
  try {
    localStorage.setItem(STORAGE_KEY_V2, JSON.stringify([...doneTaskSet]));
  } catch(e) {}
}

// ===== RENDER TABLE =====
function buildTable() {
  const tbody = document.getElementById('tableBody');
  tbody.innerHTML = '';

  ROADMAP.forEach(phase => {
    // Phase header row
    const phRow = document.createElement('tr');
    phRow.className = 'phase-header-row';
    phRow.setAttribute('data-phase-tags', [...new Set(phase.days.flatMap(d => d.tags))].join(','));
    phRow.innerHTML = `<td colspan="7">
      <span class="phase-label-text" style="color:${phase.phaseColor}">
        <span class="phase-line" style="background:${phase.phaseColor}"></span>
        ${phase.phase}
        <span class="phase-line" style="background:${phase.phaseColor}"></span>
      </span>
    </td>`;
    tbody.appendChild(phRow);

    phase.days.forEach(day => {
      const dayDone = isDayDone(day);

      // Build tags HTML
      const tagsHtml = day.tags.map(t =>
        `<span class="tag ${TAG_CLASS[t]}">${TAG_LABEL[t]}</span>`
      ).join('');

      // Build tasks HTML
      const tasksHtml = day.tasks.map((task, i) => {
        const k = taskKey(day.n, i);
        const isTaskDone = doneTaskSet.has(k);
        return `
          <li class="task-item${isTaskDone ? ' is-done' : ''}" data-day="${day.n}" data-task-index="${i}">
            <input
              type="checkbox"
              class="task-checkbox"
              ${isTaskDone ? 'checked' : ''}
              onchange="toggleTaskDone(${day.n}, ${i}, this)"
              title="Mark task complete"
            >
            <span class="task-text">${task}</span>
          </li>
        `;
      }).join('');

      // Build resources HTML
      const linksHtml = day.links.length
        ? day.links.map(l => `<a class="resource-link" href="${l.u}" target="_blank" rel="noopener">${l.t}</a>`).join('')
        : `<span style="color:var(--text-muted);font-size:13px">—</span>`;

      const tr = document.createElement('tr');
      tr.className = `day-row${dayDone ? ' is-done' : ''}`;
      tr.setAttribute('data-day', day.n);
      tr.setAttribute('data-tags', day.tags.join(','));
      tr.setAttribute('data-search', `day${day.n} ${day.topic} ${day.tasks.join(' ')} ${day.tags.join(' ')}`.toLowerCase());

      tr.innerHTML = `
        <td style="text-align:center;vertical-align:top;padding-top:18px">
          <input type="checkbox" class="done-checkbox" ${dayDone ? 'checked' : ''}
            onchange="toggleDayDone(${day.n}, this)" title="Mark day ${day.n} complete">
        </td>
        <td style="vertical-align:top;padding-top:17px">
          <span class="day-num-badge">Day ${day.n}</span>
        </td>
        <td style="vertical-align:top">
          <div class="topic-name">${day.topic}</div>
        </td>
        <td>
          <ul class="tasks-list">${tasksHtml}</ul>
        </td>
        <td style="vertical-align:top">
          <div class="tags-wrap">${tagsHtml}</div>
        </td>
        <td style="vertical-align:top">${linksHtml}</td>
        <td style="vertical-align:top;padding-top:17px">
          <span class="hrs-badge">${day.hrs}h</span>
        </td>
      `;
      tbody.appendChild(tr);
    });
  });

  updateProgress();
}

function getTaskColor(tag, index) {
  const colors = {
    python:    ['#34d399','#2dd4bf','#22c55e'],
    dl:        ['#5b9cf6','#818cf8','#60a5fa'],
    llm:       ['#f59e0b','#fbbf24','#f97316'],
    mlops:     ['#a78bfa','#c084fc','#818cf8'],
    cv:        ['#fb7185','#f472b6','#fb923c'],
    sysdesign: ['#2dd4bf','#22d3ee','#34d399'],
    project:   ['#fb923c','#f59e0b','#fbbf24'],
    revision:  ['#8a97a8','#6b7280','#94a3b8'],
  };
  const arr = colors[tag] || colors.revision;
  return arr[index % arr.length];
}

// ===== PROGRESS =====
function updateProgress() {
  const totalTasks = getTotalTasks();
  const doneTasks = doneTaskSet.size;
  const pct = totalTasks === 0 ? 0 : ((doneTasks / totalTasks) * 100);

  // Day counts still shown as "days left"
  const totalDays = getTotalDays();
  const doneDays = countDoneDays();

  document.getElementById('doneCount').textContent = doneTasks;
  const totalCountEl = document.getElementById('totalCount');
  if (totalCountEl) totalCountEl.textContent = totalTasks;
  document.getElementById('pctDone').textContent = pct.toFixed(2) + '%';
  document.getElementById('daysLeft').textContent = totalDays - doneDays;

  // SVG ring — circumference 2π×26 ≈ 163.4
  const circ = 163.4;
  const offset = circ - (totalTasks === 0 ? 0 : (doneTasks / totalTasks) * circ);
  document.getElementById('ringFill').style.strokeDashoffset = offset;
}

function countDoneDays() {
  let doneDays = 0;
  ROADMAP.forEach(phase => {
    phase.days.forEach(day => {
      if (isDayDone(day)) doneDays += 1;
    });
  });
  return doneDays;
}

function findDayByNum(dayNum) {
  for (const phase of ROADMAP) {
    const day = phase.days.find(d => d.n === dayNum);
    if (day) return day;
  }
  return null;
}

function syncDayRowUI(dayNum) {
  const row = document.querySelector(`.day-row[data-day="${dayNum}"]`);
  if (!row) return;

  const day = findDayByNum(dayNum);
  if (!day) return;

  const dayDone = isDayDone(day);
  row.classList.toggle('is-done', dayDone);

  const dayCheckbox = row.querySelector('.done-checkbox');
  if (dayCheckbox) dayCheckbox.checked = dayDone;
}

// ===== TOGGLES =====
function toggleTaskDone(dayNum, taskIndex, el) {
  const k = taskKey(dayNum, taskIndex);
  if (el.checked) doneTaskSet.add(k); else doneTaskSet.delete(k);
  saveDone();

  const taskItem = el.closest('.task-item');
  if (taskItem) taskItem.classList.toggle('is-done', el.checked);

  syncDayRowUI(dayNum);
  updateProgress();
}

function toggleDayDone(dayNum, el) {
  const day = findDayByNum(dayNum);
  if (!day) return;

  setDayDone(day, el.checked);
  saveDone();

  // Update all task checkboxes in this row
  const row = el.closest('.day-row');
  if (row) {
    row.querySelectorAll('.task-item').forEach(li => {
      const cb = li.querySelector('.task-checkbox');
      if (cb) cb.checked = el.checked;
      li.classList.toggle('is-done', el.checked);
    });
    row.classList.toggle('is-done', el.checked);
  }

  updateProgress();
}

// ===== EXPORT / IMPORT (sync across devices manually) =====
const EXPORT_SCHEMA_VERSION = 2;

function isKnownTaskKey(k) {
  if (typeof k !== 'string' || !/^\d+:\d+$/.test(k)) return false;
  const [ds, ti] = k.split(':');
  const dayNum = parseInt(ds, 10);
  const taskIndex = parseInt(ti, 10);
  const day = findDayByNum(dayNum);
  return !!(day && taskIndex >= 0 && taskIndex < day.tasks.length);
}

function parseImportPayload(raw) {
  const trimmed = raw.trim();
  if (!trimmed) return { error: 'Paste the exported JSON here.' };
  let parsed;
  try {
    parsed = JSON.parse(trimmed);
  } catch (e) {
    return { error: 'Invalid JSON. Copy the full export from the other device.' };
  }
  let list = null;
  if (Array.isArray(parsed)) {
    list = parsed;
  } else if (parsed && Array.isArray(parsed.doneTasks)) {
    list = parsed.doneTasks;
  } else {
    return { error: 'Expected an array or an object with a "doneTasks" array.' };
  }
  const valid = new Set();
  for (const k of list) {
    if (isKnownTaskKey(k)) valid.add(k);
  }
  return { doneTaskSet: valid };
}

async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.setAttribute('readonly', '');
  ta.style.position = 'fixed';
  ta.style.left = '-9999px';
  document.body.appendChild(ta);
  ta.select();
  try {
    return document.execCommand('copy');
  } finally {
    document.body.removeChild(ta);
  }
}

function downloadJsonFallback(text) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type: 'application/json;charset=utf-8' }));
  a.download = 'ai-roadmap-progress.json';
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
}

let syncToastTimer = null;
function showSyncToast(message) {
  const el = document.getElementById('syncToast');
  if (!el) return;
  el.textContent = message;
  el.hidden = false;
  el.classList.add('is-visible');
  clearTimeout(syncToastTimer);
  syncToastTimer = setTimeout(() => {
    el.classList.remove('is-visible');
    syncToastTimer = setTimeout(() => { el.hidden = true; }, 300);
  }, 2600);
}

async function exportProgress() {
  const payload = {
    version: EXPORT_SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    doneTasks: [...doneTaskSet].sort(),
  };
  const text = JSON.stringify(payload, null, 2);
  try {
    const copied = await copyToClipboard(text);
    if (copied) {
      showSyncToast('Copied progress to clipboard');
      return;
    }
  } catch (e) {}
  downloadJsonFallback(text);
  showSyncToast('Downloaded ai-roadmap-progress.json');
}

function openImportDialog() {
  const dlg = document.getElementById('importDialog');
  const err = document.getElementById('importError');
  const ta = document.getElementById('importTextarea');
  if (err) {
    err.hidden = true;
    err.textContent = '';
  }
  if (ta) ta.value = '';
  if (dlg && typeof dlg.showModal === 'function') dlg.showModal();
}

function closeImportDialog() {
  const dlg = document.getElementById('importDialog');
  const err = document.getElementById('importError');
  const ta = document.getElementById('importTextarea');
  if (err) {
    err.hidden = true;
    err.textContent = '';
  }
  if (ta) ta.value = '';
  if (dlg) dlg.close();
}

function applyImport() {
  const ta = document.getElementById('importTextarea');
  const errEl = document.getElementById('importError');
  const raw = ta ? ta.value : '';
  const result = parseImportPayload(raw);
  if (result.error) {
    if (errEl) {
      errEl.textContent = result.error;
      errEl.hidden = false;
    }
    return;
  }
  if (errEl) errEl.hidden = true;
  doneTaskSet = result.doneTaskSet;
  saveDone();
  buildTable();
  applyFilters();
  closeImportDialog();
  showSyncToast('Progress imported');
}

// ===== FILTERS =====
function setFilter(filter, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeFilter = filter;
  applyFilters();
}

function applyFilters() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();

  document.querySelectorAll('.day-row').forEach(row => {
    const tags = row.getAttribute('data-tags');
    const search = row.getAttribute('data-search');
    const tagMatch = activeFilter === 'all' || tags.includes(activeFilter);
    const searchMatch = !q || search.includes(q);
    row.classList.toggle('hidden', !(tagMatch && searchMatch));
  });

  // Show/hide phase headers
  document.querySelectorAll('.phase-header-row').forEach(ph => {
    const phaseTags = ph.getAttribute('data-phase-tags');
    const tagMatch = activeFilter === 'all' || phaseTags.includes(activeFilter);
    // Check if any visible rows follow this header
    let hasVisible = false;
    let next = ph.nextElementSibling;
    while (next && !next.classList.contains('phase-header-row')) {
      if (!next.classList.contains('hidden')) { hasVisible = true; break; }
      next = next.nextElementSibling;
    }
    ph.classList.toggle('hidden', !tagMatch || !hasVisible);
  });
}

// ===== FOOTER DATE =====
function setFooterDate() {
  const el = document.getElementById('footerDate');
  if (el) {
    const now = new Date();
    el.textContent = `Started: ${now.toLocaleDateString('en-IN', { year:'numeric', month:'long', day:'numeric' })}`;
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  loadDone();
  buildTable();
  setFooterDate();
});
