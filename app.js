/* ═══════════════════════════════════════════
   ESPETINHO & AÇAÍ DO IRAN — app.js
   ═══════════════════════════════════════════

   COMO ADICIONAR FOTOS AOS PRODUTOS:
   ───────────────────────────────────
   Cada item no array MENU possui um campo "img".
   Substitua o valor pela URL da sua foto ou por um
   caminho local, ex: "fotos/macarronada-mista.jpg"

   Deixe img: null para usar o emoji como fallback.

   Campos de cada item:
     id      → número único (não repita)
     cat     → 'esp' | 'panq' | 'mac' | 'acai' | 'beb'
     name    → nome exibido no cardápio
     desc    → descrição curta
     price   → preço base (ou menor tamanho se houver sizes)
     emoji   → fallback quando não há foto
     badge   → 'hot' | 'new' | null
     img     → URL da foto (ou null)
     sizes   → array de tamanhos [{label, price}] (opcional)
   ═══════════════════════════════════════════ */

/* ─────────────────────────────────────────
   HORÁRIOS DE FUNCIONAMENTO
───────────────────────────────────────── */
const SCHEDULE = {
  0: null,                          // Domingo — fechado
  1: { open:[11,0], close:[22,0] }, // Segunda
  2: { open:[11,0], close:[22,0] }, // Terça
  3: { open:[11,0], close:[14,0] }, // Quarta (almoço)
  4: { open:[11,0], close:[22,0] }, // Quinta
  5: { open:[11,0], close:[23,0] }, // Sexta
  6: { open:[11,0], close:[23,0] }, // Sábado
};
const DAY_NAMES = ['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];

/* ─────────────────────────────────────────
   CARDÁPIO — edite aqui
   FOTO: substitua o campo img pela URL da imagem
───────────────────────────────────────── */
const MENU = [

  /* ── ESPETINHOS ─────────────────────── */
  {
    id: 1, cat: 'esp',
    name: 'Espetinho de Frango',
    desc: 'Frango marinado no tempero da casa, grelhado na brasa.',
    price: 7, emoji: '🍗', badge: 'hot',
    img: null, // ← coloque aqui: 'fotos/esp-frango.jpg'
  },
  {
    id: 2, cat: 'esp',
    name: 'Espetinho de Carne',
    desc: 'Carne bovina selecionada, grelhada no ponto certo.',
    price: 8, emoji: '🥩', badge: null,
    img: null,
  },
  {
    id: 3, cat: 'esp',
    name: 'Espetinho Misto',
    desc: 'Mix de frango e carne — o favorito da casa!',
    price: 9, emoji: '🍖', badge: 'hot',
    img: null,
  },
  {
    id: 4, cat: 'esp',
    name: 'Espetinho de Queijo',
    desc: 'Queijo coalho grelhado, dourado por fora e derretendo por dentro.',
    price: 7.5, emoji: '🧀', badge: null,
    img: null,
  },
  {
    id: 5, cat: 'esp',
    name: 'Espetinho de Coração',
    desc: 'Coração de frango marinado e grelhado. Para os apreciadores!',
    price: 6.5, emoji: '❤️', badge: null,
    img: null,
  },
  {
    id: 6, cat: 'esp',
    name: 'Combo 5 Espetinhos',
    desc: 'Escolha 5 espetinhos de qualquer sabor.',
    price: 32, emoji: '🔥', badge: 'new',
    img: null,
  },

  /* ── PANQUECAS ──────────────────────── */
  {
    id: 20, cat: 'panq',
    name: 'Panqueca de Frango',
    desc: 'Frango temperado enrolado em massa macia, coberto com molho artesanal.',
    price: 15, emoji: '🫔', badge: null,
    img: null, // ← coloque aqui: 'fotos/panqueca-frango.jpg'
  },
  {
    id: 21, cat: 'panq',
    name: 'Panqueca de Carne',
    desc: 'Carne moída bem temperada na massa, com molho da casa.',
    price: 15, emoji: '🫔', badge: 'hot',
    img: null, // ← coloque aqui: 'fotos/panqueca-carne.jpg'
  },

  /* ── MACARRONADAS ───────────────────── */
  /* Tamanhos: P=R$20 · M=R$25 · G=R$35   */
  {
    id: 7, cat: 'mac',
    name: 'Macarronada Mista',
    desc: 'Calabresa, toscana, presunto, queijo, carne moída, frango, mortadela, cebola, creme de leite, milho, ervilha, azeitona, orégano, parmesão e batata palha. Molho branco ou vermelho.',
    price: 20, emoji: '🍝', badge: 'hot',
    img: null, // ← coloque aqui: 'fotos/mac-mista.jpg'
    sizes: [{ label:'P', price:20 },{ label:'M', price:25 },{ label:'G', price:35 }],
  },
  {
    id: 8, cat: 'mac',
    name: 'Macarronada de Frango',
    desc: 'Macarrão, frango, queijo, ervilha, milho, cebola, azeitona, orégano, creme de leite, parmesão e batata palha. Molho branco ou vermelho.',
    price: 20, emoji: '🍝', badge: null,
    img: null, // ← 'fotos/mac-frango.jpg'
    sizes: [{ label:'P', price:20 },{ label:'M', price:25 },{ label:'G', price:35 }],
  },
  {
    id: 9, cat: 'mac',
    name: 'Macarronada de Carne',
    desc: 'Macarrão, carne moída, queijo, milho, ervilha, azeitona, cebola, orégano, creme de leite e parmesão. Molho branco ou vermelho.',
    price: 20, emoji: '🍝', badge: null,
    img: null,
    sizes: [{ label:'P', price:20 },{ label:'M', price:25 },{ label:'G', price:35 }],
  },
  {
    id: 10, cat: 'mac',
    name: 'Macarronada Nordestina',
    desc: 'Carne de sol desfiada, queijo, cebola, milho, ervilha, azeitona, queijo coalho, creme de leite, parmesão, batata palha. Molho branco ou vermelho.',
    price: 20, emoji: '⭐', badge: 'new',
    img: null,
    sizes: [{ label:'P', price:20 },{ label:'M', price:25 },{ label:'G', price:35 }],
  },
  {
    id: 11, cat: 'mac',
    name: 'Macarronada Mamma',
    desc: 'Linguiça, calabresa, carne moída, tomate picado, queijo, milho, ervilha, azeitona, parmesão, orégano, creme de leite e batata palha. Molho branco ou vermelho.',
    price: 20, emoji: '🍝', badge: null,
    img: null,
    sizes: [{ label:'P', price:20 },{ label:'M', price:25 },{ label:'G', price:35 }],
  },
  {
    id: 12, cat: 'mac',
    name: 'Calabresa Apimentada',
    desc: 'Calabresa apimentada, pimenta, queijo, carne moída, cebola, creme de leite, milho, ervilha, azeitona, orégano e batata palha. Molho branco ou vermelho.',
    price: 20, emoji: '🌶️', badge: null,
    img: null,
    sizes: [{ label:'P', price:20 },{ label:'M', price:25 },{ label:'G', price:35 }],
  },

  /* ── AÇAÍ ───────────────────────────── */
  /* Tamanhos: 300ml=R$10 · 400ml=R$12 · 500ml=R$15 */
  {
    id: 30, cat: 'acai',
    name: 'Açaí Tradicional',
    desc: 'Açaí, frutas, granola, leite condensado, leite em pó e amendoim.',
    price: 10, emoji: '🫙', badge: 'hot',
    img: null, // ← 'fotos/acai-tradicional.jpg'
    sizes: [{ label:'300ml', price:10 },{ label:'400ml', price:12 },{ label:'500ml', price:15 }],
  },
  {
    id: 31, cat: 'acai',
    name: 'Açaí Kids',
    desc: 'Açaí, frutas, leite condensado, confete, tubinho, wafer e calda.',
    price: 10, emoji: '🍨', badge: null,
    img: null,
    sizes: [{ label:'300ml', price:10 },{ label:'400ml', price:12 },{ label:'500ml', price:15 }],
  },
  {
    id: 32, cat: 'acai',
    name: 'Açaí Ninho',
    desc: 'Açaí, leite em pó Ninho, frutas e amendoim.',
    price: 10, emoji: '🫙', badge: null,
    img: null,
    sizes: [{ label:'300ml', price:10 },{ label:'400ml', price:12 },{ label:'500ml', price:15 }],
  },
  {
    id: 33, cat: 'acai',
    name: 'Açaí Crocante',
    desc: 'Açaí, frutas, ovomaltine, leite em pó, flocos e chocobol.',
    price: 10, emoji: '🫙', badge: null,
    img: null,
    sizes: [{ label:'300ml', price:10 },{ label:'400ml', price:12 },{ label:'500ml', price:15 }],
  },
  {
    id: 34, cat: 'acai',
    name: 'Açaí Fit',
    desc: 'Açaí, mel, frutas, granola e aveia.',
    price: 10, emoji: '💪', badge: null,
    img: null,
    sizes: [{ label:'300ml', price:10 },{ label:'400ml', price:12 },{ label:'500ml', price:15 }],
  },
  {
    id: 35, cat: 'acai',
    name: 'Açaí Chócolatra',
    desc: 'Açaí, calda, frutas, ovomaltine, disquete, chocolate em barra e leite condensado.',
    price: 10, emoji: '🍫', badge: 'hot',
    img: null,
    sizes: [{ label:'300ml', price:10 },{ label:'400ml', price:12 },{ label:'500ml', price:15 }],
  },
  {
    id: 36, cat: 'acai',
    name: 'Açaí Arretado',
    desc: 'Açaí, leite condensado, farinha de puba e frutas.',
    price: 10, emoji: '🫙', badge: null,
    img: null,
    sizes: [{ label:'300ml', price:10 },{ label:'400ml', price:12 },{ label:'500ml', price:15 }],
  },
  {
    id: 37, cat: 'acai',
    name: 'Açaí Afrodisíaco',
    desc: 'Açaí, amendoim, guaraná da Amazônia e granola.',
    price: 10, emoji: '🌿', badge: null,
    img: null,
    sizes: [{ label:'300ml', price:10 },{ label:'400ml', price:12 },{ label:'500ml', price:15 }],
  },
  {
    id: 38, cat: 'acai',
    name: 'Açaí Paraense',
    desc: 'Açaí, leite condensado e farinha.',
    price: 10, emoji: '🫙', badge: null,
    img: null,
    sizes: [{ label:'300ml', price:10 },{ label:'400ml', price:12 },{ label:'500ml', price:15 }],
  },

  /* ── BEBIDAS / SUCOS ────────────────── */
  /* Grupo 1: R$9 (400ml) · R$35 (Jarra 1L) */
  {
    id: 50, cat: 'beb',
    name: 'Suco de Laranja',
    desc: 'Suco natural de laranja, batido na hora.',
    price: 9, emoji: '🍊', badge: null,
    img: null,
    sizes: [{ label:'400ml', price:9 },{ label:'Jarra 1L', price:35 }],
  },
  {
    id: 51, cat: 'beb',
    name: 'Suco de Bacuri',
    desc: 'Fruta amazônica cremosa e deliciosa.',
    price: 9, emoji: '🍹', badge: null,
    img: null,
    sizes: [{ label:'400ml', price:9 },{ label:'Jarra 1L', price:35 }],
  },
  {
    id: 52, cat: 'beb',
    name: 'Suco de Maracujá',
    desc: 'Maracujá fresco, gelado e refrescante.',
    price: 9, emoji: '🍹', badge: 'hot',
    img: null,
    sizes: [{ label:'400ml', price:9 },{ label:'Jarra 1L', price:35 }],
  },
  {
    id: 53, cat: 'beb',
    name: 'Suco de Cajá',
    desc: 'Cajá com sabor único do nordeste.',
    price: 9, emoji: '🍹', badge: null,
    img: null,
    sizes: [{ label:'400ml', price:9 },{ label:'Jarra 1L', price:35 }],
  },
  {
    id: 54, cat: 'beb',
    name: 'Suco de Cupuaçu',
    desc: 'Sabor intenso e aromático da Amazônia.',
    price: 9, emoji: '🍹', badge: null,
    img: null,
    sizes: [{ label:'400ml', price:9 },{ label:'Jarra 1L', price:35 }],
  },
  /* Grupo 2: R$7 (400ml) · R$27 (Jarra 1L) */
  {
    id: 55, cat: 'beb',
    name: 'Suco de Goiaba',
    desc: 'Goiaba vermelha, cremosa e adocicada.',
    price: 7, emoji: '🍹', badge: null,
    img: null,
    sizes: [{ label:'400ml', price:7 },{ label:'Jarra 1L', price:27 }],
  },
  {
    id: 56, cat: 'beb',
    name: 'Suco de Acerola',
    desc: 'Rico em vitamina C, refrescante e saboroso.',
    price: 7, emoji: '🍹', badge: null,
    img: null,
    sizes: [{ label:'400ml', price:7 },{ label:'Jarra 1L', price:27 }],
  },
  {
    id: 57, cat: 'beb',
    name: 'Suco de Tamarindo',
    desc: 'Sabor agridoce único, muito apreciado.',
    price: 7, emoji: '🍹', badge: null,
    img: null,
    sizes: [{ label:'400ml', price:7 },{ label:'Jarra 1L', price:27 }],
  },
  {
    id: 58, cat: 'beb',
    name: 'Suco de Graviola',
    desc: 'Cremoso e suave, direto da natureza.',
    price: 7, emoji: '🍹', badge: null,
    img: null,
    sizes: [{ label:'400ml', price:7 },{ label:'Jarra 1L', price:27 }],
  },
  {
    id: 59, cat: 'beb',
    name: 'Suco de Caju',
    desc: 'Caju nordestino fresquinho, sem conservante.',
    price: 7, emoji: '🍹', badge: null,
    img: null,
    sizes: [{ label:'400ml', price:7 },{ label:'Jarra 1L', price:27 }],
  },
];

/* ─────────────────────────────────────────
   COMPLEMENTOS  (aparecem no modal por cat)
   panq e mac: sem complementos (apenas tamanho)
───────────────────────────────────────── */
const COMPLEMENTS = {
  esp: {
    acompanhamentos: [
      { id:'arroz',    name:'Arroz',    price:0 },
      { id:'feijao',   name:'Feijão',   price:0 },
      { id:'vinagrete',name:'Vinagrete',price:0 },
      { id:'farofa',   name:'Farofa',   price:0 },
      { id:'mac_ac',   name:'Macarrão', price:0 },
    ],
    acrescimos: [
      { id:'queijo_e',   name:'Queijo extra',  price:1 },
      { id:'bacon_e',    name:'Bacon',         price:1 },
      { id:'catupiry_e', name:'Catupiry',      price:1 },
      { id:'molho_e',    name:'Molho especial',price:1 },
      { id:'pimenta_e',  name:'Pimenta',       price:1 },
    ],
  },
  panq: {},   // apenas tamanho — sem complementos
  mac:  {},   // apenas tamanho — sem complementos
  acai: {
    complementos: [
      { id:'granola',   name:'Granola',          price:0 },
      { id:'banana',    name:'Banana',           price:0 },
      { id:'amendoim',  name:'Amendoim',         price:0 },
      { id:'leite_cond',name:'Leite condensado', price:0 },
      { id:'leite_po',  name:'Leite em pó',      price:0 },
      { id:'frutas',    name:'Frutas',           price:0 },
    ],
    acrescimos: [
      { id:'mel',       name:'Mel',       price:1 },
      { id:'nutella',   name:'Nutella',   price:1 },
      { id:'ovomalt',   name:'Ovomaltine',price:1 },
      { id:'tapioca',   name:'Tapioca',   price:1 },
      { id:'calda',     name:'Calda',     price:1 },
      { id:'disquete',  name:'Disquete',  price:1 },
    ],
  },
  beb: {},
};

/* bg class per category */
const BG = { esp:'esp-bg', panq:'panq-bg', mac:'mac-bg', acai:'acai-bg', beb:'beb-bg' };

/* ─────────────────────────────────────────
   SCHEDULE HELPERS
───────────────────────────────────────── */
function isOpen() {
  const n=new Date(), d=n.getDay(), c=n.getHours()*60+n.getMinutes();
  const s=SCHEDULE[d];
  return s ? c>=s.open[0]*60+s.open[1] && c<s.close[0]*60+s.close[1] : false;
}
function fmtTime(s) { return s.open[0]+'h – '+s.close[0]+'h'; }

function buildSchedule() {
  const today = new Date().getDay();
  let html = '';
  for (let d=0; d<7; d++) {
    const s=SCHEDULE[d], isToday=d===today, closed=!s, openNow=isToday&&isOpen();
    const cls  = closed?'closed-day':openNow?'open-now':'';
    const txt  = closed?'Fechado':openNow?'🟢 '+fmtTime(s):fmtTime(s);
    html += '<div class="sch-row'+(isToday?' today':'')+'">'+
      '<span class="sch-day">'+DAY_NAMES[d]+(isToday?' <strong>(hoje)</strong>':'')+'</span>'+
      '<span class="sch-time '+cls+'">'+txt+'</span>'+
    '</div>';
  }
  document.getElementById('scheduleRows').innerHTML = html;
  buildFooterSchedule(today);
}

function buildFooterSchedule(today) {
  const el = document.getElementById('footerSchRows');
  if (!el) return;
  let html = '';
  for (let d=0; d<7; d++) {
    const s=SCHEDULE[d], openNow=d===today&&isOpen();
    const cls = !s?'f-closed':openNow?'f-today':'';
    const txt = !s?'Fechado':openNow?'🟢 '+fmtTime(s):fmtTime(s);
    html += '<div class="fsch-row">'+
      '<span class="fsch-day">'+DAY_NAMES[d]+'</span>'+
      '<span class="fsch-time '+cls+'">'+txt+'</span>'+
    '</div>';
  }
  el.innerHTML = html;
}

function updateStatus() {
  const open = isOpen();
  document.getElementById('statusPill').className = 'status-pill '+(open?'open':'closed');
  document.getElementById('statusTxt').textContent = open?'Aberto agora':'Fechado agora';
  document.getElementById('closedBanner').classList.toggle('show', !open);
  document.getElementById('closedHint').classList.toggle('show', !open);
  document.getElementById('sendBtn').disabled = cart.length===0 || !open;
}

/* ─────────────────────────────────────────
   RENDER MENU
───────────────────────────────────────── */
function renderMenu() {
  const sections = { esp:'items-esp', panq:'items-panq', mac:'items-mac', acai:'items-acai', beb:'items-beb' };
  Object.entries(sections).forEach(([cat, listId]) => {
    const el = document.getElementById(listId);
    if (!el) return;
    const items = MENU.filter(i => i.cat === cat);
    el.innerHTML = items.map(item => {
      const bdg = item.badge==='hot' ? '<span class="ibadge ibadge-hot">Popular</span>'
                : item.badge==='new' ? '<span class="ibadge ibadge-new">Novidade</span>' : '';
      const priceHTML = item.sizes
        ? '<span class="item-price-from">a partir de</span>R$ '+item.sizes[0].price.toFixed(2).replace('.',',')
        : 'R$ '+item.price.toFixed(2).replace('.',',');
      const thumbContent = item.img
        ? '<img src="'+item.img+'" alt="'+item.name+'" loading="lazy" onerror="this.style.display=\'none\'">'
        : item.emoji;
      return '<div class="item-card" onclick="openModal('+item.id+')">'+
        '<div class="item-thumb '+BG[cat]+'">'+thumbContent+'</div>'+
        '<div class="item-content">'+
          (bdg?'<div class="item-badge-row">'+bdg+'</div>':'')+
          '<div class="item-name">'+item.name+'</div>'+
          '<div class="item-desc">'+item.desc+'</div>'+
          '<div class="item-price-row">'+
            '<div class="item-price">'+priceHTML+'</div>'+
            '<button class="item-add-btn" onclick="event.stopPropagation();openModal('+item.id+')">+</button>'+
          '</div>'+
        '</div>'+
      '</div>';
    }).join('');
  });
}

/* ─────────────────────────────────────────
   SECTION TOGGLE
───────────────────────────────────────── */
function toggleSection(id, btn) {
  const el = document.getElementById(id);
  btn.textContent = el.classList.toggle('collapsed') ? '▼' : '▲';
}

/* ─────────────────────────────────────────
   CAT TABS
───────────────────────────────────────── */
document.getElementById('catTabsEl').addEventListener('click', function(e) {
  const tab = e.target.closest('.cat-tab');
  if (!tab) return;
  document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  const sec = document.getElementById(tab.dataset.sec);
  if (sec) sec.scrollIntoView({ behavior:'smooth', block:'start' });
});

/* ─────────────────────────────────────────
   MODAL
───────────────────────────────────────── */
let modalItem = null, modalQty = 1, selectedComps = {}, selectedSize = null;

function openModal(id) {
  const item = MENU.find(i => i.id === id);
  if (!item) return;
  modalItem = item; modalQty = 1; selectedComps = {};
  selectedSize = item.sizes ? item.sizes[0] : null;

  // Hero image or emoji
  const heroEl = document.getElementById('mHero');
  heroEl.className = 'modal-hero ' + BG[item.cat];
  const emojiEl = document.getElementById('mEmoji');
  if (item.img) {
    heroEl.style.backgroundImage = 'url('+item.img+')';
    emojiEl.textContent = '';
  } else {
    heroEl.style.backgroundImage = '';
    emojiEl.textContent = item.emoji;
  }

  document.getElementById('mName').textContent  = item.name;
  document.getElementById('mDesc').textContent  = item.desc;
  document.getElementById('qtyDisp').textContent = 1;

  // Build modal body
  let html = '';

  // 1) SIZE SELECTOR (if applicable)
  if (item.sizes && item.sizes.length) {
    const cols = item.sizes.length <= 2 ? 2 : 3;
    html += '<div class="comp-section">'+
      '<div class="comp-title">Tamanho <span class="comp-sub">(obrigatório)</span></div>'+
      '<div class="size-grid" style="grid-template-columns:repeat('+cols+',1fr)">';
    item.sizes.forEach((s, i) => {
      html += '<div class="size-btn'+(i===0?' selected':'')+'" onclick="selectSize(this,'+s.price+',\''+s.label+'\')">'+
        '<span class="size-label">'+s.label+'</span>'+
        '<span class="size-price">R$ '+s.price.toFixed(2).replace('.',',')+'</span>'+
      '</div>';
    });
    html += '</div></div>';
  }

  // 2) COMPLEMENTS (only for esp and acai)
  const C = COMPLEMENTS[item.cat] || {};
  if (C.acompanhamentos && C.acompanhamentos.length) {
    html += '<div class="comp-section"><div class="comp-title">Acompanhamentos <span class="comp-sub">(grátis)</span></div><div class="comp-grid">';
    C.acompanhamentos.forEach(c => {
      html += '<div class="comp-item" id="comp-'+c.id+'" onclick="toggleComp(\''+c.id+'\','+c.price+')">'+
        '<span class="comp-check">✓</span><span>'+c.name+'</span></div>';
    });
    html += '</div></div>';
  }
  if (C.complementos && C.complementos.length) {
    html += '<div class="comp-section"><div class="comp-title">Complementos <span class="comp-sub">(grátis)</span></div><div class="comp-grid">';
    C.complementos.forEach(c => {
      html += '<div class="comp-item" id="comp-'+c.id+'" onclick="toggleComp(\''+c.id+'\','+c.price+')">'+
        '<span class="comp-check">✓</span><span>'+c.name+'</span></div>';
    });
    html += '</div></div>';
  }
  if (C.acrescimos && C.acrescimos.length) {
    html += '<div class="comp-section"><div class="comp-title">Acréscimos <span class="comp-sub">(+R$ 1,00 cada)</span></div><div class="comp-grid">';
    C.acrescimos.forEach(c => {
      html += '<div class="comp-item" id="comp-'+c.id+'" onclick="toggleComp(\''+c.id+'\','+c.price+')">'+
        '<span class="comp-check">✓</span><span>'+c.name+'</span>'+
        '<span class="comp-extra">+R$1</span></div>';
    });
    html += '</div></div>';
  }
  if (!html) html = '<p style="color:var(--muted);font-size:13px;text-align:center;padding:24px 0">Selecione a quantidade e adicione ao pedido.</p>';

  document.getElementById('modalBody').innerHTML = html;
  updateModalPrice();
  document.getElementById('itemModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function selectSize(el, price, label) {
  selectedSize = { price, label };
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  updateModalPrice();
}

function toggleComp(id, price) {
  if (selectedComps[id]) delete selectedComps[id]; else selectedComps[id] = price;
  const el = document.getElementById('comp-'+id);
  if (el) el.classList.toggle('selected', !!selectedComps[id]);
  updateModalPrice();
}

function updateModalPrice() {
  if (!modalItem) return;
  const base = selectedSize ? selectedSize.price : modalItem.price;
  const ex   = Object.values(selectedComps).reduce((s,p) => s+p, 0);
  document.getElementById('addBtnPrice').textContent = 'R$ '+((base+ex)*modalQty).toFixed(2).replace('.',',');
  document.getElementById('mPrice').textContent = 'R$ '+(base+ex).toFixed(2).replace('.',',');
}

function changeQty(d) {
  modalQty = Math.max(1, modalQty+d);
  document.getElementById('qtyDisp').textContent = modalQty;
  updateModalPrice();
}

function closeModalFn() {
  document.getElementById('itemModal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalBg(e) {
  if (e.target === document.getElementById('itemModal')) closeModalFn();
}

function confirmAdd() {
  if (!modalItem) return;
  const base = selectedSize ? selectedSize.price : modalItem.price;
  const ex   = Object.values(selectedComps).reduce((s,p) => s+p, 0);
  const C    = COMPLEMENTS[modalItem.cat] || {};
  const all  = [...(C.acompanhamentos||[]), ...(C.complementos||[]), ...(C.acrescimos||[])];
  const compNames = all.filter(c => selectedComps[c.id]).map(c => c.name);
  const displayName = modalItem.name + (selectedSize ? ' ('+selectedSize.label+')' : '');
  cart.push({ ...modalItem, name:displayName, qty:modalQty, unitPrice:base+ex, comps:compNames });
  updateCart();
  closeModalFn();
  showToast(modalItem.emoji+' '+displayName+' adicionado!');
}

/* ─────────────────────────────────────────
   CART
───────────────────────────────────────── */
let cart = [], deliveryType = 'delivery', payMethod = 'dinheiro';

function openCart() {
  goToStep1(); // always open on step 1
  document.getElementById('cartPanel').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeCart() {
  document.getElementById('cartPanel').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function goToStep1() {
  document.getElementById('cartBody').style.display = '';
  document.getElementById('cartStep1Footer').style.display = '';
  document.getElementById('cartStep2').style.display = 'none';
  document.getElementById('cartTitle').textContent = '🛒 Meu Carrinho';
  document.getElementById('cartStepLabel').textContent = 'Itens do pedido';
  document.getElementById('stepDot1').classList.add('active');
  document.getElementById('stepDot2').classList.remove('active');
}

function goToStep2() {
  if (!cart.length) return;
  // render mini resumo
  const total = cart.reduce((s,i) => s+i.unitPrice*i.qty, 0);
  const resumo = document.getElementById('step2Resumo');
  resumo.innerHTML = cart.map(item => {
    const sizeMatch = item.name.match(/\(([^)]+)\)$/);
    const cleanName = sizeMatch ? item.name.replace(/\s*\([^)]+\)$/, '') : item.name;
    const sizeLabel = sizeMatch ? ' · '+sizeMatch[1] : '';
    return '<div class="step2-resumo-item">'+
      '<span class="step2-resumo-name">'+item.emoji+' '+cleanName+sizeLabel+'</span>'+
      '<span class="step2-resumo-qty">×'+item.qty+'</span>'+
      '<span class="step2-resumo-price">R$ '+(item.unitPrice*item.qty).toFixed(2).replace('.',',')+'</span>'+
    '</div>';
  }).join('');
  document.getElementById('totalVal2').textContent = 'R$ '+total.toFixed(2).replace('.',',');
  // switch view
  document.getElementById('cartBody').style.display = 'none';
  document.getElementById('cartStep1Footer').style.display = 'none';
  document.getElementById('cartStep2').style.display = 'flex';
  document.getElementById('cartTitle').textContent = '📋 Finalizar Pedido';
  document.getElementById('cartStepLabel').textContent = 'Entrega e pagamento';
  document.getElementById('stepDot1').classList.remove('active');
  document.getElementById('stepDot2').classList.add('active');
  updateStatus(); // refresh sendBtn state
}

function updateCart() {
  const total = cart.reduce((s,i) => s+i.unitPrice*i.qty, 0);
  const count = cart.reduce((s,i) => s+i.qty, 0);

  // update step1 total
  const tv = document.getElementById('totalVal');
  if (tv) tv.textContent = 'R$ '+total.toFixed(2).replace('.',',');

  // badge
  const badge = document.getElementById('cartBadge');
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';

  // "continuar" button
  const nextBtn = document.getElementById('cartNextBtn');
  if (nextBtn) nextBtn.disabled = cart.length === 0;

  // send button (step2)
  const sendBtn = document.getElementById('sendBtn');
  if (sendBtn) sendBtn.disabled = cart.length === 0 || !isOpen();

  const body = document.getElementById('cartBody');
  if (!cart.length) {
    body.innerHTML = '<div class="cart-empty-msg"><div class="big">🛒</div><p>Nenhum item adicionado ainda</p></div>';
    return;
  }

  body.innerHTML = cart.map((item, idx) => {
    const bg = BG[item.cat] || 'esp-bg';
    const sizeMatch = item.name.match(/\(([^)]+)\)$/);
    const cleanName = sizeMatch ? item.name.replace(/\s*\([^)]+\)$/, '') : item.name;

    const lines = [];

    // 1) tamanho
    if (sizeMatch) lines.push('Tamanho: ' + sizeMatch[1]);

    // 2) complementos — cada um na sua linha
    if (item.comps && item.comps.length) {
      item.comps.forEach(c => lines.push(c));
    }

    // 3) se não tem nenhum detalhe ainda, mostra a descrição do item
    if (!lines.length) {
      const d = item.desc || '';
      lines.push(d.length > 60 ? d.substring(0, 60) + '…' : d);
    }

    const detailHTML = lines.map(l => '<span class="ci-det-line">' + l + '</span>').join('');
    const unitTotal = (item.unitPrice * item.qty).toFixed(2).replace('.', ',');

    return '<div class="cart-item-row">' +
      '<div class="ci-tag ' + bg + '">' + item.emoji + '</div>' +
      '<div class="ci-info">' +
        '<span class="ci-name">' + cleanName + '</span>' +
        '<div class="ci-details">' + detailHTML + '</div>' +
        '<div class="ci-qty-row">' +
          '<button class="ci-qty-btn remove" onclick="cartQty(' + idx + ',-1)">−</button>' +
          '<span class="ci-qty-num">' + item.qty + '</span>' +
          '<button class="ci-qty-btn" onclick="cartQty(' + idx + ',1)">+</button>' +
        '</div>' +
      '</div>' +
      '<div class="ci-right">' +
        '<span class="ci-price">R$ ' + unitTotal + '</span>' +
        '<button class="ci-remove" onclick="cartRemove(' + idx + ')" title="Remover">✕</button>' +
      '</div>' +
    '</div>';
  }).join('');
}

function cartQty(idx, d) {
  cart[idx].qty += d;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  updateCart();
}
function cartRemove(idx) {
  cart.splice(idx, 1);
  updateCart();
}
function setDelivery(t) {
  deliveryType = t;
  document.getElementById('optDelivery').classList.toggle('active', t==='delivery');
  document.getElementById('optRetirada').classList.toggle('active', t==='retirada');
  document.getElementById('addrForm').classList.toggle('show', t==='delivery');
}
function setPay(el) {
  document.querySelectorAll('.pay-opt').forEach(e => e.classList.remove('active'));
  el.classList.add('active'); payMethod = el.dataset.pay;
  document.getElementById('trocoRow').classList.toggle('show', payMethod==='dinheiro');
}

/* ─────────────────────────────────────────
   SEND WHATSAPP
───────────────────────────────────────── */
function sendWhatsApp() {
  if (!isOpen()) { showToast('⏰ Estamos fechados agora!'); return; }
  if (!cart.length) return;
  const rua = document.getElementById('fRua').value.trim();
  if (deliveryType==='delivery' && !rua) {
    document.getElementById('fRua').classList.add('error');
    document.getElementById('fRua').focus();
    showToast('⚠️ Informe a rua para entrega');
    return;
  }
  document.getElementById('fRua').classList.remove('error');
  const total  = cart.reduce((s,i) => s+i.unitPrice*i.qty, 0);
  const num    = document.getElementById('fNum').value.trim();
  const comp   = document.getElementById('fComp').value.trim();
  const bairro = document.getElementById('fBairro').value.trim();
  const ref    = document.getElementById('fRef').value.trim();
  const obs    = document.getElementById('obsArea').value.trim();
  const troco  = document.getElementById('fTroco').value.trim();

  let msg = '*🍢 Pedido — Espetinho & Açaí do Iran*\n\n*Itens:*\n';
  cart.forEach(i => {
    const sizeMatch = i.name.match(/\(([^)]+)\)$/);
    const cleanName = sizeMatch ? i.name.replace(/\s*\([^)]+\)$/, '') : i.name;
    const sizeLabel = sizeMatch ? ' ('+sizeMatch[1]+')' : '';
    msg += '• '+i.emoji+' '+cleanName+sizeLabel+' ×'+i.qty+' — R$ '+(i.unitPrice*i.qty).toFixed(2).replace('.',',')+'\n';
    if (i.comps && i.comps.length) msg += '   _'+i.comps.join(', ')+'_\n';
  });
  msg += '\n*Total: R$ '+total.toFixed(2).replace('.',',')+' *\n';
  msg += '\n*Tipo:* '+(deliveryType==='delivery'?'🛵 Delivery':'🏃 Retirada')+'\n';
  if (deliveryType==='delivery') {
    msg += '*Endereço:* '+rua+(num?', Nº '+num:'')+(comp?', '+comp:'')+'\n';
    if (bairro) msg += 'Bairro: '+bairro+'\n';
    if (ref)    msg += 'Ref.: '+ref+'\n';
  }
  const pays = { dinheiro:'💵 Dinheiro', pix:'📲 Pix', cartao:'💳 Cartão' };
  msg += '\n*Pagamento:* '+(pays[payMethod]||payMethod);
  if (payMethod==='dinheiro' && troco) msg += ' (troco para R$ '+troco+')';
  if (obs) msg += '\n*Obs.:* '+obs;
  msg += '\n\n_via site_ 🌐';
  window.open('https://wa.me/5599027965?text='+encodeURIComponent(msg), '_blank');
}

/* ─────────────────────────────────────────
   TOAST
───────────────────────────────────────── */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.classList.add('show');
  clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove('show'), 2500);
}

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
renderMenu();
buildSchedule();
updateStatus();
setInterval(updateStatus, 30000);
