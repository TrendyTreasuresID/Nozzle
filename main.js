$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault(); // Mencegah form untuk mengirimkan data secara default

        // Mendapatkan nilai dari input form
        var produk = $('input[name="produk"]').val();
        var harga = $('input[name="harga"]').val();
        var metode = $('select[name="metode"]').val();
        var nama = $('input[name="nama"]').val();
        var kontak = $('input[name="kontak"]').val();
        var alamat = $('textarea[name="alamat"]').val();

        // Menggabungkan data menjadi pesan yang akan dikirim ke Telegram
        var message = "Produk: " + produk + "\nHarga: " + harga + "\nMetode Pembayaran: " + metode + "\nNama: " + nama + "\nKontak: " + kontak + "\nAlamat: " + alamat;

        // Kirim data ke Telegram menggunakan URL webhook Anda
        var telegramURL = "https://api.telegram.org/bot6986545110:AAHcWP18jdttDrO6__KxbA8IQI1s6Drfnwk/sendMessage?chat_id=6082930996&text=" + encodeURIComponent(message);

        // Kirim request AJAX ke URL Telegram
        $.ajax({
            url: telegramURL,
            method: 'GET',
            success: function(response){
                // Jika pengiriman berhasil, tampilkan peringatan menggunakan alert
                alert("Pesanan berhasil dikirim!");
            },
            error: function(xhr, status, error){
                // Jika terjadi kesalahan, tampilkan pesan kesalahan menggunakan alert
                alert("Terjadi kesalahan saat mengirim pesanan ke Telegram. Silakan coba lagi.");
                console.error(error);
            }
        });
    });
});
