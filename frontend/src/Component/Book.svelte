<script>
//props
export let bookName;
export let author;
export let image;
export let title;
export let year;

</script>

<style></style>

<div>
    <div class="border border-black rounded-xl py-1 px-1">
        <div class="p-1 h-[35vh] w-[100%] border border-black rounded-xl">
            <img src={image} alt={bookName} />
        </div>
        <p class="px-4 text-[23px] font-bold text-blue-600 capitalize">{bookName}</p>
        <p class="px-4 text-[19px] font-semibold text-blue-700 capitalize">{author}</p>
        <div class="pl-4 flex flex-row gap-10 font-semibold capitalize">
            <span>{title}</span>
            <span>{year}</span>
        </div>
    </div>
</div>