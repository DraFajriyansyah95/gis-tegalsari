<?php include "../configs/config.php"; ?>
<?php include "../components/head.php"; ?>

    <link rel="stylesheet" href="<?php echo $js_url;?>/bootstrap-5.0.2-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo $css_url;?>/custom.css">

<?php include "../components/header.php"; ?>

    <div id="main-container" class="container min-vh-100 p-5 bg-white">
        <div class="row">
            <div class="col-md-6">
                <h1>Geografis Kantor Desa</h1>
                <table class="table table-stripped">
                    <tr>
                        <td>Desa</td>
                        <td>Tegalsari</td>
                    </tr>
                        
                    <tr>
                        <td>Negara</td>
                        <td>Indonesia</td>
                    </tr>
                        
                    <tr>
                        <td>Provinsi</td>
                        <td> Jawa Barat</td>
                    </tr>
                        
                    <tr>
                        <td>Kabupaten</td>
                        <td>Majalengka</td>
                    </tr>
                        
                    <tr>
                        <td>Kecamatan</td>
                        <td>Maja</td>
                    </tr>
                        
                    <tr>
                        <td>Kode</td>
                        <td>Kemendagri 32.10.06.2007</td>
                    </tr>
                        
                    <tr>
                        <td>Luas</td>
                        <td> ... km²</td>
                    </tr>
                        
                    <tr>
                        <td>Jumlah</td>
                        <td>penduduk ... jiwa</td>
                    </tr>
                        
                    <tr>
                        <td>Kepadatan</td>
                        <td>... jiwa/km²</td>
                    </tr>
                    <tr>
                        <td>Letak Geografis<br/></td>
                        <td>.......</td>
                    </tr>
                        
                    <tr>
                        <td>Letak Batas Desa</td>
                        <td>........</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-6 py-5 px-3">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9995.14707271397!2d108.30055462661099!3d-6.899540778896891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f24cb1173be0d%3A0xc859c1f326eaf8e5!2sTegalsari%2C%20Kec.%20Maja%2C%20Kabupaten%20Majalengka%2C%20Jawa%20Barat!5e1!3m2!1sid!2sid!4v1668191024532!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <h2>Table Pimpinan Desa</h2>
                <table class="table table-stripped">
                    <thead>
                        <tr>
                        <td width="36"><strong>NO</strong></td>
                        <td width="178"><strong>NAMA KEPALA DESA</strong></td>
                        <td width="143"><strong>JABATAN</strong></td>
                        <td width="151"><strong>PERIODE</strong></td>
                        </tr>
                    </thead>
                   <tbody>
                    <tr>
                    <td width="36">1</td>
                    <td width="178">Bpk. Purnama Siregar</td>
                    <td width="143">Kepala Desa</td>
                    <td width="151">1950 s/d 1955</td>
                    </tr>
                    <tr>
                    <td width="36">2</td>
                    <td width="178">Bpk. Kasan Mukti</td>
                    <td width="143">Kepala Desa</td>
                    <td width="151">1955 s/d 1964</td>
                    </tr>
                    <tr>
                    <td width="36">3</td>
                    <td width="178">Bpk. M. Yusuf</td>
                    <td width="143">Kepala Desa</td>
                    <td width="151">1964 s/d 1974</td>
                    </tr>
                    <tr>
                    <td width="36">4</td>
                    <td width="178">Bpk. Sali</td>
                    <td width="143">Pelaksana Tugas</td>
                    <td width="151">1974 s/d 1975</td>
                    </tr>
                    <tr>
                    <td width="36">5</td>
                    <td width="178">Bpk. Kisman</td>
                    <td width="143">Kepala Desa</td>
                    <td width="151">1975 s/d 1986</td>
                    </tr>
                    <tr>
                    <td width="36">6</td>
                    <td width="178">Bpk. Marsudi</td>
                    <td width="143">Kepala Desa</td>
                    <td width="151">1986 s/d 1988</td>
                    </tr>
                    <tr>
                    <td width="36">7</td>
                    <td width="178">Bpk. Kisman</td>
                    <td width="143">Pelaksana Tugas</td>
                    <td width="151">1988 s/d 1989</td>
                    </tr>
                    <tr>
                    <td width="36">8</td>
                    <td width="178">Bpk. Wagiman</td>
                    <td width="143">Kepala Desa</td>
                    <td width="151">1989 s/d 2006</td>
                    </tr>
                    <tr>
                    <td width="36">9</td>
                    <td width="178">Bpk. Suherman</td>
                    <td width="143">Kepala Desa</td>
                    <td width="151">2006 s/d 2019</td>
                    </tr>
                    <tr>
                    <td width="36">10</td>
                    <td width="178">Bpk. Sugiman</td>
                    <td width="143">Kepala Desa</td>
                    <td width="151">2019 s/d sekarang</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

<?php include "../components/footer.php"; ?>

    <script src="<?php echo $js_url;?>main.js"></script>

<?php include "../components/foot.php"; ?>