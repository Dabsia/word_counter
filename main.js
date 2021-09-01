const textArea = document.getElementById('word');
const words_count = document.getElementById('show')


textArea.oninput = () => {
    let words = textArea.value.split(' ').filter((item) =>{
        return item != '';
    });
    words_count.textContent = words.length;
}
