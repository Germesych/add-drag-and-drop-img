let drop;
function initiate(){
  drop = document.querySelector('#dropbox');
  drop.addEventListener('dragenter', function(e){ e.preventDefault(); });
  drop.addEventListener('dragover', function(e){ e.preventDefault(); });
  drop.addEventListener('drop', dropped);
}

function dropped(e){

  e.preventDefault();
  let files = e.dataTransfer.files;
  let list = '';
  //!
  let fileObject = files[0];
  let fileReder = new FileReader();
  fileReder.readAsDataURL(fileObject);
  fileReder.onload = function () {
    const div = document.querySelector('.img')
    let result = fileReder.result;
    let img = document.createElement('img');
    img.innerHTML = '';
    div.append(img);
    img.setAttribute('src', result);
  }
  //!
  for(let f = 0; f < files.length; f++){
    list += 'Вы загрузили файл: ' + files[f].name + '.Размер: ' + files[f].size + 'байт<br>'
  }
  drop.innerHTML = list;
}
addEventListener('load', initiate);

















// document.querySelector('.input--file').addEventListener("change", imgInit, true);

// function imgInit(velue) {
// 	// Вставляем основной div
// 	addAdAddImg = document.querySelector('.add-ad__add-img');
// 	let divBlock = document.createElement('div');
// 	divBlock.className = "add-ad__add-img-blk";
// 	addAdAddImg.append(divBlock);
// 	imgDescription = document.querySelector('.add-ad__add-img-blk');
// 	// вставляем картинку
// 	let imgCreate = document.createElement('img');
// 	imgCreate.innerHTML = '';
// 	imgDescription.append(imgCreate);
// 	//Вставляем имя картинки
// 	let vall = velue.target.files[0].name;
// 	let spanDesc = document.createElement('span');
// 	spanDesc.className = "img--description";
// 	spanDesc.innerHTML = '' + vall;
// 	imgDescription.append(spanDesc);
// 	// Добаляе6м крестик
// 	let spanImgDell = document.createElement('span');
// 	spanImgDell.className = "img--dell";
// 	spanImgDell.innerHTML = 'X';
// 	imgDescription.append(spanImgDell);
// 	console.log(vall);
// };
