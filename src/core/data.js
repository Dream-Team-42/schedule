export const data = () => {
    let i = 0;
    const rez = [];
    while(i <= 20) {
        i++;
        rez.push({
            key: i,
            dateStart: '2020-07-27',
            time: '12:00',
            type: i%3 ? ['questions', 'lection', 'open lesson'] : ['Deadline'],
            thema: i%3 ? `Тест как учиться в RSSchool.
                Ссылка будет в Discord. Его необходимо пройти за 24 часа` : 'HTML & CSS - Building first simple page',
            timeToComplete: '20h',
            materials: i%3 ? 'Данный тест без оценки и дедлайна, темы - dom, dom events' : 'Построение форм',
            lecturer: 'Максим Шеко, Денис Шеко',
        })
    }
    console.log(rez)
    return rez;
}
