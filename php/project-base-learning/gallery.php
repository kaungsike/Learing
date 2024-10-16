<?php include("./template/header.php") ?>
<?php include("./template/side-bar.php") ?>

<section class="bg-gray-100 p-16 rounded-lg">
    <form class="w-full" method="post" action="./gallery-process.php" enctype="multipart/form-data">
        <label for="file-input" class="sr-only">Choose file</label>
        <input multiple type="file" name="upload[]" id="file-input" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-neutral-700 dark:file:text-neutral-400">

        <button type="submit" class="mt-5 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800">
            Upload
        </button>
    </form>
</section>

<section class="bg-gray-100 p-16 rounded-lg mt-5">
    <p class="text-center text-2xl mb-3">Uploaded Photoes</p>
    <?php
        $photoes = scandir('photo');
    ?>
    <div class="grid grid-cols-2 gap-3">
        <?php foreach($photoes as $photo): ?>
            <img src="./photo/<?=$photo ?>" alt="">
        <?php endforeach; ?>
    </div>

</section>

<?php include("./template/footer.php") ?>