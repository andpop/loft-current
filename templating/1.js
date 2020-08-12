{
    list: [
        {
            name: 'Иван',
            lastName: 'Петров',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
        },
        {
            name: 'Андрей',
            lastName: 'Никитин',
            photo: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'
        }
    ]
}


<div class="friends">
{{#each list}}
    <div class="friend">
        <img src="{{photo}}">
        <div>{{name}}</div>
        <div>{{lastName}}</div>
    </div>
{{/each}}
</div>

<div class="friends">
    <div class="friend">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg">
        <div>Иван</div>
        <div>Петров</div>
    </div>
    <div class="friend">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg">
        <div>Андрей</div>
        <div>Никитин</div>
    </div>
</div>
