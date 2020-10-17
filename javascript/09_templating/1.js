{
    names: [
        {
            name: 'Сергей',
            lastName: 'Андреев',
        },
        {
            name: 'Николай',
            lastName: 'Петров',
        }
    ]
}

<ul>
    {{#each names}}
    <li>{{lastName}}</li>
    {{/each}}

</ul>

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

