const SOURCE_URL = 'https://usapen3.hatenablog.com/entry/2016/12/18/234110';

const groups = [
  {category:'基本', items:[
    ['タイムシート（アニメーションシート・エクスポージャーシート・撮影シート）',5],
    ['レイアウト用紙とフレーム',6],['主な画面サイズ（フレームサイズ）',6],['区間のあるカメラワークの範囲指示',7]
  ]},
  {category:'カメラワーク・セルワーク', items:[
    ['FIX（フィックス）',8],['PAN（パン・PAN UP/PAN DOWN）',8],['スライド（SL・引き・スライディング）',9],
    ['Follow（フォロー・台引き・トラベリング・トラッキング）',10],['付けPAN・Follow PAN（つけパン・角合わせPAN・フォローパン）',11],
    ['目盛りPAN（メモリPAN・大判の付けPAN）',12],['T.U/T.B（トラックアップ/トラックバック・トラックイン/トラックアウト）',13],
    ['クイックT.U/T.B（QT.U/T.B・クイックスローT.U/T.B）',13],['密着マルチFollow（Follow密着引き）',14],
    ['密着マルチ（回り込み風）',15],['密着PAN（密着スライド）',15],['密着T.U/T.B',16],['マルチT.U/T.B',16],
    ['ゴンドラT.U/T.B',17],['レイヤーT.U/T.B（デジタルT.U/T.B・DT.U/T.B・バイパックT.U/T.B・T.U/T.Bスライド）',18],
    ['ジャンプタップ（ジャンプスライド・2歩ごとのスライド・タップスライド・○コマごとのスライド）',19],
    ['フェアリング（クッション・ツメ・タメ）',20],['ローリング',20],['縮小貼り込み（拡大作画）',21],
    ['画面動・画ぶれ・カメラぶれ・カメラシェイク・車ぶれ',21],['ハンディぶれ・手ぶれ・カメラぶれ・空撮ぶれ',22]
  ]},
  {category:'場面転換', items:[
    ['F.I（フェードイン・溶明） ⇔ F.O（フェードアウト・溶暗）',23],['ホワイトイン（W.I） ⇔ ホワイトアウト（W.O）',23],
    ['フォーカスイン ⇔ フォーカスアウト',23],['O.L（オーバーラップ・ディゾルブ・トランディション・クロスフェード）',24],
    ['波ガラスO.L',24],['ワイプ（WIPE）',24],['アイリスイン ⇔ アイリスアウト',25]
  ]},
  {category:'エフェクト・露出', items:[
    ['多重露光（直撮り・半露出・ダブラシ・スーパー・透過光・透過光スーパーの違い）',26],['露出アンダー（アンダー） ⇔ 露出オーバー',27],
    ['サブリナ',27],['白コマ ⇔ 黒コマ',27],['カット内O.L（中O.L）',27],['ストロボ・多重ストロボ',28]
  ]},
  {category:'エフェクト・処理', items:[
    ['光芒・ビーム',29],['レンズフレア・フレア',29],['レンズゴースト',29],['スミア',29],
    ['消し込み ⇔ なめ出し（ワイプ出し・逆消し込み）',30],['ピン送り',30],['パラ・NTパラ',30],
    ['DF（ディフュージョン・紗・散光フィルター）',31],['フォギーフィルター（フォギー・フォグ・FOG）',31],
    ['クロスフィルター',31],['波ガラス',31],['ブラー・モーションブラー',32],
    ['ぼけ（アウトフォーカス・フォーカス・ピンぼけ・ピンアウト・オフピント）',32],['ストリームブラー（流線ブラー・グリス引き・タッチブラー・風を流す）',32],
    ['ラジアルブラー（集中ブラー・ラジアルフィルター）',33],['集中線ブレ（集中線タッチ）',33],['入射光',33],
    ['透過光（トーカ光・T光）',34],['モアレ透過光（銀紙透過光・模様透過光）',34],['すだれ引き透過光・波チラ・波キラ・ギラギラ透過光',34],
    ['リスマスク透過光',35],['ピンホール透過光',35],['クロス透過光',36],['白板透過光・テレサ光',36],['オーラ透過光',36],
    ['スリットスキャン',37],['チンダル現象（薄明光線）',37],['黒ブラシ',38]
  ]},
  {category:'その他', items:[
    ['シート記入の注意点',39],['原画・動画 作業時の注意点',40],['連続性のあるコピペ素材',41],['ディレイ',42],
    ['画面分割',42],['リピート（ループ）',42],['部分BOOK',42],['実写用語',42],['パカチェック（ポケモンチェック・ハーディング）',43]
  ]},
  {category:'なんでもQ&A', items:[['なんでもQ&A',44]]}
];

// 作例は「うさペンの館」の公開記事を参照。画像は同サイトの公開CDNをオンライン表示する。
const examples = [
  {keys:['FIX'], term:'FIX', work:'アイカツスターズ！ 21話', note:'カメラを固定した基本画面の作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20161001/20161001000207.gif'},
  {keys:['PAN（パン'], term:'PAN', work:'アイカツスターズ！ 25話', note:'広い範囲や複数の人物を見せるPANの作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20160930/20160930234202.gif'},
  {keys:['T.U/T.B（'], term:'T.U / T.B', work:'アイカツスターズ！ 36話', note:'被写体との距離感を変えるトラック操作の作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20161218/20161218215147.gif'},
  {keys:['クイックT.U/T.B'], term:'クイック T.B', work:'テイルズ オブ ゼスティリア ザ クロス 5話', note:'急速なT.Bで空間の広がりを強調する作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20160813/20160813090108.gif'},
  {keys:['F.I（フェードイン'], term:'F.I / F.O', work:'アイカツスターズ！ 25話', note:'明暗の変化で場面をつなぐフェードの作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20160930/20160930231735.gif'},
  {keys:['フォーカスイン'], term:'フォーカスIN / OUT', work:'DRIFTERS 1話', note:'ピントの移行を場面演出に使った作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20161218/20161218221449.gif'},
  {keys:['O.L（オーバーラップ'], term:'O.L', work:'魔法つかいプリキュア！ 28話', note:'前後の画を重ねながら切り替える作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20160814/20160814224030.gif'},
  {keys:['ワイプ（WIPE）'], term:'WIPE', work:'作例記事掲載カット', note:'画面をぬぐうように次の画へ切り替える作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20161218/20161218232301.gif'},
  {keys:['Follow（フォロー'], term:'Follow', work:'アイカツスターズ！ 21話', note:'移動する被写体を追い続けるカメラワークの作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20160902/20160902230151.gif'},
  {keys:['付けPAN・Follow PAN'], term:'Follow PAN', work:'進撃の巨人 Season 2 32話', note:'対象をフレーム内に保ちながら追う作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20170710/20170710211240.gif'},
  {keys:['密着マルチFollow'], term:'密着マルチ Follow', work:'ベルセルク（2016）7話', note:'多段引きで奥行きと勢いを出す作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20160821/20160821130704.gif'},
  {keys:['密着マルチ（回り込み風）'], term:'密着マルチ 回り込み風', work:'クロムクロ OP2', note:'前景と奥を別方向に引いて回り込み感を作る作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20160813/20160813083517.gif'},
  {keys:['密着T.U/T.B'], term:'密着 T.U/T.B', work:'ハイキュー!! 烏野高校VS白鳥沢学園高校 10話', note:'T.U/T.Bと前景スライドを組み合わせた作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20161218/20161218220147.gif'},
  {keys:['オーラ透過光'], term:'オーラ透過光', work:'ステラのまほう 2話', note:'オーラ状の光で感情や圧を強める作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20161023/20161023104816.gif'},
  {keys:['スリットスキャン'], term:'スリットスキャン', work:'装神少女まとい 1話', note:'空間の歪みのような変形表現に使った作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20161023/20161023215430.gif'},
  {keys:['画面動・画ぶれ'], term:'画面動', work:'アイカツスターズ！ 19話', note:'小刻みなフレーム移動で揺れを伝える作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20160831/20160831223237.gif'},
  {keys:['ハンディぶれ'], term:'ハンディぶれ', work:'この美術部には問題がある！ 10話', note:'手持ち撮影のような不安定さを出す作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20161218/20161218210237.gif'},
  {keys:['ブラー・モーションブラー'], term:'ブラー', work:'響け！ユーフォニアム2 OP', note:'方向性のあるボケで動きを見せる作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20161023/20161023103030.gif'},
  {keys:['ストリームブラー'], term:'ストリームブラー', work:'灼熱の卓球娘 10話', note:'流線状のブラーで速度感を強める作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20161218/20161218223915.gif'},
  {keys:['ラジアルブラー'], term:'ラジアルブラー', work:'テイルズ オブ ゼスティリア ザ クロス 11話', note:'放射状のブラーで視線と勢いを集中させる作例。', gif:'https://cdn-ak.f.st-hatena.com/images/fotolife/u/usapen3/20160922/20160922203603.gif'}
];

let activeCategory='すべて', currentPage=5, currentItem=null, currentMode='manual', detailMode='manual';
let favorites = JSON.parse(localStorage.getItem('msl-favorites') || '[]');
let recent = JSON.parse(localStorage.getItem('msl-recent') || '[]');

const $ = id => document.getElementById(id);
const tocView=$('tocView'), pageView=$('pageView'), tocList=$('tocList'), chips=$('categoryChips'), search=$('searchInput');
const pageImage=$('pageImage'), itemTitle=$('itemTitle'), categoryLabel=$('categoryLabel'), pageCounter=$('pageCounter');

function allItems(){ return groups.flatMap(g=>g.items.map(([title,page])=>({title,page,category:g.category}))); }
function imgPath(p){return `pages/page-${String(p).padStart(2,'0')}.jpg`;}
function itemKey(item){return `${item.category}|${item.title}|${item.page}`;}
function getExamplesForTitle(title=''){ return examples.filter(ex => ex.keys.some(k => title.includes(k))); }
function esc(s=''){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}

function renderChips(){
  if(currentMode!=='manual'){chips.innerHTML='';return;}
  const cats=['すべて',...groups.map(g=>g.category)];
  chips.innerHTML=cats.map(c=>`<button class="chip ${c===activeCategory?'active':''}" data-cat="${esc(c)}">${esc(c)}</button>`).join('');
  chips.querySelectorAll('button').forEach(b=>b.onclick=()=>{activeCategory=b.dataset.cat;renderChips();renderHomeContent();});
}

function renderRecent(){
  const block=$('recentBlock');
  if(currentMode!=='manual' || !recent.length){block.innerHTML='';return;}
  block.innerHTML=`<div class="recentTitle">最近見た項目</div><div class="recentRow">${recent.slice(0,6).map(r=>
    `<button class="recentChip" data-title="${encodeURIComponent(r.title)}" data-page="${r.page}" data-cat="${esc(r.category)}"><strong>${esc(r.title)}</strong><small>P.${r.page}</small></button>`
  ).join('')}</div>`;
  block.querySelectorAll('.recentChip').forEach(b=>b.onclick=()=>openPage(Number(b.dataset.page),decodeURIComponent(b.dataset.title),b.dataset.cat));
}

function renderManual(){
  const q=search.value.trim().toLowerCase();
  const visible=groups.filter(g=>activeCategory==='すべて'||g.category===activeCategory).map(g=>({
    ...g, items:g.items.filter(([t])=>!q||t.toLowerCase().includes(q)||g.category.toLowerCase().includes(q))
  })).filter(g=>g.items.length);
  if(!visible.length){tocList.innerHTML='<div class="empty">該当する項目がありません</div>';return;}
  tocList.innerHTML=visible.map(g=>`<section><div class="sectionTitle">${esc(g.category)}</div><div class="tocGroup">${g.items.map(([t,p])=>{
    const count=getExamplesForTitle(t).length;
    return `<button class="tocItem" data-title="${encodeURIComponent(t)}" data-page="${p}" data-cat="${esc(g.category)}"><span class="tocText"><strong>${esc(t)}${count?`<span class="hasExample">GIF ${count}</span>`:''}</strong><small>タップで P.${p} を表示</small></span><span class="pagePill">P.${p}</span></button>`;
  }).join('')}</div></section>`).join('');
  tocList.querySelectorAll('.tocItem').forEach(b=>b.onclick=()=>openPage(Number(b.dataset.page),decodeURIComponent(b.dataset.title),b.dataset.cat));
}

function renderExamples(filterFavorites=false){
  const q=search.value.trim().toLowerCase();
  let data=examples.filter(ex=>!q || [ex.term,ex.work,ex.note].join(' ').toLowerCase().includes(q));
  if(filterFavorites){
    const favTitles = new Set(allItems().filter(i=>favorites.includes(itemKey(i))).map(i=>i.title));
    data=data.filter(ex=>ex.keys.some(k=>[...favTitles].some(t=>t.includes(k))));
  }
  if(!data.length){tocList.innerHTML='<div class="empty">表示できる作例がありません</div>';return;}
  tocList.innerHTML=`<div class="sectionTitle">オンライン作例 — ${data.length}件</div><div class="exampleGrid">${data.map(exampleCardHTML).join('')}</div>`;
  wireGifErrors();
}

function renderFavorites(){
  const q=search.value.trim().toLowerCase();
  const data=allItems().filter(i=>favorites.includes(itemKey(i))).filter(i=>!q||i.title.toLowerCase().includes(q)||i.category.toLowerCase().includes(q));
  if(!data.length){tocList.innerHTML='<div class="empty">お気に入りはまだありません。項目を開いて ☆ をタップすると登録できます。</div>';return;}
  tocList.innerHTML=`<section><div class="sectionTitle">お気に入り — ${data.length}件</div><div class="tocGroup">${data.map(i=>`<button class="tocItem" data-title="${encodeURIComponent(i.title)}" data-page="${i.page}" data-cat="${esc(i.category)}"><span class="tocText"><strong>${esc(i.title)}${getExamplesForTitle(i.title).length?'<span class="hasExample">GIF</span>':''}</strong><small>${esc(i.category)}</small></span><span class="pagePill">P.${i.page}</span></button>`).join('')}</div></section>`;
  tocList.querySelectorAll('.tocItem').forEach(b=>b.onclick=()=>openPage(Number(b.dataset.page),decodeURIComponent(b.dataset.title),b.dataset.cat));
}

function exampleCardHTML(ex){
  return `<article class="exampleCard"><div class="exampleMedia"><img loading="lazy" src="${ex.gif}" alt="${esc(ex.term)} 作例GIF"><span class="onlineTag">ONLINE GIF</span></div><div class="exampleBody"><h3>${esc(ex.term)}</h3><p>${esc(ex.note)}</p><div class="exampleMeta">${esc(ex.work)}</div><a class="sourceBtn" href="${SOURCE_URL}" target="_blank" rel="noopener">出典記事を開く ↗</a></div></article>`;
}
function wireGifErrors(){document.querySelectorAll('.exampleMedia img').forEach(img=>img.onerror=()=>{img.parentElement.innerHTML='<div class="gifUnavailable">GIFを読み込めませんでした。<br>ネット接続を確認してください。</div>';});}

function renderHomeContent(){
  renderRecent();
  if(currentMode==='manual') renderManual();
  if(currentMode==='examples') renderExamples(false);
  if(currentMode==='favorites') renderFavorites();
}

function setMode(mode){
  currentMode=mode;
  document.querySelectorAll('.modeBtn').forEach(b=>b.classList.toggle('active',b.dataset.mode===mode));
  renderChips();renderHomeContent();
}

function openPage(p,title='',cat=''){
  currentPage=Math.max(1,Math.min(47,p)); currentItem={title:title||`P.${currentPage}`,category:cat||'本文',page:currentPage};
  pageImage.src=imgPath(currentPage); itemTitle.textContent=currentItem.title; categoryLabel.textContent=currentItem.category; pageCounter.textContent=`P.${currentPage} / 47`;
  $('prevBtn').disabled=currentPage<=1; $('nextBtn').disabled=currentPage>=47;
  const rel=getExamplesForTitle(currentItem.title); $('exampleCount').textContent=rel.length?`(${rel.length})`:''; $('exampleTab').disabled=!rel.length;
  renderRelatedExamples(rel); updateFavoriteButton(); setDetail('manual');
  tocView.classList.remove('active'); pageView.classList.add('active'); window.scrollTo({top:0,behavior:'instant'});
  recent=[currentItem,...recent.filter(r=>itemKey(r)!==itemKey(currentItem))].slice(0,8); localStorage.setItem('msl-recent',JSON.stringify(recent));
  history.replaceState(null,'',`#page=${currentPage}&title=${encodeURIComponent(currentItem.title)}&cat=${encodeURIComponent(currentItem.category)}`);
}

function renderRelatedExamples(rel){
  $('relatedExamples').innerHTML=rel.map(exampleCardHTML).join(''); $('noExample').classList.toggle('hidden',!!rel.length); wireGifErrors();
}
function showToc(){pageView.classList.remove('active');tocView.classList.add('active');$('paperWrap').classList.remove('zoomed');$('fitBtn').textContent='画像を拡大';history.replaceState(null,'',location.pathname+location.search);renderHomeContent();window.scrollTo({top:0,behavior:'instant'});}
function step(delta){openPage(currentPage+delta,currentItem?.title||'',currentItem?.category||'本文');}
function setDetail(mode){detailMode=mode;document.querySelectorAll('.detailTab').forEach(b=>b.classList.toggle('active',b.dataset.detail===mode));$('manualPanel').classList.toggle('active',mode==='manual');$('examplePanel').classList.toggle('active',mode==='example');window.scrollTo({top:0,behavior:'instant'});}
function toggleFavorite(){if(!currentItem)return;const k=itemKey(currentItem); favorites=favorites.includes(k)?favorites.filter(x=>x!==k):[...favorites,k];localStorage.setItem('msl-favorites',JSON.stringify(favorites));updateFavoriteButton();}
function updateFavoriteButton(){if(!currentItem)return;const on=favorites.includes(itemKey(currentItem));$('favoriteBtn').classList.toggle('active',on);$('favoriteBtn').textContent=on?'★':'☆';}

search.addEventListener('input',renderHomeContent);
$('clearSearch').onclick=()=>{search.value='';renderHomeContent();search.focus();};
document.querySelectorAll('.modeBtn').forEach(b=>b.onclick=()=>setMode(b.dataset.mode));
$('homeBtn').onclick=showToc;$('brandBtn').onclick=showToc;$('tocBtn').onclick=showToc;$('tocBtn2').onclick=showToc;
$('prevBtn').onclick=()=>step(-1);$('nextBtn').onclick=()=>step(1);$('favoriteBtn').onclick=toggleFavorite;
document.querySelectorAll('.detailTab').forEach(b=>b.onclick=()=>{if(!b.disabled)setDetail(b.dataset.detail);});
$('fitBtn').onclick=()=>{const wrap=$('paperWrap');wrap.classList.toggle('zoomed');$('fitBtn').textContent=wrap.classList.contains('zoomed')?'画面に合わせる':'画像を拡大';};

$('termCount').textContent=allItems().length;
renderChips();renderHomeContent();
const m=location.hash.match(/page=(\d+)(?:&title=([^&]+))?(?:&cat=([^&]+))?/);if(m)openPage(Number(m[1]),m[2]?decodeURIComponent(m[2]):`P.${m[1]}`,m[3]?decodeURIComponent(m[3]):'本文');
