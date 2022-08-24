function DoDownload() {
    let check = window.confirm('ダウンロード前に必ず上記の注意事項・禁止事項をお読みください。\nお読みになりましたか？');
    
    if(check) {
        const url = 'https://github.com/Ameuma773/EarthQuickly/releases/download/v0.4.2/EarthQuickly.0.4.2.zip';
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.download = 'EarthQuickly v0.4.2.zip';
        a.href = url;
        a.click();
        a.remove();
    }
}