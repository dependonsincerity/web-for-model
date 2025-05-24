// Получаем все маленькие изображения
const sidePh = document.querySelectorAll('.side-photos img');

// Создаем модальное окно
const model = document.createElement('div');
model.id = 'imageModel';
model.innerHTML = `
  <div class="model-content">
    <span class="close">&times;</span>
    <img class="model-img" src="" alt="">
    <div class="nav left">&#10094;</div>
    <div class="nav right">&#10095;</div>
  </div>
`;
document.body.appendChild(model);

const modelIMG = model.querySelector('.model-img');
const closebutton = model.querySelector('.close');
const navigationleft = model.querySelector('.nav.left');
const navigationright = model.querySelector('.nav.right');

let currentIndex = 0;

// Функция открыть модалку
function openModal(index) {
  currentIndex = index;
  model.style.display = 'flex';
  modelIMG.src = sidePh[index].src;
  document.body.classList.add("modal-open");
}

// Закрыть 
closebutton.onclick = () => {
  model.style.display = 'none';
  document.body.classList.remove("modal-open");
};

// Перелистывание
function showImage(index) {
  if (index < 0) index = sidePh.length - 1;
  if (index >= sidePh.length) index = 0;
  modelIMG.src = sidePh[index].src;
  currentIndex = index;
}

navigationleft.onclick = () => showImage(currentIndex - 1);
navigationright.onclick = () => showImage(currentIndex + 1);

// По клику на изображение — открываем
sidePh.forEach((img, index) => {
  img.addEventListener('click', () => openModal(index));
});

// Клик вне изображения — закрыть
model.addEventListener('click', (e) => {
  if (e.target === model) {
    model.style.display = 'none';
    document.body.classList.remove("modal-open");
  }
});

// // Клавиатура ← →
// document.addEventListener('keydown', (e) => {
//   if (model.style.display === 'flex') {
//     if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
//     if (e.key === 'ArrowRight') showImage(currentIndex + 1);
//     if (e.key === 'Escape') model.style.display = 'none';
//   }
// });