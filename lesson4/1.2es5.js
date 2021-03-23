"use strict";
/*
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео
-> 3 примеры наследования
-> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и
сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit,
который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date.
Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код.
Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
который будет назначать свойству highlighted значение true.
 */

function Post(author, text, date) {// a
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = text;
}

const post1 = new Post('alex', 'lorem ipsum', new Date());
console.log(post1);
post1.edit('dolor sit');
console.log(post1);


function AttachedPost(author, text, date) { //b
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

const attached1 = new AttachedPost('admin', 'lorem2 ipsum2', new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit('dolor2 sit2');
console.log(attached1);