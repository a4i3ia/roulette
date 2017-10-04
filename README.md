copy folder 'directives' to 'src/'
copy folder 'roulette' to 'src/page/'

import `RoulettePageModule` to app.module.ts like `imports: [RoulettePageModule]`

add button with `navPush` like:
`<button ion-button [navPush]="roulettePage">Roulette</button>`
and create a variable in the current *.ts file like `roulettePage = RoulettePage;` 
with `import {RoulettePage} from "../roulette/roulette";`