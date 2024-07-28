<script>
    export let bookName;
    export let author;
    export let image;
    export let title;
    export let year;
</script>

<div
    class="border border-gray-300 rounded-lg p-4 hover:transform hover:scale-105 transition-transform duration-300"
>
    <div class="h-[200px] overflow-hidden rounded-lg mb-4">
        <img src={image} alt={bookName} class="h-full w-full object-cover" />
    </div>
    <p class="text-lg font-bold text-black capitalize">{bookName}</p>
    <p class="text-md font-semibold text-blue-700 capitalize">{author}</p>
    <div class="flex justify-between text-sm font-semibold capitalize">
        <span>{title}</span>
        <span>{year}</span>
    </div>
</div>
