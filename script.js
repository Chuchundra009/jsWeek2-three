const imgCat = document.getElementById('img-cat');
console.log(imgCat)

function btnPre() {
    imgCat.src = 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';
}

function btnNxt() {
    imgCat.src = 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60';
}