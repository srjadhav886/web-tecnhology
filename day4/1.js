let Btn = document.querySelector('input');
Btn.addEventListener('click', inputMsg);


async function callBackendApi() {

    let varn = prompt('Enter number of comments');
    const url = 'https://jsonplaceholder.typicode.com/posts?_limit=' + varn;

    const res = await fetch(url);
    const list = await res.json();
    prevChilds = null
    console.log(list);


    const parent = document.querySelector("#parent");
    for (let item of list) {
        const prevChilds = parent.innerHTML;
        const newChild = `<p>${item.body}</p>`;
        parent.innerHTML = newChild + prevChilds;
    }

}
