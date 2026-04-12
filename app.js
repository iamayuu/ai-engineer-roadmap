// ===== MODE =====
const MODE_STORAGE_KEY = 'roadmap-active-mode';
/** @type {'ai' | 'dsa'} */
let activeMode = 'ai';

const STORAGE_KEY_AI = 'ai-roadmap-done-v2';
const STORAGE_KEY_AI_LEGACY = 'ai-roadmap-done-v1';
const STORAGE_KEY_DSA = 'dsa-roadmap-done-v1';

let doneTaskSet = new Set();
let dsaDoneSet = new Set();
let activeFilter = 'all';
let activeDsaFilter = 'all';

const TAG_CLASS = {
  python: 'tag-python',
  dl: 'tag-dl',
  llm: 'tag-llm',
  ml: 'tag-ml',
  mlops: 'tag-mlops',
  cv: 'tag-cv',
  sysdesign: 'tag-sysdesign',
  project: 'tag-project',
  revision: 'tag-revision',
};

const TAG_LABEL = {
  python: '🐍 Python',
  dl: '🧠 Deep Learning',
  llm: '💬 LLMs',
  ml: '📈 ML',
  mlops: '⚙️ MLOps',
  cv: '👁️ CV',
  sysdesign: '🏗️ System Design',
  project: '🛠️ Project',
  revision: '🔄 Revision',
};

const EXPORT_SCHEMA_VERSION = 3;

// ===== AI HELPERS =====
function taskKey(dayNum, taskIndex) {
  return `${dayNum}:${taskIndex}`;
}

function getTotalTasks() {
  let total = 0;
  ROADMAP.forEach(phase => {
    phase.days.forEach(day => {
      total += day.tasks.length;
    });
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
    if (done) doneTaskSet.add(k);
    else doneTaskSet.delete(k);
  });
}

function loadAiDone() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_AI);
    if (saved) {
      doneTaskSet = new Set(JSON.parse(saved));
      return;
    }
    const legacy = localStorage.getItem(STORAGE_KEY_AI_LEGACY);
    if (legacy) {
      const daysDone = new Set(JSON.parse(legacy));
      ROADMAP.forEach(phase => {
        phase.days.forEach(day => {
          if (daysDone.has(day.n)) setDayDone(day, true);
        });
      });
      saveAiDone();
      try {
        localStorage.removeItem(STORAGE_KEY_AI_LEGACY);
      } catch (e) {}
    }
  } catch (e) {}
}

function saveAiDone() {
  try {
    localStorage.setItem(STORAGE_KEY_AI, JSON.stringify([...doneTaskSet]));
  } catch (e) {}
}

// ===== DSA HELPERS =====
function dsaKey(topicId, problemIndex) {
  return `${topicId}:${problemIndex}`;
}

function getDsaTotalProblems() {
  let n = 0;
  DSA_ROADMAP.forEach(t => {
    n += t.problems.length;
  });
  return n;
}

function loadDsaDone() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_DSA);
    if (saved) dsaDoneSet = new Set(JSON.parse(saved));
  } catch (e) {}
}

function saveDsaDone() {
  try {
    localStorage.setItem(STORAGE_KEY_DSA, JSON.stringify([...dsaDoneSet]));
  } catch (e) {}
}

function countDsaTopicsComplete() {
  let c = 0;
  DSA_ROADMAP.forEach(topic => {
    const ok = topic.problems.every((_, i) => dsaDoneSet.has(dsaKey(topic.id, i)));
    if (ok) c += 1;
  });
  return c;
}

function isKnownDsaKey(k) {
  if (typeof k !== 'string') return false;
  const i = k.lastIndexOf(':');
  if (i <= 0) return false;
  const topicId = k.slice(0, i);
  const idx = parseInt(k.slice(i + 1), 10);
  if (!Number.isFinite(idx) || idx < 0) return false;
  const topic = DSA_ROADMAP.find(t => t.id === topicId);
  return !!(topic && idx < topic.problems.length);
}

// ===== MODE UI =====
function loadMode() {
  try {
    const m = localStorage.getItem(MODE_STORAGE_KEY);
    if (m === 'dsa' || m === 'ai') activeMode = m;
  } catch (e) {}
}

function saveMode() {
  try {
    localStorage.setItem(MODE_STORAGE_KEY, activeMode);
  } catch (e) {}
}

function setRoadmapMode(mode) {
  if (mode !== 'ai' && mode !== 'dsa') return;
  activeMode = mode;
  saveMode();

  const body = document.getElementById('appBody');
  body.classList.remove('mode-ai', 'mode-dsa');
  body.classList.add(mode === 'ai' ? 'mode-ai' : 'mode-dsa');

  document.getElementById('panelAi').classList.toggle('is-active', mode === 'ai');
  document.getElementById('panelDsa').classList.toggle('is-active', mode === 'dsa');

  document.getElementById('switchAi').classList.toggle('is-active', mode === 'ai');
  document.getElementById('switchDsa').classList.toggle('is-active', mode === 'dsa');

  const metaAi = document.getElementById('headerMetaAi');
  const metaDsa = document.getElementById('headerMetaDsa');
  metaAi.hidden = mode !== 'ai';
  metaDsa.hidden = mode !== 'dsa';

  document.getElementById('filterGroupAi').hidden = mode !== 'ai';
  document.getElementById('filterGroupDsa').hidden = mode !== 'dsa';

  document.getElementById('statDaysWrap').hidden = mode !== 'ai';
  document.getElementById('statTopicsWrap').hidden = mode !== 'dsa';

  document.getElementById('logoTitle').textContent = mode === 'ai' ? 'AI Roadmap for Ayuu' : 'DSA — 300 problems';
  document.getElementById('logoSub').textContent =
    mode === 'ai' ? '12-week engineering track' : 'Topic-led practice (LeetCode palette)';
  document.getElementById('logoIcon').textContent = mode === 'ai' ? '⬡' : '◆';

  document.title =
    mode === 'ai' ? 'AI Engineer Roadmap — 12-Week Plan' : 'DSA Roadmap — 300 Problems';

  const foot = document.getElementById('footerLine');
  const fd = document.getElementById('footerDate');
  if (foot && fd) {
    const lead =
      mode === 'ai'
        ? 'Built for focus. Track daily, ship weekly. '
        : 'Solve by patterns. Checkbox syncs progress instantly. ';
    foot.textContent = '';
    foot.append(document.createTextNode(lead));
    foot.appendChild(fd);
  }

  updateSearchPlaceholder();
  updateProgress();
  applyFilters();
}

function updateSearchPlaceholder() {
  const inp = document.getElementById('searchInput');
  if (!inp) return;
  inp.placeholder =
    activeMode === 'ai'
      ? 'Search topics, tools, days…'
      : 'Search problems, topics, difficulty…';
}

// ===== RENDER AI TABLE =====
function buildAiTable() {
  const tbody = document.getElementById('tableBodyAi');
  tbody.innerHTML = '';

  ROADMAP.forEach(phase => {
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
      const tagsHtml = day.tags.map(t => `<span class="tag ${TAG_CLASS[t]}">${TAG_LABEL[t]}</span>`).join('');
      const tasksHtml = day.tasks
        .map((task, i) => {
          const k = taskKey(day.n, i);
          const isTaskDone = doneTaskSet.has(k);
          return `
          <li class="task-item${isTaskDone ? ' is-done' : ''}" data-day="${day.n}" data-task-index="${i}">
            <input type="checkbox" class="task-checkbox" ${isTaskDone ? 'checked' : ''}
              onchange="toggleTaskDone(${day.n}, ${i}, this)" title="Mark task complete">
            <span class="task-text">${task}</span>
          </li>`;
        })
        .join('');

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
        <td style="vertical-align:top"><div class="topic-name">${day.topic}</div></td>
        <td><ul class="tasks-list">${tasksHtml}</ul></td>
        <td style="vertical-align:top"><div class="tags-wrap">${tagsHtml}</div></td>
        <td style="vertical-align:top">${linksHtml}</td>
        <td style="vertical-align:top;padding-top:17px"><span class="hrs-badge">${day.hrs}h</span></td>
      `;
      tbody.appendChild(tr);
    });
  });
}

// ===== RENDER DSA TABLE =====
function diffClass(d) {
  return `tag-diff tag-diff--${d}`;
}

function diffLabel(d) {
  return d.charAt(0).toUpperCase() + d.slice(1);
}

function buildDsaTable() {
  const tbody = document.getElementById('tableBodyDsa');
  tbody.innerHTML = '';
  let serial = 1;

  DSA_ROADMAP.forEach(topic => {
    const phRow = document.createElement('tr');
    phRow.className = 'dsa-topic-row';
    phRow.setAttribute('data-topic-id', topic.id);
    phRow.innerHTML = `<td colspan="5">
      <span class="phase-label-text dsa-topic-heading" style="color:${topic.topicColor}">
        <span class="phase-line" style="background:${topic.topicColor}"></span>
        ${topic.topic}
        <span class="topic-count">${topic.problems.length} problems</span>
        <span class="phase-line" style="background:${topic.topicColor}"></span>
      </span>
    </td>`;
    tbody.appendChild(phRow);

    topic.problems.forEach((p, i) => {
      const k = dsaKey(topic.id, i);
      const done = dsaDoneSet.has(k);
      const tr = document.createElement('tr');
      tr.className = `dsa-row${done ? ' is-done' : ''}`;
      tr.setAttribute('data-dsa-diff', p.difficulty);
      tr.setAttribute('data-topic-id', topic.id);
      tr.setAttribute(
        'data-search',
        `${serial} ${topic.topic} ${p.title} ${p.difficulty} ${topic.id}`.toLowerCase()
      );

      const linkHost = (() => {
        try {
          return new URL(p.url).hostname.replace('www.', '');
        } catch (e) {
          return 'Open';
        }
      })();

      tr.innerHTML = `
        <td class="cell-serial"><span class="serial-badge">${serial}</span></td>
        <td class="cell-check" style="text-align:center">
          <input type="checkbox" class="done-checkbox dsa-done-checkbox" ${done ? 'checked' : ''}
            onchange="toggleDsaDone('${topic.id}', ${i}, this)" title="Mark solved">
        </td>
        <td class="cell-problem">
          <span class="dsa-problem-title">${p.title}</span>
          <span class="${diffClass(p.difficulty)} dsa-diff-mobile">${diffLabel(p.difficulty)}</span>
        </td>
        <td class="cell-diff"><span class="${diffClass(p.difficulty)}">${diffLabel(p.difficulty)}</span></td>
        <td class="cell-link">
          <a class="dsa-link" href="${p.url}" target="_blank" rel="noopener">Solve <span class="dsa-link-host">(${linkHost})</span></a>
        </td>
      `;
      tbody.appendChild(tr);
      serial += 1;
    });
  });
}

function buildTables() {
  buildAiTable();
  buildDsaTable();
  updateProgress();
  applyFilters();
}

// ===== PROGRESS =====
function countDoneDays() {
  let doneDays = 0;
  ROADMAP.forEach(phase => {
    phase.days.forEach(day => {
      if (isDayDone(day)) doneDays += 1;
    });
  });
  return doneDays;
}

function updateProgress() {
  const circ = 163.4;
  const ring = document.getElementById('ringFill');

  if (activeMode === 'ai') {
    const totalTasks = getTotalTasks();
    const doneTasks = doneTaskSet.size;
    const pct = totalTasks === 0 ? 0 : (doneTasks / totalTasks) * 100;
    const totalDays = getTotalDays();

    document.getElementById('doneCount').textContent = doneTasks;
    document.getElementById('totalCount').textContent = totalTasks;
    document.getElementById('pctDone').textContent = pct.toFixed(2) + '%';
    document.getElementById('daysLeft').textContent = totalDays - countDoneDays();
    const offset = totalTasks === 0 ? circ : circ - (doneTasks / totalTasks) * circ;
    ring.style.strokeDashoffset = offset;
  } else {
    const total = getDsaTotalProblems();
    const done = dsaDoneSet.size;
    const pct = total === 0 ? 0 : (done / total) * 100;
    document.getElementById('doneCount').textContent = done;
    document.getElementById('totalCount').textContent = total;
    document.getElementById('pctDone').textContent = pct.toFixed(2) + '%';
    document.getElementById('topicsCleared').textContent = `${countDsaTopicsComplete()}/${DSA_ROADMAP.length}`;
    const offset = total === 0 ? circ : circ - (done / total) * circ;
    ring.style.strokeDashoffset = offset;
  }
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

// ===== AI TOGGLES =====
function toggleTaskDone(dayNum, taskIndex, el) {
  const k = taskKey(dayNum, taskIndex);
  if (el.checked) doneTaskSet.add(k);
  else doneTaskSet.delete(k);
  saveAiDone();
  const taskItem = el.closest('.task-item');
  if (taskItem) taskItem.classList.toggle('is-done', el.checked);
  syncDayRowUI(dayNum);
  updateProgress();
}

function toggleDayDone(dayNum, el) {
  const day = findDayByNum(dayNum);
  if (!day) return;
  setDayDone(day, el.checked);
  saveAiDone();
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

// ===== DSA TOGGLE =====
function toggleDsaDone(topicId, problemIndex, el) {
  const k = dsaKey(topicId, problemIndex);
  if (el.checked) dsaDoneSet.add(k);
  else dsaDoneSet.delete(k);
  saveDsaDone();
  const row = el.closest('.dsa-row');
  if (row) row.classList.toggle('is-done', el.checked);
  updateProgress();
}

// ===== EXPORT / IMPORT =====
function isKnownAiTaskKey(k) {
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

  if (parsed && parsed.version === 3 && parsed.ai && parsed.dsa) {
    const aiList = Array.isArray(parsed.ai.doneTasks) ? parsed.ai.doneTasks : [];
    const dsaList = Array.isArray(parsed.dsa.doneTasks) ? parsed.dsa.doneTasks : [];
    const aiSet = new Set();
    const dsaSet = new Set();
    for (const k of aiList) if (isKnownAiTaskKey(k)) aiSet.add(k);
    for (const k of dsaList) if (isKnownDsaKey(k)) dsaSet.add(k);
    const mode = parsed.activeMode === 'dsa' ? 'dsa' : 'ai';
    return { aiDone: aiSet, dsaDone: dsaSet, activeMode: mode };
  }

  let list = null;
  if (Array.isArray(parsed)) list = parsed;
  else if (parsed && Array.isArray(parsed.doneTasks)) list = parsed.doneTasks;

  if (list) {
    const valid = new Set();
    for (const k of list) if (isKnownAiTaskKey(k)) valid.add(k);
    return { aiDone: valid, dsaDone: null, activeMode: null };
  }

  return { error: 'Expected v3 export { ai, dsa }, v2 { doneTasks }, or a legacy array.' };
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

function downloadJsonFallback(text, filename) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type: 'application/json;charset=utf-8' }));
  a.download = filename;
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
    syncToastTimer = setTimeout(() => {
      el.hidden = true;
    }, 300);
  }, 2600);
}

async function exportProgress() {
  const payload = {
    version: EXPORT_SCHEMA_VERSION,
    exportedAt: new Date().toISOString(),
    activeMode,
    ai: { doneTasks: [...doneTaskSet].sort() },
    dsa: { doneTasks: [...dsaDoneSet].sort() },
  };
  const text = JSON.stringify(payload, null, 2);
  try {
    const copied = await copyToClipboard(text);
    if (copied) {
      showSyncToast('Copied AI + DSA progress to clipboard');
      return;
    }
  } catch (e) {}
  downloadJsonFallback(text, 'roadmap-progress.json');
  showSyncToast('Downloaded roadmap-progress.json');
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
  doneTaskSet = result.aiDone;
  saveAiDone();
  if (result.dsaDone) {
    dsaDoneSet = result.dsaDone;
    saveDsaDone();
  }
  if (result.activeMode) setRoadmapMode(result.activeMode);
  else setRoadmapMode(activeMode);
  buildTables();
  closeImportDialog();
  showSyncToast('Progress imported');
}

// ===== FILTERS =====
function setFilter(filter, btn) {
  document.querySelectorAll('#filterGroupAi .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeFilter = filter;
  applyFilters();
}

function setDsaFilter(filter, btn) {
  document.querySelectorAll('#filterGroupDsa .dsa-filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeDsaFilter = filter;
  applyFilters();
}

function applyFilters() {
  const q = document.getElementById('searchInput').value.toLowerCase().trim();

  if (activeMode === 'ai') {
    document.querySelectorAll('.day-row').forEach(row => {
      const tags = row.getAttribute('data-tags');
      const search = row.getAttribute('data-search');
      const tagMatch = activeFilter === 'all' || tags.includes(activeFilter);
      const searchMatch = !q || search.includes(q);
      row.classList.toggle('hidden', !(tagMatch && searchMatch));
    });
    document.querySelectorAll('.phase-header-row').forEach(ph => {
      const phaseTags = ph.getAttribute('data-phase-tags');
      const tagMatch = activeFilter === 'all' || phaseTags.includes(activeFilter);
      let hasVisible = false;
      let next = ph.nextElementSibling;
      while (next && !next.classList.contains('phase-header-row')) {
        if (!next.classList.contains('hidden')) {
          hasVisible = true;
          break;
        }
        next = next.nextElementSibling;
      }
      ph.classList.toggle('hidden', !tagMatch || !hasVisible);
    });
  } else {
    document.querySelectorAll('.dsa-row').forEach(row => {
      const diff = row.getAttribute('data-dsa-diff');
      const search = row.getAttribute('data-search');
      const diffMatch = activeDsaFilter === 'all' || diff === activeDsaFilter;
      const searchMatch = !q || search.includes(q);
      row.classList.toggle('hidden', !(diffMatch && searchMatch));
    });
    document.querySelectorAll('.dsa-topic-row').forEach(ph => {
      let hasVisible = false;
      let next = ph.nextElementSibling;
      while (next && !next.classList.contains('dsa-topic-row')) {
        if (next.classList.contains('dsa-row') && !next.classList.contains('hidden')) {
          hasVisible = true;
          break;
        }
        next = next.nextElementSibling;
      }
      ph.classList.toggle('hidden', !hasVisible);
    });
  }
}

function setFooterDate() {
  const el = document.getElementById('footerDate');
  if (el) {
    const now = new Date();
    el.textContent = `Started: ${now.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}`;
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  loadAiDone();
  loadDsaDone();
  loadMode();
  buildTables();
  setRoadmapMode(activeMode);
  setFooterDate();
});
