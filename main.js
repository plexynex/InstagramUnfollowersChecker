let IUC = ''; 

fetch('main.txt')
    .then(response => {
        if (!response.ok) {
            throw new Error('Gagal memuat file');
        }
        return response.text(); 
    })
    .then(data => {
        IUC = data; 
        console.log(IUC); 
    })
    .catch(error => {
        console.error('Terjadi kesalahan:', error);
    });

const btnIUC = document.getElementById("copyBtn");
btnIUC.addEventListener("click", () => {
    if (IUC) {
        navigator.clipboard.writeText(IUC)
            .then(() => {
                btnIUC.innerHTML = "Done ✔";
                alert("Copied to clipboard!");
            })
            .catch(err => {
                console.error('Error copying text: ', err);
            });
    } else {
        alert("Isi file belum dimuat!");
    }
});
