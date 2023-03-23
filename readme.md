Задание: 

Обновляемый список котировок

1. Сделать репозиторий и поместить в readme.md описание задания;
2. Составить план реализации, разбив большую задачу на более мелкие, длиной не больше 2-х часов;
3. План поместить в readme.md и выложить на github;
4. Сделать отдельную ветку в репозитории и разрабатывать в ней, делая отдельные коммиты на каждую из подзадач;
5. По завершению сделать pull request из своей ветки в основную, ссылку на pull request в github прислать

Приложение

Должно отображать список котировок криптовалют, торугемых на бирже binance.
Данные должны загружаться из http api при старте приложения и обновляться каждые 5 секунд.
Внешний вид - три колонки: название, курс, изменение курса, нужно взять макет со списком отсюда и сверстать его.
Третья колонка должна отображать изменение текущей цены по сравнению с той, которая была в момент первой загрузки данных.




План реализации:

1. Создание приложения через vue-cli
2. Верстка для десктопа
3. Верстка для мобильных
4. Создать массив объектов , в который будут помещаться загруженные данные.
5. Создать метод loadQuotes который будет загружать курс валют через get-запрос и помещать данные в массив
6. Вывести список валют в шаблон через v-for - name/ current course
7. Вызвать loadQuotes в mounted чтобы загрузить начальные котировки + создать модель ‘initial course’ и поместить туда котировку
8. Создать метод uploadQuotes, к-ый будет через каждые 5 секунд вызывать loadQuotes
9. Создать дочерний компонент, который будет принимать 'initial course' и 'current course', в нем создать computed свойство difference, которое считает разницу между current и initial course.
10. Вывести difference в шаблон в 3 колонку и сделать динамическое изменения цвета в зависимости от знака
