export default function decorate(block) {
  const { children } = block.firstElementChild;
  const selectedElement = children[0]?.innerText;
  const formId = children[1]?.innerText;
  const klaviyoSignUpFormElement = klaviyoSignUpForm(formId, selectedElement);

  block.innerHTML = '';
  block.append(klaviyoSignUpFormElement);
}

function klaviyoSignUpForm(className, selectedElement) {
  const element = document.createElement(selectedElement);
  element.classList.add(className);

  return element;
}
