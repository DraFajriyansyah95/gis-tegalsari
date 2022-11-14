<?php include "../configs/config.php"; ?>
<?php include "../components/head.php"; ?>

    <link rel="stylesheet" href="<?php echo $js_url;?>/bootstrap-5.0.2-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo $css_url;?>/custom.css">

<?php include "../components/header.php"; ?>

    <div id="main-container" class="container min-vh-100 p-5 bg-white">
        <div class="row">
            <div class="col-md-12 text-center">
                <h1>Data Kependudukan 2022</h1>
            </div>
        </div>
        <div class="row py-5">
            <div class="col-md-6 col-sm-12 col-xs-12 text-center p-5">
                <h3>Gender</h3>
                <canvas id="myChart-gender" width="400" height="400"></canvas>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12 text-center p-5">
                <h3>Agama</h3>
                <canvas id="myChart-agama" width="400" height="400"></canvas>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12 text-center p-5">
                <h3>Usia</h3>
                <canvas id="myChart-age" width="400" height="400"></canvas>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12 text-center p-5">
                <h3>Pendidikan</h3>
                <canvas id="myChart-study" width="400" height="400"></canvas>
            </div>
        </div>
    </div>
<?php include "../components/footer.php"; ?>

    <script src="<?php echo $js_url;?>main.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js" integrity="sha512-ElRFoEQdI5Ht6kZvyzXhYG9NqjtkmlkfYk0wr6wHxU9JEHakS7UJZNeml5ALk+8IKlU6jDgMabC3vkumRokgJA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script type="module" src="<?php echo $js_url;?>Chartjs/docs/scripts/utils.js"></script>
    <script type="module">
        import { Chart, registerables } from 'chart.js';
    </script>
    <script type="text/javascript">

        const ctx_gender = document.getElementById('myChart-gender');
        const ctx_agama = document.getElementById('myChart-agama');
        const ctx_age = document.getElementById('myChart-age');
        const ctx_study = document.getElementById('myChart-study');

        const DATA_COUNT = 5;
        const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};

        const data_gender = {
          labels: ['Laki-Laki', 'Perempuan'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [1404,1432],
              backgroundColor: ['Blue', 'Pink'],
            }
          ]
        };
        const data_agama = {
          labels: ['Islam', 'Kristen', 'Hindu', 'Budha', 'Katolik'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [2586,0,0,0,0],
              backgroundColor: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
            }
          ]
        };
        const data_age = {
          labels: ['0-5 tahun','6-12 tahun','13-17 tahun','18-25 tahun','26-50 tahun','<50 tahun'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [226,348,193,335,1072,792],
              backgroundColor: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'purple'],
            }
          ]
        };
        const data_study = {
          labels: ['SD', 'SMP', 'SMA', 'D2', 'D3', 'S1'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [43,28,43,2,1,8],
              backgroundColor: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Grey'],
            }
          ]
        };
        const config_gender = {
          type: 'pie',
          data: data_gender,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Gender'
              }
            }
          },
        };
        const config_agama = {
          type: 'pie',
          data: data_agama,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Agama'
              }
            }
          },
        };
        const config_age = {
          type: 'pie',
          data: data_age,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Usia'
              }
            }
          },
        };
        const config_study = {
          type: 'pie',
          data: data_study,
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Pendidikan'
              }
            }
          },
        };
        const myChart_gender = new Chart(ctx_gender, config_gender);
        const myChart_agama = new Chart(ctx_agama, config_agama);
        const myChart_age = new Chart(ctx_age, config_age);
        const myChart_study = new Chart(ctx_study, config_study);
    </script>
<?php include "../components/foot.php"; ?>