function customAlert(msg) {
  const dialogTemplate = document.querySelector('#dialog-template');
  const dialogClone = dialogTemplate.content.cloneNode(true);
  const dialogTitle = dialogClone.querySelector('#dialog-title');
  const dialogInput = dialogClone.querySelector('#dialog-input');
  const cancelBtn = dialogClone.querySelector('#cancel-btn');
  const okBtn = dialogClone.querySelector('#ok-btn');
  const dialog = dialogClone.querySelector('#dialog');
  
  // Remove unneeded elements
  dialogInput.style.display = 'none';
  cancelBtn.style.display = 'none';

  dialogTitle.innerText = msg;
  okBtn.addEventListener('click', () => {
    document.body.removeChild(dialog);
  });

  document.body.appendChild(dialog);
  dialog.setAttribute('open', true);
}

function customConfirm(msg, callback) {
  const dialogTemplate = document.querySelector('#dialog-template');
  const dialogClone = dialogTemplate.content.cloneNode(true);
  const dialogTitle = dialogClone.querySelector('#dialog-title');
  const dialogInput = dialogClone.querySelector('#dialog-input');
  const cancelBtn = dialogClone.querySelector('#cancel-btn');
  const okBtn = dialogClone.querySelector('#ok-btn');
  const dialog = dialogClone.querySelector('#dialog');

  // Remove unneeded elements
  dialogInput.style.display = 'none';

  dialogTitle.innerText = msg;
  okBtn.addEventListener('click', () => {
    document.body.removeChild(dialog);
    callback(true);
  });

  cancelBtn.addEventListener('click', () => {
    document.body.removeChild(dialog);
    callback(false);
  });
  document.body.appendChild(dialog);
  dialog.setAttribute('open', true);
}

function customPrompt(msg, callback) {
  const dialogTemplate = document.querySelector('#dialog-template');
  const dialogClone = dialogTemplate.content.cloneNode(true);
  const dialogTitle = dialogClone.querySelector('#dialog-title');
  const dialogInput = dialogClone.querySelector('#dialog-input');
  const cancelBtn = dialogClone.querySelector('#cancel-btn');
  const okBtn = dialogClone.querySelector('#ok-btn');
  const dialog = dialogClone.querySelector('#dialog');

  dialogTitle.innerText = msg;
  

  okBtn.addEventListener('click', () => {
    document.body.removeChild(dialog);
    callback(dialogInput.value);
  });

  cancelBtn.addEventListener('click', () => {
    document.body.removeChild(dialog);
    callback(`User clicked cancel`);
  });
  document.body.appendChild(dialog);
  dialog.setAttribute('open', true);
}

export { customAlert, customConfirm, customPrompt };