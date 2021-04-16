const DomElement = function (selector) {
    this.selector = selector;
    this.height = '100px';
    this.width  = '50px';
    this.bg = 'green';
    this.fontSize = '20px';
};

DomElement.prototype.createEl = function () {
    if (this.selector[0] === '.') {
        let crDiv = document.createElement('div');
        crDiv.classList = this.selector.slice(1);
        crDiv.innerText = 'Это <div> элемент';
        crDiv.style.height = this.height;
        crDiv.style.width = this.width;
        crDiv.style.background = this.bg;
        crDiv.style.fontSize = this.fontSize;
        document.body.append(crDiv);
    } else if (this.selector[0] === '#') {
        let crP = document.createElement('p');
        crP.id = this.selector.slice(1);
        crP.innerText = 'Это <p> элемент';
        crP.style.height = this.height;
        crP.style.width = this.width;
        this.bg = 'red';
        crP.style.background = this.bg;
        crP.style.fontSize = this.fontSize;
        document.body.append(crP);
    }
};

let div = new DomElement('.div-element_class');
let p = new DomElement('#p-element_id');
div.createEl();
p.createEl();