document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file');
    const fileNameSpan = document.getElementById('fileName');
    const toast = document.getElementById('toast');
    const closeToastBtn = document.getElementById('close-toast');
    
    // File input label update
    fileInput.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            fileNameSpan.textContent = e.target.files[0].name;
            fileNameSpan.style.color = '#f8fafc'; // Change to primary text color
        } else {
            fileNameSpan.textContent = 'Choose file to upload';
            fileNameSpan.style.color = '#94a3b8'; // Revert back to secondary
        }
    });

    // Toast show on load (to replicate the screenshot context "Welcome back, alice.")
    setTimeout(() => {
        showToast();
    }, 600);

    // Toast close button
    closeToastBtn.addEventListener('click', () => {
        hideToast();
    });

    function showToast() {
        toast.classList.add('show');
        
        // Auto hide toast after 4 seconds (matching the progress bar animation)
        setTimeout(() => {
            hideToast();
        }, 4000);
    }

    function hideToast() {
        toast.classList.remove('show');
    }

    // Optional form submission prevention for demo
    const form = document.getElementById('uploadForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if(fileInput.files.length > 0) {
            alert(`Simulating upload for: ${fileInput.files[0].name}`);
            // Reset after upload
            form.reset();
            fileNameSpan.textContent = 'Choose file to upload';
            fileNameSpan.style.color = '#94a3b8';
        } else {
            alert('Please select a file first.');
        }
    });

});
