const quizQuestionsData = [
  {
    question: 'Не можна купатися в морі/річці під час місячних',
    shortAnswer: false,
    answer: `Звичайно, можна. Можна навіть в басейні!
      Щоправда, якщо ти користуєшся прокладками, то купатися з ними не вийде –
      вони наберуться води та відклеяться. Подумай про тампон або менструальну чашу –
      то дуже надійні штуки, які обов’язково допоможуть всім,
      хто хоче купатися під час місячних і не забруднити купальник`
  },
  {
    question: 'Не можна фарбувати волосся під час місячних',
    shortAnswer: true,
    answer: `Ліпше не треба, але якщо дуже хочеться, - можна.
     Щоправда, враховуючи, що кожна людина переживає менструальний цикл індивідуально,
     хтось може відчувати дискомфорт в ділянці шкіри голови під час місячних.
     Тоді ліпше почекати, поки вони пройдуть і фарбувати волосся тоді,
     коли шкіра голови почувається добре, адже нанесення будь-якої хімічної речовини –
     це завжди стрес для шкіри. Окрім того, протягом кількох перших днів місячних
     під дією підвищеного естрогену потові залози працюють в посиленому режимі,
     а тому голова жирніє швидше, ніж потрібно. Це заважає фарбі проникати всередину волосинки,
     а тому фарбування волосся ліпше відкласти на кілька днів.`
  },
  {
    question: 'Не можна займатися сексом/мастурбувати під час місячних',
    shortAnswer: false,
    answer: `Немає жодних доказів, що секс може негативно вплинути на жіноче
     тіло під час місячних. Навпаки, оргазм та загалом задоволення від сексуальної активності
     може полегшити біль від менструації, адже до статевих органів приливає кров і
     спазм в матці слабшає. Головне, пам’ятай – завагітніти під час місячних ще й як можливо,
     так само як і заразитися венеричними хворобами. Тому не шукай пригод на голову -
     користуйся презервативами.`
  },
  {
    question: 'Не можна голити ноги до того, як місячні почнуться',
    shortAnswer: false,
    answer: `Можна, особливо, якщо воно вже почало ставати темнішим та жорсткішим.
     Проте, якщо волосся не має сильного забарвлення і має м’яку структуру, його ліпше взагалі
     не чіпати - після частого гоління воно стане ще грубшим і темнішим, а отже, тобі захочеться
     голити його частіше. Насправді ж волосся після гоління тільки здається грубим і жорстким,
     тому що у кореня воно дійсно товще, ніж на кінцях. Людське волосся нагадує олівці,
     які звужуються в кінці. Тому, коли бритва позбавляє його верхівки, може здатися,
     що волосся відростає товщим або темнішим, ніж було до гоління. Але якщо ви дасте йому
     повністю відрости, то помітите, що воно не змінилося. Що стосується кольору, то волосся,
     яке відростає дійсно трохи темніше, але тільки тому, що воно ще не контактувало із сонячним
     світлом (source: http://www.wakehealth.edu/)`
  },
  {
    question: 'Менструальна кров брудна',
    shortAnswer: false,
    answer: `Менструальна кров дійсно відрізняється від тої крові, що тече по наших судинах,
    адже вона містить в собі елементи тканини, що покриває матку зсередини та вагінальні секреції.
    А ще вона не згортається.
    Проте це аж ніяк не робить її брудною - вона абсолютно нормальна`
  },
  {
    question: 'Через тампон/катання на велосипеді/заняття спортом можна втратити цноту',
    shortAnswer: false,
    answer: `ну, тут складне питання, бо цнота це питання радше філософське, ніж фізіологічне
     (про це ми більше поговоримо в наступних темах Вперше).
     Якщо коротко, то ні, зазвичай, ні від тампону, ні від спорту,
     ні від катання на велосипеді втратити цноту не можна, адже гімен (в народі - дівоча пліва),
     зазвичай, просто розтягується. Деяким дівчатам може бути не дуже приємно (деколи навіть боляче)
     користуватися тампоном. Основне, перед тим уважно вивчи інструкцію по використанню тампонів –
     і не тримай в собі один тампон більше 5 годин, бо то некорисно для флори твоєї піхви.
     Навіть, якщо через певні активності, гімен прорвався, - це не привід для переживання.
     Це ніяк не вплине на твій перший секс чи на твоє здоров’я.
     Технічна “втрата цноти” переоцінена - більшість фахівців притримуються ідеї,
     що дівчина лишається цнотливою до свого першого сексу, незважаючи ні на що.`
  },
  {
    question: 'Від мастурбації можна осліпнути',
    shortAnswer: false,
    answer: `Від мастурбації не можна ні осліпнути, ні позеленіти, ні померти.
     Про мастурбацію ми більше розкажемо пізніше.
     Але, якщо коротко, то вона корисна, якщо робити це правильно і в помірних кількостях.`
  },
  {
    question: 'Несвідомі виділення сперми з пеніса вночі можуть свідчити про рак',
    shortAnswer: false,
    answer: `Це точно не свідчить про рак. Ця штука називається полюції
     (слово стрьомне, але нічого не поробиш, то науковий термін!).
     Вона стається з більшістю хлопців, часто це навіть від віку не залежить.
     Це свідчить тільки про те, що ти дорослішаєш, і твоєму тілу якось треба справлятися
     із сексуальною напругою, яка у ньому накопичується, хоча воно до цього аж ніяк не звикло. `
  },
  {
    question: 'Якщо їсти капусту, виростуть груди',
    shortAnswer: false,
    answer: `Оце наша улюблена брехня! Загалом, їсти капусту – це добре,
     там багато вітамінів і мінералів, які, зокрема, допомагають роботі серця.
     Проте груди від неї не виростуть – скільки не їж.
     А от від чого вони точно виростуть – так це від часу. Треба просто почекати.`
  },
  {
    question: 'Після того, як почалися місячні, груди не будуть рости',
    shortAnswer: false,
    answer: `Зазвичай груди найбільше виростають якраз після того, як почалися місячні.
     Але цей процес дуже індивідуальний – у кожної дівчини він проходить по-різному. `
  },
  {
    question: 'Акне з’являється через нездорове харчування',
    shortAnswer: false,
    answer: `У підлітковому віці акне з’являється від шабашу, який в твоєму організмі влаштовують гормони.
     А ще інтенсивність висипу у дівчат залежить від періоду менструального циклу –
     зазвичай, перед місячними шкіра жирнішає і прищів може стати більше.
     Не лякайся, прищики зазвичай проходять за кілька днів, якщо їх не рухати.`
  },
  {
    question: 'Під час місячних не можна видавлюти прищі',
    shortAnswer: false,
    answer: `Прищі справді ліпше не давити, а якщо дуже хочеться,
     то тільки з очищеними спиртом руками і шкірою.
     Робити це можна коли завгодно, незалежно від стадії циклу, хоча за словами дерматологів - небажано.`
  },
  {
    question: 'Акне пройде після того, як почнеш займатися сексом',
    shortAnswer: false,
    answer: `Акне ніяк не пов’язане з сексом. Воно, як я вже писала,
     з’являється через надлишок жиру в шкірі, який з’являється через гормональний бум в твоєму тілі, –
     тут вже нічого не поробиш, навіть секс не допоможе,
     доведеться просто чекати і насолоджуватися своєю підлітковістю.
     Хоча вагітність, можливо, знизить кількість прищиків – але от чи варто вагітніти лише для того,
     щоб пройшли прищі, тут я вже не впевнена.  😊 Окрім того,
     дівчата можуть почати пити оральні контрацептиви, які при правильному індивідуальному підборі
     у гінеколога, окрім своєї основної функції -
     контрацепції, ще можуть покращити стан шкіри та волосся.`
  }
];

export default quizQuestionsData;
