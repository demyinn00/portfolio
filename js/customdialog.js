/**
 * This is a custom alert function that will open a pop up dialog with a message
 * @param {string} msg 
 */

function customAlert(msg) {
  // Clone the template
  const dialogTemplate = document.querySelector('#dialog-template');
  const dialogClone = dialogTemplate.content.cloneNode(true);

  // Query select everything of interest
  const dialogTitle = dialogClone.querySelector('#dialog-title');
  const dialogInput = dialogClone.querySelector('#dialog-input');
  const cancelBtn = dialogClone.querySelector('#cancel-btn');
  const okBtn = dialogClone.querySelector('#ok-btn');
  const dialog = dialogClone.querySelector('#dialog');
  
  // Remove unneeded elements
  dialogInput.style.display = 'none';
  cancelBtn.style.display = 'none';

  // Assign the message
  dialogTitle.innerText = msg;

  // Once the user clicks ok -> remove the dialog box
  okBtn.addEventListener('click', () => {
    document.body.removeChild(dialog);
  });

  // Attach the dialog to the body and display the box
  document.body.appendChild(dialog);
  dialog.setAttribute('open', true);
}

/**
 * This is a custom confirm function that will display a message and send back true or false based on user's click
 * @param {string} msg 
 * @param {function} callback 
 */
function customConfirm(msg, callback) {
  // Clone the template
  const dialogTemplate = document.querySelector('#dialog-template');
  const dialogClone = dialogTemplate.content.cloneNode(true);

  // Query select everything of interest
  const dialogTitle = dialogClone.querySelector('#dialog-title');
  const dialogInput = dialogClone.querySelector('#dialog-input');
  const cancelBtn = dialogClone.querySelector('#cancel-btn');
  const okBtn = dialogClone.querySelector('#ok-btn');
  const dialog = dialogClone.querySelector('#dialog');

  // Remove unneeded elements
  dialogInput.style.display = 'none';

  // Assign the message
  dialogTitle.innerText = msg;

  // Set up event listeners for the buttons
  // Send true or false based on what was clicked
  okBtn.addEventListener('click', () => {
    document.body.removeChild(dialog);
    callback(true);
  });

  cancelBtn.addEventListener('click', () => {
    document.body.removeChild(dialog);
    callback(false);
  });

  // Attach the dialog to the body and display the box
  document.body.appendChild(dialog);
  dialog.setAttribute('open', true);
}

/**
 * This is a custom prompt function that will display a message and ask for user input
 * @param {string} msg 
 * @param {function} callback 
 */
function customPrompt(msg, callback) {
  // Clone the template
  const dialogTemplate = document.querySelector('#dialog-template');
  const dialogClone = dialogTemplate.content.cloneNode(true);
  
  // Query select everything of interest
  const dialogTitle = dialogClone.querySelector('#dialog-title');
  const dialogInput = dialogClone.querySelector('#dialog-input');
  const cancelBtn = dialogClone.querySelector('#cancel-btn');
  const okBtn = dialogClone.querySelector('#ok-btn');
  const dialog = dialogClone.querySelector('#dialog');

  // Assign the message
  dialogTitle.innerText = msg;
  
  // Set up event listeners for the buttons
  // Based on what the user clicked, send back message
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