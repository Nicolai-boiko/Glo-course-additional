const DomElement = function (selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width  = width;
    this.bg = bg;
    this.fontSize = fontSize;
  };
  
  DomElement.prototype.createEl = function (str) {
    if (this.selector[0] === '.') {
        let crDiv = document.createElement('div');
        crDiv.classList = this.selector.slice(1);
        crDiv.innerText = str;
        crDiv.style.height = this.height;
        crDiv.style.width = this.width;
        crDiv.style.background = this.bg;
        crDiv.style.fontSize = this.fontSize;
        document.body.append(crDiv);
    } else if (this.selector[0] === '#') {
        let crP = document.createElement('p');
        crP.id = this.selector.slice(1);
        crP.innerText = str;
        crP.style.height = this.height;
        crP.style.width = this.width;
        crP.style.background = this.bg;
        crP.style.fontSize = this.fontSize;
        document.body.append(crP);
    }
  };
  
  let div = new DomElement('.div-element_class', '30px', '60px', 'yellow', '12px');
  let p = new DomElement('#p-element_id', '30px', '90px', 'pink', '15px');
  div.createEl('Это <div> элемент');
  p.createEl('Это <p> элемент');